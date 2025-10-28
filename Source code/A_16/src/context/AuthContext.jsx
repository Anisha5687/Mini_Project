
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { __AUTH, __DB } from "../backend/FirebaseConfig";

// 🔹 Create Auth Context
export const AuthContextAPI = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null); // user object with role
  const [loading, setLoading] = useState(true); // to prevent flicker

  useEffect(() => {
    // Listen to Firebase auth state changes
    const unsubscribe = onAuthStateChanged(__AUTH, async (userInfo) => {
      if (userInfo) {
        try {
          // Reference to Firestore user document
          const userDocRef = doc(__DB, "users", userInfo.uid);
          const userDocSnap = await getDoc(userDocRef);

          // If user does not exist in Firestore, create doc with default role
          if (!userDocSnap.exists()) {
            await setDoc(userDocRef, {
              uid: userInfo.uid,
              displayName: userInfo.displayName || "Anonymous",
              email: userInfo.email,
              photoURL: userInfo.photoURL || "",
              role: "user", // default role
            });
          }

          const userData = userDocSnap.exists()
            ? userDocSnap.data()
            : { role: "user" };

          setAuthUser({
            uid: userInfo.uid,
            email: userInfo.email,
            displayName: userInfo.displayName,
            photoURL: userInfo.photoURL,
            role: userData.role || "user", // default to user
          });

          // Store accessToken for API usage if needed
          window.localStorage.setItem("TOKEN", userInfo.accessToken);
        } catch (error) {
          console.error("Error fetching/creating user data:", error);
          setAuthUser({ ...userInfo, role: "user" });
        }
      } else {
        setAuthUser(null);
        window.localStorage.removeItem("TOKEN");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContextAPI.Provider value={{ authUser, setAuthUser, loading }}>
      {children}
    </AuthContextAPI.Provider>
  );
};

export default AuthProvider;

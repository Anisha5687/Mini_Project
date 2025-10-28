import React, { createContext, useContext, useEffect, useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { __DB as db, __AUTH as auth } from "../backend/FirebaseConfig";

const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) loadWishlist(firebaseUser.uid);
      else setWishlist([]);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const loadWishlist = async (uid) => {
    try {
      const docRef = doc(db, "wishlists", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setWishlist(docSnap.data().items || []);
      else setWishlist([]);
    } catch (err) {
      console.error("Error loading wishlist:", err);
    }
  };

  const saveWishlist = async (updatedWishlist) => {
    try {
      if (user) {
        await setDoc(doc(db, "wishlists", user.uid), {
          items: updatedWishlist,
          lastUpdated: new Date().toISOString(),
        });
      }
    } catch (err) {
      console.error("Error saving wishlist:", err);
    }
  };

  const addToWishlist = (item) => {
    if (!user) {
      alert("Please log in to add items to wishlist.");
      return false;
    }

    const isDuplicate = wishlist.some(
      (w) => w.id === item.id && w.color === item.color && w.size === item.size
    );

    if (!isDuplicate) {
      const wishlistItem = {
        ...item,
        image: item.image || "https://via.placeholder.com/300x200?text=No+Image",
        addedAt: new Date().toISOString(),
        uniqueId: `${item.id}-${item.color}-${item.size}`,
      };
      const updatedWishlist = [...wishlist, wishlistItem];
      setWishlist(updatedWishlist);
      saveWishlist(updatedWishlist);
      return true;
    } else {
      alert("⚠️ This item is already in your wishlist!");
      return false;
    }
  };

  const removeFromWishlist = (id, color = null, size = null) => {
    const updatedWishlist = color && size
      ? wishlist.filter(item => !(item.id === id && item.color === color && item.size === size))
      : wishlist.filter(item => item.id !== id);
    setWishlist(updatedWishlist);
    saveWishlist(updatedWishlist);
  };

  const clearWishlist = () => {
    setWishlist([]);
    if (user) saveWishlist([]);
  };

  const isInWishlist = (id, color = null, size = null) => {
    return color && size
      ? wishlist.some(item => item.id === id && item.color === color && item.size === size)
      : wishlist.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist, user, loading }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

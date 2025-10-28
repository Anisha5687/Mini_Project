
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your Firebase project config
// const firebaseConfig = {
//   apiKey: "AIzaSyB1P1tWK2ph7uHLLOPjn6IXQVZWY3vl7DE",
//   authDomain: "project-react-b24fe.firebaseapp.com",
//   projectId: "project-react-b24fe",
//   storageBucket: "project-react-b24fe.firebasestorage.app",
//   messagingSenderId: "614293532084",
//   appId: "1:614293532084:web:35ac55a39ffec5c29456e1"
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

//  Export initialized services
// export const __AUTH = getAuth(firebaseApp);
// export const __DB = getFirestore(firebaseApp);
// export const __GOOGLE_PROVIDER = new GoogleAuthProvider(); 

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyB1P1tWK2ph7uHLLOPjn6IXQVZWY3vl7DE",
  authDomain: "project-react-b24fe.firebaseapp.com",
  projectId: "project-react-b24fe",
  storageBucket: "project-react-b24fe.firebasestorage.app",
  messagingSenderId: "614293532084",
  appId: "1:614293532084:web:35ac55a39ffec5c29456e1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export initialized services
export const __AUTH = getAuth(firebaseApp);
export const __DB = getFirestore(firebaseApp);
export const __GOOGLE_PROVIDER = new GoogleAuthProvider(); 
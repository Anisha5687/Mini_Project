
// import React, { useState, useEffect } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { FcGoogle } from "react-icons/fc";
// import { NavLink, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import {
//   signInWithEmailAndPassword,
//   sendEmailVerification,
//   signInWithPopup,
// } from "firebase/auth";
// import { __AUTH, __GOOGLE_PROVIDER } from "../backend/FirebaseConfig";
// import { motion, AnimatePresence } from "framer-motion";

// const images = ["/img 1.jpg", "/img 2.jpg", "/img 3.jpg", "/img 4.jpg"]; // place images in /public

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [index, setIndex] = useState(0);
//   const navigate = useNavigate();

//   // Auto slideshow
//   useEffect(() => {
//     const interval = setInterval(() => nextSlide(), 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + images.length) % images.length);

//   // Email/Password Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         __AUTH,
//         email,
//         password
//       );
//       if (!userCredential.user.emailVerified) {
//         await sendEmailVerification(userCredential.user);
//         toast("Please verify your email before login.", { icon: "⚠" });
//       } else {
//         toast.success("Login successful 🎉");
//         navigate("/"); // ✅ redirect to home
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // Google Login
//   const handleGoogleLogin = async () => {
//     try {
//       await signInWithPopup(__AUTH, __GOOGLE_PROVIDER);
//       toast.success("Google Login successful 🎉");
//       navigate("/"); // ✅ redirect to home
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100 items-center justify-center">
//       <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
//         {/* Slideshow */}
//         <div className="hidden md:flex w-1/2 relative overflow-hidden">
//           <AnimatePresence>
//             <motion.img
//               key={index}
//               src={images[index]}
//               alt="Slide"
//               className="absolute w-full h-full object-cover"
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "-100%" }}
//               transition={{ duration: 0.8 }}
//             />
//           </AnimatePresence>

//           {/* Prev/Next Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
//           >
//             <IoIosArrowBack size={24} />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
//           >
//             <IoIosArrowForward size={24} />
//           </button>

//           {/* Dots */}
//           <div className="absolute bottom-4 w-full flex justify-center gap-2">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setIndex(i)}
//                 className={`w-3 h-3 rounded-full ${
//                   i === index ? "bg-white" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Login Form */}
//         <div className="flex w-full md:w-1/2 justify-center items-center p-8">
//           <motion.div
//             className="w-full max-w-md"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

//             <form onSubmit={handleLogin} className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium">Password</label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <button
//                     type="button"
//                     className="absolute inset-y-0 right-3 flex items-center text-gray-500"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               >
//                 Login
//               </button>
//             </form>

//             <div className="my-4 flex items-center">
//               <hr className="flex-grow border-gray-300" />
//               <span className="px-2 text-sm text-gray-500">or</span>
//               <hr className="flex-grow border-gray-300" />
//             </div>

//             <button
//               onClick={handleGoogleLogin}
//               className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
//             >
//               <FcGoogle size={20} className="mr-2" />
//               Continue with Google
//             </button>

//             <p className="text-sm text-center mt-4">
//               Don’t have an account?{" "}
//               <NavLink
//                 to="/auth/register"
//                 className="text-blue-600 hover:underline"
//               >
//                 Register
//               </NavLink>
//             </p>

//             <p className="text-sm text-center mt-1">
//               <NavLink
//                 to="/auth/forget-password"
//                 className="text-gray-600 hover:underline"
//               >
//                 Forgot Password?
//               </NavLink>
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  signInWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { __AUTH, __GOOGLE_PROVIDER, __DB } from "../backend/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { AuthContextAPI } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/img 1.jpg", "/img 2.jpg", "/img 3.jpg", "/img 4.jpg"]; // place images in /public

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { setAuthUser } = useContext(AuthContextAPI);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        __AUTH,
        email,
        password
      );
      const user = userCredential.user;

      if (!user.emailVerified) {
        await sendEmailVerification(user);
        toast("Please verify your email before login.", { icon: "⚠" });
        return;
      }

      // Fetch role from Firestore
      const userDocRef = doc(__DB, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      const userData = userDocSnap.exists()
        ? userDocSnap.data()
        : { role: "user" };

      setAuthUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: userData.role,
      });

      toast.success("Login successful 🎉");

      // Redirect based on role
      if (userData.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/"); // normal user home
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(__AUTH, __GOOGLE_PROVIDER);
      const user = result.user;

      // Fetch role from Firestore or set default
      const userDocRef = doc(__DB, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      let userData = {};
      if (!userDocSnap.exists()) {
        // If user doesn't exist, create with default role
        userData = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          role: "user",
        };
      } else {
        userData = userDocSnap.data();
      }

      setAuthUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        role: userData.role,
      });

      toast.success("Google Login successful 🎉");

      if (userData.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 items-center justify-center">
      <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Slideshow */}
        <div className="hidden md:flex w-1/2 relative overflow-hidden">
          <AnimatePresence>
            <motion.img
              key={index}
              src={images[index]}
              alt="Slide"
              className="absolute w-full h-full object-cover"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>

          {/* Prev/Next Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
          >
            <IoIosArrowForward size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Login Form */}
        <div className="flex w-full md:w-1/2 justify-center items-center p-8">
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </button>
            </form>

            <div className="my-4 flex items-center">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-sm text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <FcGoogle size={20} className="mr-2" />
              Continue with Google
            </button>

            <p className="text-sm text-center mt-4">
              Don’t have an account?{" "}
              <NavLink
                to="/auth/register"
                className="text-blue-600 hover:underline"
              >
                Register
              </NavLink>
            </p>

            <p className="text-sm text-center mt-1">
              <NavLink
                to="/auth/forget-password"
                className="text-gray-600 hover:underline"
              >
                Forgot Password?
              </NavLink>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

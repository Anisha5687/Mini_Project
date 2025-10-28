
// import React, { useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { signOut } from "firebase/auth";
// import { __AUTH } from "../backend/FirebaseConfig";
// import { AuthContextAPI } from "../context/AuthContext";
// import toast from "react-hot-toast";
// import { FiHeart, FiShoppingCart, FiSearch, FiUser, FiHome, FiFileText } from "react-icons/fi";

// const Menu = () => {
//   const { authUser, setAuthUser } = useContext(AuthContextAPI);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(__AUTH);
//       setAuthUser(null);
//       toast.success("Logged out successfully");
//       navigate("/auth/login");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   return (
//     <nav className="bg-white shadow-md py-3 px-6">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div className="w-32"></div>

//         {/* Search Bar */}
//         {authUser?.role !== "admin" && (
//           <div className="flex items-center w-full max-w-md border border-gray-300 rounded-full px-4 py-2 bg-white">
//             <input
//               type="text"
//               placeholder="Search for gifts"
//               className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
//             />
//             <FiSearch size={20} className="text-gray-500 ml-2" />
//           </div>
//         )}

//         {/* Right Menu */}
//         <div className="flex items-center gap-6">
//           <NavLink to="/" className="hover:text-gray-700">
//             <FiHome size={22} />
//           </NavLink>

//           {authUser?.role !== "admin" && (
//             <>
//               <NavLink to="/wishlist" className="hover:text-gray-700">
//                 <FiHeart size={22} />
//               </NavLink>
//               <NavLink to="/cart" className="hover:text-gray-700">
//                 <FiShoppingCart size={22} />
//               </NavLink>
//             </>
//           )}

//           {authUser?.role === "admin" && (
//             <NavLink to="/admin/orders" className="flex items-center gap-1 hover:text-gray-700">
//               <FiFileText size={22} />
//               <span>Orders</span>
//             </NavLink>
//           )}

//           {/* Profile / Logout */}
//           {authUser ? (
//             <div className="relative group">
//               <NavLink to="/">
//                 <img
//                   src={authUser.photoURL || "default-avatar.png"}
//                   alt="Profile"
//                   className="h-9 w-9 rounded-full object-cover border"
//                 />
//               </NavLink>
//               <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border shadow-md rounded-lg z-30">
//                 {authUser.role !== "admin" && (
//                   <>
//                     <NavLink to="/user-profile" className="block px-4 py-2 text-sm hover:bg-gray-100">My Account</NavLink>
//                     <NavLink to="/user-profile/update-profile" className="block px-4 py-2 text-sm hover:bg-gray-100">Update Profile</NavLink>
//                     <NavLink to="/user-profile/update-password" className="block px-4 py-2 text-sm hover:bg-gray-100">Change Password</NavLink>
//                   </>
//                 )}
//                 <button
//                   onClick={handleLogout}
//                   className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left text-red-600"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <NavLink to="/auth/login">
//               <div className="h-9 w-9 flex items-center justify-center rounded-full border text-black hover:text-gray-700">
//                 <FiUser size={20} />
//               </div>
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Menu;
import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { __AUTH } from "../backend/FirebaseConfig";
import { AuthContextAPI } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FiHeart, FiShoppingCart, FiSearch, FiUser, FiHome, FiFileText } from "react-icons/fi";

const Menu = () => {
  const { authUser, setAuthUser } = useContext(AuthContextAPI);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(__AUTH);
      setAuthUser(null);
      toast.success("Logged out successfully");
      navigate("/auth/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-32"></div>

        {/* Search Bar - Only for non-admins */}
        {authUser?.role !== "admin" && (
          <div className="flex items-center w-full max-w-md border border-gray-300 rounded-full px-4 py-2 bg-white">
            <input
              type="text"
              placeholder="Search for gifts"
              className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
            <FiSearch size={20} className="text-gray-500 ml-2" />
          </div>
        )}

        {/* Right Menu */}
        <div className="flex items-center gap-6">
          {/* Home */}
          <NavLink to="/" className="hover:text-gray-700">
            <FiHome size={22} />
          </NavLink>

          {/* Wishlist & Cart - Only for non-admins */}
          {authUser?.role !== "admin" && (
            <>
              <NavLink to="/wishlist" className="hover:text-gray-700">
                <FiHeart size={22} />
              </NavLink>
              <NavLink to="/cart" className="hover:text-gray-700">
                <FiShoppingCart size={22} />
              </NavLink>
            </>
          )}

          {/* Admin Dashboard Link */}
          {authUser?.role === "admin" && (
            <NavLink
              to="/admin/orders"
              className="flex items-center gap-1 hover:text-gray-700"
            >
              <FiFileText size={22} />
              <span>Admin Dashboard</span>
            </NavLink>
          )}

          {/* Profile / Logout */}
          {authUser ? (
            <div className="relative group">
              <NavLink to="/">
                <img
                  src={authUser.photoURL || "default-avatar.png"}
                  alt="Profile"
                  className="h-9 w-9 rounded-full object-cover border"
                />
              </NavLink>
              <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border shadow-md rounded-lg z-30">
                {/* User Links - Only for non-admins */}
                {authUser.role !== "admin" && (
                  <>
                    <NavLink
                      to="/user-profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      My Account
                    </NavLink>
                    <NavLink
                      to="/user-profile/update-profile"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Update Profile
                    </NavLink>
                    <NavLink
                      to="/user-profile/update-password"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      Change Password
                    </NavLink>
                  </>
                )}

                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left text-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <NavLink to="/auth/login">
              <div className="h-9 w-9 flex items-center justify-center rounded-full border text-black hover:text-gray-700">
                <FiUser size={20} />
              </div>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

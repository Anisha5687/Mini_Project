import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";
import toast from "react-hot-toast";
const UpdatePassword = () => {
  const [currentPassword, setCurrentPassword] = useState(""); 
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) {
      toast.error("Please enter both current and new passwords.");
      return;
    }

    try {
    

      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);
      toast.success("Password updated successfully!");

      navigate("/auth/login");
    } catch (error) {
      toast.error(error.message);
    } 
  };

  return (
    <section className="h-[calc(100vh-70px)] w-[100%] bg-slate-900 flex justify-center items-center">
      <div className="w-[30%] bg-slate-800 p-4 rounded-3xl">
        <header>
          <h1 className="text-center text-2xl">Update Password</h1>
        </header>
        <main className="p-2">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg">Current Password</label>
              <input
                type="password"
                className="outline-none border-1 w-[100%] my-1 rounded-md pl-2"
                placeholder="Enter Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-lg">New Password</label>
              <input
                type="password"
                className="outline-none border-1 w-[100%] my-1 rounded-md pl-2"
                placeholder="Enter New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button className="bg-blue-600 rounded-lg py-1 p-2 my-1 w-[100%] cursor-pointer hover:bg-blue-800">
                Update Password
              </button>
            </div>
            <div className="mt-2 text-center">
              <NavLink
                to="/auth/login"
                className="bg-red-500 block py-1 rounded-lg font-semibold hover:bg-red-700">
                Cancel
              </NavLink>
            </div>
          </form>
        </main>
      </div>
     
    </section>
  );
};

export default UpdatePassword;

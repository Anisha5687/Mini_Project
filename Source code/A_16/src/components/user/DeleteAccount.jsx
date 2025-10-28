import React, { useState } from "react";
import { getAuth, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const DeleteAccount = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  

  const handleReauthenticateAndDelete = async () => {
    if (!user) {
      toast.error("No user is logged in!");
      return;
    }

    const credential = EmailAuthProvider.credential(user.email, password);

    try {
    
      await reauthenticateWithCredential(user, credential);
    
      await deleteUser(user);
      toast.success("Account deleted successfully!");
      navigate("/auth/register");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="h-screen w-full flex justify-center items-center bg-slate-900">
      <div className="w-96 bg-slate-800 p-6 rounded-2xl text-center">
        <h2 className="text-xl text-white mb-4">Delete Account</h2>
        <p className="text-gray-300 mb-4">
          Please enter your password to confirm deletion.
        </p>
        <input
          type="password"
           className="outline-none border-1 w-[100%] my-1 rounded-md pl-2"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          onClick={handleReauthenticateAndDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 w-full cursor-pointer mt-4"
        >
          Delete My Account
        </button>
      </div>
   
    </section>
  );
};

export default DeleteAccount;

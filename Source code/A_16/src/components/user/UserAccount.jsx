import React, { useContext, useState } from "react";
import { AuthContextAPI } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";

const UserAccount = () => {
  let { authUser } = useContext(AuthContextAPI);
  let [profile, setProfile] = useState(null);
  return (
    <section className="h-[100%] w-[100%]  flex items-center justify-center">
      <article className="min-h-[340px] w-[40%] bg-slate-900 rounded-xl p-4 ">
        <header className="h-[100%] w-[100%] bg-slate-700 rounded-t-xl  flex flex-col items-center">
          <img
            src={authUser?.photoURL}
            className="h-28 w-28 rounded-full -mt-16"
            alt=""
          />
          <h2>{authUser?.displayName}</h2>
          <p>{authUser?.email}</p>
        </header>
        {profile ? (
          "User Data"
        ) : (
          <>
            <div className="h-[150px] w-[100%] flex items-center justify-center gap-4 flex-col text-white">
              <h1 className="text-lg">User data not present</h1>
              <NavLink
                to="/user-profile/update-profile"
                className="bg-blue-800 p-2 rounded-lg">
                Add user data
              </NavLink>
            </div>
          </>
        )}
      </article>
    </section>
  );
};

export default UserAccount;

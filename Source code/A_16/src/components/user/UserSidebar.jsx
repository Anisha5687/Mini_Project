
import React from 'react'
import { NavLink } from 'react-router-dom'
import { SlPicture } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdAccountBalance, MdDelete } from "react-icons/md";

const UserSidebar = () => {
  return (
    <div className="h-full w-[20%] bg-slate-600 px-4 py-8 flex flex-col shrink-0">
      <ul className="flex flex-col gap-5">
        <li>
          <NavLink
            to="/user-profile"
            end
            className={({ isActive }) =>
              `hover:bg-blue-800 w-full px-2 font-semibold py-2 rounded-lg flex items-center gap-2 text-lg text-white ${
                isActive && "bg-blue-600 border-1"
              }`
            }
          >
            <span><MdAccountBalance /></span> My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/update-profile"
            className={({ isActive }) =>
              `hover:bg-blue-800 w-full px-2 font-semibold py-2 rounded-lg flex items-center gap-2 text-lg text-white ${
                isActive && "bg-blue-600 border-1"
              }`
            }
          >
            <span><CgProfile /></span> Update Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/update-picture"
            className={({ isActive }) =>
              `hover:bg-blue-800 w-full px-2 font-semibold py-2 rounded-lg flex items-center gap-2 text-lg text-white ${
                isActive && "bg-blue-600 border-1"
              }`
            }
          >
            <span><SlPicture /></span> Update Picture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/update-password"
            className={({ isActive }) =>
              `hover:bg-blue-800 w-full px-2 font-semibold py-2 rounded-lg flex items-center gap-2 text-lg text-white ${
                isActive && "bg-blue-600 border-1"
              }`
            }
          >
            <span><RiLockPasswordFill /></span> Update Password
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/user-profile/delete-account"
            className={({ isActive }) =>
              `hover:bg-blue-800 w-full px-2 font-semibold py-2 rounded-lg flex items-center gap-2 text-lg text-white ${
                isActive && "bg-blue-600 border-1"
              }`
            }
          >
            <span><MdDelete /></span> Delete Account
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default UserSidebar

import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { __AUTH } from '../backend/FirebaseConfig'
import toast from 'react-hot-toast'




const ForgetPassword = () => {
    let[email,setEmail]=useState(" ")
    let navigate=useNavigate();
   

    const handleChange=(e)=>{
        setEmail(e.target.value);
    }
    let handleSubmit=async (e)=>{
        e.preventDefault();
        try{
          
          await  sendPasswordResetEmail(__AUTH,email)
          toast.success("Reset link sent to mail")
          navigate("/auth/login")

        }catch{
            toast.success(error.message);
            
        }
        

    }

  return (
    <section className="h-[calc(100vh-70px)] w-[100%] bg-slate-900 flex justify-center items-center">
      <div className=" w-[30%] bg-slate-800 p-4 rounded-3xl ">
        <header>
          <h1 className="text-center text-2xl">Reset Password</h1>
        </header>
        <main className="p-2">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
           
            <div>
              <label htmlFor="" className="block text-lg">
                Email
              </label>
              <input
                type="email"
                className="outline-none border-1 w-[100%]  my-1 rounded-md pl-2"
                id="email"
                placeholder="Enter Email"
                onChange={handleChange}
                name="email"
                value={email}
              />
            </div>
            
           
            <div>
              <button className="bg-blue-600 rounded-lg py-1 p-2 my-1 w-[100%] cursor-pointer hover:bg-blue-800 ">
                Reset Password
              </button>
            </div>
                <div className='mt-2 text-center'> 
                <NavLink to="/auth/login" className="bg-red-500 block py-1 rounded-lg font-semibold hover:bg-red-700">
                  Cancel
                </NavLink>
                </div> 
                
          </form>
        </main>
      </div>
   
    </section>
 
  )
}

export default ForgetPassword
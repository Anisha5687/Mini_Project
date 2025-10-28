import React, { useState } from 'react'
import { AuthContextAPI } from '../../context/AuthContext';
import { useContext } from 'react';
import { __DB } from '../../backend/FirebaseConfig';
import toast from 'react-hot-toast';

const UpdateProfile = () => {

let { authUser } = useContext(AuthContextAPI);
  let[data,setData]=useState(
    {
      phonenumber:"",
      dob:"",
      language:"",
      gender:"",
      address:""
    }
  )
  let{phonenumber,
    dob,
    language,
    gender,
    address}=data
    let handleChange=(e)=>{
      let key=e.target.name;
      let value=e.target.value;
      setData({...data,[key]:value})

    }
    let handlesubmit=async (e)=>{
      e.preventDefault();
      let{displayName,email,photoURL,uid}=authUser;
      // console.log(data);
      let payload={
        name:displayName,
        email:email,
        
        photo:photoURL,
        id:uid,
        phonenumber:phonenumber,
        dob:dob,
        language:language,
        gender:gender,
        address:address,
        role:"user"
      }
      console.log(payload);
      try{
      let user_collection=  doc(__DB,"user__profile",uid)
     await setDoc(user_collection,payload)
      }catch(error){

        toast.error(error.message)
      }
      
      

    }
  return (
    <section className="h-[100%] w-[100%] flex items-center justify-center">
      <article className="min-h-[400px] w-[60%] bg-slate-900 rounded-xl p-4 ">
        <h1 className='text-center text-2xl'>Upload Profile Data</h1>

        <form className='mt-8 flex flex-col gap-4' onSubmit={handlesubmit}>
         <article className='flex gap-5 '>
         <div className='flex flex-col w-[48%]'>
          <label htmlFor="phonenumber" className='block text-[18px]'>Phone Number</label>
          <input type="tel" id='phonenumber' placeholder='enter the phone number' className='outline-none py-2 px-2 bg-amber-50 rounded-lg text-black' onChange={handleChange} name='phonenumber' value={phonenumber} />
          </div>
          <div className='flex flex-col w-[48%]'>
          <label htmlFor="dob" className='block text-[18px]'>Date od Birth</label>
          <input type='date' id='dob' placeholder='enter the date of birth' className='outline-none py-2 px-2 bg-amber-50 rounded-lg text-black' onChange={handleChange} name='dob' value={dob} />
          </div>
         </article>
         <article className='flex gap-5 '>
         <div className='flex flex-col w-[48%]'>
          <label htmlFor="language" className='block text-[18px]'>Languages</label>
          <input type="text" id='language' placeholder='enter the languages' className='outline-none py-2 px-2 bg-amber-50 rounded-lg text-black' onChange={handleChange} name='language' value={language} />
          </div>
          <div className='flex flex-col gap-2'>
          <label htmlFor="gender" className='block text-[18px] '>Gender</label>
          <div className='flex gap-2 font-semibold text-lg'>
          <input type="radio" onChange={handleChange} name="gender" value="male" />
          <span>Male</span>
          <input type="radio" onChange={handleChange} name="gender" value="Female" /><span>Female</span>
          <input type="radio"onChange={handleChange} name="gender" value="others" /><span>Others</span>
          </div>
          </div>
          </article>
          <article>
          <div className='flex flex-col w-[100%]'>
          <label htmlFor="address" className='block text-[18px]'>Address</label>
          <input type="textarea" id='address' placeholder='enter the address' className='outline-none py-2 px-2 bg-amber-50 rounded-lg text-black h-[60px] 'onChange={handleChange} name="address" value={address} />
          
         </div>

         </article>
         <article>
          <button className='w-[100%] bg-blue-600 font-semibold hover:bg-blue-800  rounded-lg p-3' >
            Submit
          </button>
         </article>
        
        </form>
        </article>
    </section>
  )
}

export default UpdateProfile
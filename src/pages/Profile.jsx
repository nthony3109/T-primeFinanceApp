import React from 'react'
 import { CalendarCheck , Receipt, SettingsIcon, ChevronRight, LockKeyhole, HelpCircle, LogOutIcon
  } from "lucide-react"
import { NavLink } from 'react-router-dom'


const Profile = () => {
  return (
    <div className= 'h-max w-screen font-sans bg-slate-200 p-2 pb-10 md:pt-0'>   
    {/* profile details */}
        <div className='flex flex-col items-center p-5 m-5 mb-2'>
          <img src="" alt="DT" className="w-30 text-center content-center text-white font-bold text-2xl bg-blue-400 h-30 rounded-full" />
          <h1 className=" text-black font-bold capitalize "> Dev Tony</h1>
          <p className=" text-blue-600 font-semibold text-[12px]">Finance Enthusiast</p>
          <p className="text-slate-500 text-[12px] font-semibold">devtony74@gmail.com </p>
        </div>

        {/* //section of total tnx and join date */}
        <div className = "grid grid-cols-2 gap-0 p-5 h-30 shadow-sm shadow-slate-300 rounded-lg bg-slate-100 ml-5 mr-5">
          {/* //total transactions */}
          <div className='flex grid-cols-2 p-1 m-2  border-r-2 border-slate-200'>
              <Receipt className=' text-lg text-blue-600 bg-blue-200 h-10 w-10 p-2 mt-1.5 mr-2 rounded-full' />
              <div className='flex flex-col p-1 m-0'>
                <p className='text-[12px] text-slate-500 font-semibold'>Total Transactions</p>
              <p className='text-blue-600 font-semibold'>20</p>
         </div>
        </div>
          {/* //join date */}
         <div className='grid grid-cols-2 m-2 p-1 w-40 '>
           <CalendarCheck className='w-10 h-10 p-2 mt-1.5 rounded-full text-lg text-blue-600 bg-blue-200'/>
            <div className='flex flex-col p-1 -ml-7'>
             <p className='text-[12px] text-slate-500 font-semibold'>Member Since</p>
              <h1 className='text-blue-600 col-start-2 font-semibold'>May 2025</h1>
            </div>
          </div>
        </div>
        {/* the utility section of the profile page */}
        <div className= 'bg-slate-100 rounded-lg shadow-sm shadow-slate-300 p-5 m-5'>
          {/* settings */}
          <NavLink to="" className= "flex flex-row items-center p-5 pt-0 pl-0">
            <SettingsIcon className='text-slate-600 text-[12px] font-semibold' />
              <p className='text-slate-600 text-sm font-semibold ml-1.5'>Account Settings</p>
              <ChevronRight className='text-slate-600 text-sm ml-auto sel font-semibold' />
          </NavLink>
          {/* security */}
          <NavLink className= "flex flex-row items-center p-5 pl-0 border-t border-slate-300">
            <LockKeyhole className='text-slate-600 text-[12px] font-semibold' />
              <p className='text-slate-600 text-sm font-semibold ml-1.5'>Security</p>
              <ChevronRight className='text-slate-600 text-sm ml-auto sel font-semibold' />
          </NavLink>
          {/* help and support */}
            <NavLink className= "flex flex-row items-center p-5 pl-0 border-t border-slate-300">
              <HelpCircle className='text-slate-600 text-[12px] font-semibold' />
              <p className='text-slate-600 text-sm font-semibold ml-1.5'>Help and Support</p>
              <ChevronRight className='text-slate-600 text-sm ml-auto sel font-semibold' />
          </NavLink>
          <NavLink className= "flex flex-row items-center p-5 pl-0 pb-0 border-t border-slate-300 ">
             <LogOutIcon className='text-red-600 text-[12px] font-semibold' />
              <p className='text-red-600 text-sm font-semibold ml-1.5'>Logout</p>
              <ChevronRight className='text-slate-600 text-sm ml-auto sel font-semibold' />
          </NavLink>
      
        </div>
    </div>
  )
}

export default Profile
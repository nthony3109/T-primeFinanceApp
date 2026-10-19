import React from 'react'
import { ChevronRight, SettingsIcon, ArrowLeft, UserRound, Bell, Moon, BadgeCheck } from 'lucide-react'
import { NavLink } from 'react-router-dom';


const Settings = () => {
    return (
        <div className="h-screen w-screen bg-slate-200 font-sans">
          <div className=" m-5 ml-0 mt-0 flex flex-row items-center">
           <NavLink to="/profile" className="flex flex-row items-center">
            <ArrowLeft className="text-slate-600 text-lg ml-5 mr-3 font-bold" />
           </NavLink>
            <h1 className="text-slate-600 font-bold text-2xl pb-5 pt-5">Account Settings</h1>
          </div>
          {/* //profile settings */}
          <div className="bg-slate-100 m-5 p-5 rounded-lg shadow-sm shadow-slate-300">
                <div className='flex flex-row items-center mb-5'>
                        <UserRound size={80} className='text-blue-600 p-2 bg-blue-200 rounded-full ' />
                        <div className='ml-7'>
                            <h1 className='text-2xl font-bold text-slate-700'>Tony Dev</h1>
                            <p className='text-sm text-slate-500 font-semibold mt-1 mb-3'>devtony74@gmail.com</p>
                            <div className=' flex flex-row items-center rounded-full bg-blue-200 p-1 pr-2 w-fit'>
                                <BadgeCheck className='text-sm text-blue-600' />
                                <p className='text-sm font-semibold ml-1  text-blue-500'>Verified</p>
                            </div>
                        </div>         
                </div>
                <p className='text-slate-500'>Manage your account information and preferences.</p>
            </div>
            {/* //settings options */}
            <div className="bg-slate-100 m-5 mb-50 p-5 rounded-lg shadow-sm shadow-slate-300">
                {/* personal information */}
             <NavLink to="" className="flex flex-row items-center p-5      pl-0 ">
                <UserRound size={50} className ="text-blue-600 rounded-full bg-blue-200 p-1"/>
                <div className=' ml-5 mr-'>
                    <h1 className='font-bold text-slate-600 '>Personal Information</h1>
                    <p className='text-slate-500 text-sm'>Update your name, email and profile details.</p>
                </div>
                <ChevronRight className='text-slate-600 text-sm ml-auto sel font-semibold' />
             </NavLink>
             {/* preferences */}
             <NavLink to="" className="flex flex-row border-t border-slate-400 items-center p-5      pl-0 ">
                <SettingsIcon size={50} className ="text-blue-600 rounded-full bg-blue-200 p-1"/>
                <div className=' ml-5 mr-'>
                    <h1 className='font-bold text-slate-600 '>Preferences</h1>
                    <p className='text-slate-500 text-sm'>Set your currency,date format, etc.</p>
                </div>
                <ChevronRight className='text-slate-600 text-sm ml-auto sel font-semibold' />
             </NavLink>
             <NavLink to="" className="flex flex-row border-t border-slate-400 items-center p-5      pl-0 ">
                <SettingsIcon size={50} className ="text-blue-600 rounded-full bg-blue-200 p-1"/>
                <div className=' ml-5 mr-'>
                    <h1 className='font-bold text-slate-600 '>Notifications</h1>
                    <p className='text-slate-500 text-sm'>Manage transaction alerts and notifications.</p>
                </div>
                <ChevronRight className='text-slate-600 text-sm ml-auto sel font-semibold' />
             </NavLink>

             <NavLink to="" className="flex flex-row border-t border-slate-400 items-center p-5      pl-0 ">
                <Moon size={50} className ="text-blue-600 rounded-full bg-blue-200 p-1"/>
                <div className=' ml-5 mr-'>
                    <h1 className='font-bold text-slate-600 '>Appearance</h1>
                    <p className='text-slate-500 text-sm'>choose between light and dark mode.</p>
                </div>
                <ChevronRight className='text-slate-600 text-sm ml-auto sel font-semibold' />
             </NavLink>



            </div>
        </div>
    );
}
export default Settings
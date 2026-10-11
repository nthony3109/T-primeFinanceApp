import React from 'react'
 import {ArrowUpIcon, Receipt} from "lucide-react"


const Profile = () => {
  return (
    <div>   
        <h1>profile page</h1>
        <div>
          <img src="" alt="profile" className="w-30 text-center content-center text-white font-bold text-2xl bg-blue-300 h-30 rounded-full" />
          <h1 className=" text-black font-bold capitalize "> pofile name here</h1>
          <p className=" text-blue-600">Finance Enthusiast</p>
          <p className="text-slate-500">Email here </p>
        </div>

        //section of total tnx and join date
        <div>
          //total transactions
          <div className='grid grid-cols-2'>
              <Receipt className=' text-lg text-blue-600 bg-blue-200 h-10 w-10 p-2 rounded-full' />
              <p>total transactions</p>
              <p className='col-start-2'>10</p>
          </div>
          //join date
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Profile
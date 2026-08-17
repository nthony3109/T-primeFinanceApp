import Card from "../components/Card"
import RecentTnx from "../components/RecentTnx"
import { NavLink } from "react-router-dom"

const Dashboard = ({transactions}) => {

  return (
    <div className="bg-slate-200 h-max  w-screen p-2 md:pt-0  ">   
        <div className="font-sans m-5">
          <h1 className="text-lg font-bold">Welcome,track your finances</h1>
          <p className="text-slate-500 ml-2 text-sm font-semibold">Here is your financial overview</p>
        </div>
        <Card tnx={transactions} /> 
        <div>
           <div className="flex justify-between items-center p-2 -mt-8">
            <h1 className="font-semibold font-sans">Recent Transactions</h1>
            <NavLink to="/transactions" className=" text-blue-500 p-2 font-semibold cursor-pointer  font-sans rounded-md">View All</NavLink>
           </div>
          <RecentTnx transactions={transactions} />
        </div>
    </div>
  )
}

export default Dashboard
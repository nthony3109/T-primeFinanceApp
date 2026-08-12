import Card from "./Card"

const Dashboard = () => {
  return (
    <div>   
        <div className="font-sans m-5">
          <h1 className="text-lg font-bold">Welcome,track your finances</h1>
          <p className="text-slate-500 ml-2 text-sm font-semibold">Here is your financial overview</p>
        </div>
        <Card />
    </div>
  )
}

export default Dashboard
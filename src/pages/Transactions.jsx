import { NavLink } from "react-router-dom"
import styles from "../styles/Transactions.module.css"
import All from "../components/All"
import Credits from "../components/Credits"
import Debits from "../components/Debits"
import { useState } from "react"

const Transactions = ({transactions}) => {
  const [activeFilter,setActiveFilter] = useState("all")
  return (
    <div className="bg-slate-200 font-sans h-max pt-3 w-screen">   

      <div className="flex flex-col pl-2.5 mb-5">
        <h1 className="font-bold text-lg ">Transactions</h1>
        <p className="text-slate-500 font-semibold text-sm">transactions</p>
        <div className="mt-5 flex items-start flex-row gap-2 ">
          <button onClick={() => (setActiveFilter("all"))} className={`bg-blue-500 text-white ${styles.filterBtn}`}>All</button>
          <button onClick={() => (setActiveFilter("credit"))} className={`bg-green-100 border border-green-500 text-green-500  ${styles.filterBtn}`}>Credit</button>
          <button onClick={() => (setActiveFilter("debit"))} className={`text-red-500 border border-red-500  ${styles.filterBtn}`}>Debit</button>
        </div>
      </div>
      
      {/* to render the filtered below when the buttons are clicked */}
      { activeFilter === "all" && (
         <All transactions={transactions} />
      )
      }

      {
        activeFilter == "credit" && (
          <Credits transactions={transactions} />
        )
      }
     
     {
      activeFilter == "debit" && (
        <Debits transactions={transactions} />
      )
     }

    </div>
  )
}

export default Transactions
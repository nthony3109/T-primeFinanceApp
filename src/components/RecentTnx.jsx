 import {ArrowUpIcon, ArrowDownIcon,} from "lucide-react"
 import { useState } from "react" 
 import { useEffect } from "react"
 import styles from "../styles/RecentTnx.module.css"

const RecentTnx = ({transactions}) => {
    // console.log(transactions);
    const [recentTnx, setRecentTnx] = useState([])

    const filterRecentTnx = () => {
        console.log("tnx list below")
        console.log(transactions);
        
        const sortedTnx = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
        const recentTransactions = sortedTnx.slice(0, 4);
        setRecentTnx(recentTransactions);
      }
    //   console.log(recentTnx);
      useEffect(() => {
        filterRecentTnx();
      }, [transactions]);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      };

      const formatAmount = (amount) =>  amount.toLocaleString();

  return (


    <div>   
        
        {/* rendring the recent transactions  */}
 {recentTnx.map((r) => (

          
  <div key={r.id} className="" >

     <div className="">
              {r.type == "debit" ?
               
              <div className="flex flex-row items-center justify-between border-l-3 border-l-red-500 shadow-sm shadow-slate-300 m-2 gap-3 rounded-xl p-2">
                {/* left contents and arrow */}
                <div className="flex flex-row gap-2">
               <ArrowUpIcon className={styles.arrowUpActive} />
                  <div className="flex flex-col items-start">
                    <h1 className= "font-bold text-sm" >{r.subject}</h1>
                    <p className="text-slate-500 font-semibold text-sm">{r.description}</p>
                  </div>
                  </div>
                    {/* right hand side contents */}
                  <div>
                      <h1 className="font-bold text-red-500 ">{`-₦ ${formatAmount(r.amount)}`}</h1>
                      <p className="text-sm text-slate-500 font-semibold">{formatDate(r.date)}</p>
                    </div>

              </div>
              
               :
               <div className="flex flex-row items-center justify-between border-l-3 border-l-green-500 shadow-sm shadow-slate-300 m-2 gap-3 rounded-xl p-2">
                
                              {/* left contents and arrow */}
                <div className="flex flex-row gap-2">
                <ArrowDownIcon className={styles.arrowDownActive} />
                  <div className="flex flex-col items-start">
                    <h1 className= "font-bold text-sm" >{r.subject}</h1>
                    <p className="text-slate-500 font-semibold text-sm">{r.description}</p>
                  </div>
                  </div>
                  {/* right side own */}
                                <div>
                      <h1 className="font-bold text-green-500 ">{`+₦ ${formatAmount(r.amount)}`}</h1>
                      <p className="text-sm text-slate-500 font-semibold">{formatDate(r.date)}</p>
                    </div>
               
               </div>
               }
           
        </div>
   
  </div>
))}
        
    </div>
  )
}

export default RecentTnx
import { useState, useEffect } from "react";
import styles from "../styles/All.module.css"
 import {ArrowUpIcon, ArrowDownIcon,} from "lucide-react"

const All = ({transactions}) => {


        const [tnx, setTnx] = useState([])

        // to sort so that recent transactions appear first
        const filterTnx = () => {
    
            const sortedTnx = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
            setTnx(sortedTnx);
          }
       
          useEffect(() => {
            filterTnx();
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
    <div className="">   
               {/* rendring the recent transactions  */}
 {tnx.map((t) => (

          
  <div key={t.id} className="" >

     <div className="">
              {t.type == "debit" ?
               
              <div className={styles.debitDiv}>
                {/* left contents and arrow */}
                <div className="flex flex-row gap-2">
               <ArrowUpIcon className={styles.arrowUpActive} />
                  <div className="flex flex-col items-start">
                    <h1 className= "font-bold text-sm" >{t.subject}</h1>
                    <p className="text-slate-500 font-semibold text-sm">{t.description}</p>
                  </div>
                  </div>
                    {/* right hand side contents */}
                  <div>
                      <h1 className="font-bold text-red-500 ">{`-₦ ${formatAmount(t.amount)}`}</h1>
                      <p className="text-sm text-slate-500 font-semibold">{formatDate(t.date)}</p>
                    </div>

              </div>
              
               :
               <div className={styles.creditDiv}>
                
                              {/* left contents and arrow */}
                <div className="flex flex-row gap-2">
                <ArrowDownIcon className={styles.arrowDownActive} />
                  <div className="flex flex-col items-start">
                    <h1 className= "font-bold text-sm" >{t.subject}</h1>
                    <p className="text-slate-500 font-semibold text-sm">{t.description}</p>
                  </div>
                  </div>
                  {/* right side own */}
                                <div>
                      <h1 className="font-bold text-green-500 ">{`+₦ ${formatAmount(t.amount)}`}</h1>
                      <p className="text-sm text-slate-500 font-semibold">{formatDate(t.date)}</p>
                    </div>
               
               </div>
               }
           
        </div>
   
  </div>
))}
    </div>
  )
}

export default All
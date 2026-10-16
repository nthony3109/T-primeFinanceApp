import styles from "../styles/All.module.css"
 import {ArrowUpIcon, ArrowDownIcon,} from "lucide-react"

const Debits = ({transactions}) => {
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
        {
            transactions.map((t) => (
                <div key={t.id}>
                    {
                        t.type == "debit" ?
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
                         <div> </div>

                    }
                </div>
            ))
        }
    </div>
  )
}

export default Debits
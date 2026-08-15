 import { WalletIcon,ArrowUpIcon, ArrowDownIcon, ArrowBigDown } from "lucide-react"
 import styles from '../styles/Card.module.css'

const Card = ({tnx}) => {

  const totalDebitAmount = tnx.filter(t => t.type == "debit").reduce((acc, t) => {
    return acc + t.amount
  },0)

  const totalCreditAmount = tnx.filter (t => t.type == "credit").reduce((acc, t) => { return acc + t.amount},0)

 const totalBalance = totalCreditAmount - totalDebitAmount

 const totalTnxAmount = tnx.map(t => t.amount).reduce((acc, t) => { return acc + t},0)

 const totalTnxCount = tnx.length
 const totalCreditCount = tnx.filter(t => t.type == "credit").length
 const totalDebitCount = tnx.filter(t => t.type == "debit").length

  return (
    <div className="flex items-center gap-2 justify-around flex-wrap p-5 md:justify-center-safe">   

        {/* total balance card */}
        <div className={styles.card}>
            <h2 className="text-slate-500 mb-2 font-bold text-[10px]">Total Balance</h2>
            <h1 className="text-sm font-bold">{`₦ ${totalBalance.toLocaleString()}`}</h1>
        <div className="flex flex-col items-center">
             <WalletIcon className={styles.walletIcon} />
             <p className="text-slate-500 mt-4 font-bold text-[10px]">All accounts</p>
        </div>
        </div>

            {/* total credit card */}
         <div className={styles.card}>
            <h2 className="text-slate-500 mb-2 font-bold text-[10px]">Total Credits</h2>
            <h1 className="text-sm font-bold">{`₦ ${totalCreditAmount.toLocaleString()}`}</h1>
        <div className="flex flex-col items-center">
             <ArrowUpIcon className={styles.arrowUpIcon} />
             <p className="text-green-500 mt-4 font-bold text-[10px]">{totalCreditCount} credits</p>
        </div>
        </div>

            {/* total debit card */}
         <div className={styles.card}>
            <h2 className="text-slate-500 mb-2 font-bold text-[10px]">Total Debits</h2>
            <h1 className="text-sm font-bold">{`₦ ${totalDebitAmount.toLocaleString()}`}</h1>
        <div className="flex flex-col items-center">
             <ArrowDownIcon className={styles.arrowDownIcon} />
             <p className="text-red-500 mt-4 font-bold text-[10px]">{totalDebitCount} Debits</p>
        </div>
        </div>

        {/* total transactions */}

        <div className={styles.card}>
            <h2 className="text-slate-500 mb-2 font-bold text-[10px]">Total Transactions</h2>
            <h1 className="text-sm font-bold">{`₦ ${totalTnxAmount.toLocaleString()}`}</h1>
        <div className="flex flex-col items-center">
             <div  className="flex gap-2">
              <ArrowUpIcon className={styles.totalArrowUpIcon} />
              <ArrowDownIcon className={styles.totalArrowDownIcon} />
             </div>
             <p className="text-slate-500 mt-4 font-bold text-[10px]"> {totalTnxCount} Transactions</p>
        </div>
        </div>
    </div>
  )
}

export default Card
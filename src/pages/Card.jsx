 import { WalletIcon,ArrowUpIcon, ArrowDownIcon, ArrowBigDown } from "lucide-react"
 import styles from '../styles/Card.module.css'

const Card = () => {
  return (
    <div className="flex items-center gap-2 justify-around flex-wrap p-5">   
        <div className={styles.card}>
            <h2 className="text-slate-500 mb-2 font-bold text-[10px]">Total Balance</h2>
            <h1 className="text-sm font-bold">NGN2,000</h1>
        <div className="flex flex-col items-center">
             <WalletIcon className={styles.walletIcon} />
             <p className="text-slate-500 mt-4 font-bold text-[10px]">All accounts</p>
        </div>
        </div>

         <div className={styles.card}>
            <h2 className="text-slate-500 mb-2 font-bold text-[10px]">Total Credits</h2>
            <h1 className="text-sm font-bold">NGN1,000</h1>
        <div className="flex flex-col items-center">
             <ArrowUpIcon className={styles.arrowUpIcon} />
             <p className="text-green-500 mt-4 font-bold text-[10px]">All credit</p>
        </div>
        </div>

         <div className={styles.card}>
            <h2 className="text-slate-500 mb-2 font-bold text-[10px]">Total Debits</h2>
            <h1 className="text-sm font-bold">NGN950</h1>
        <div className="flex flex-col items-center">
             <ArrowDownIcon className={styles.arrowDownIcon} />
             <p className="text-red-500 mt-4 font-bold text-[10px]">All Debit</p>
        </div>
        </div>
    </div>
  )
}

export default Card
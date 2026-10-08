import React from 'react'
import styles from '../styles/Add.module.css'


const Add = () => {
  return (
    <div className ="flex flex-col items-center bg-slate-300 w-screen h-screen">   
        <div className=" pl-2.5 pt-3 flex flex-col font-sans items-start">
          <h1 className="font-bold text-2xl">Add Transaction</h1>
          <p className="text-sm text-slate-500 font-medium">Record an income or expense.</p>
        </div>

      <form className="flex flex-col bg-slate-50 w-sm p-10 rounded-2xl index-1 translate-0.5 mt-5">
        <label htmlFor="subject" className="font-medium text-sm">Subject</label>
         <input id="subject" className={styles.input} type="text" placeholder="enter subject or topic" max={50} />

          <label htmlFor="description" className="font-medium text-sm">Description</label>
         <input id="description" className={styles.input} type="text" placeholder="enter short description" max={50} />

         <label htmlFor="type" className="font-medium text-sm">Transaction Type</label>
         <select id="type"className={styles.input} placeholder ="transaction type" name="type">
          <option value=""> select type</option>
          <option value="CREDIT">credit</option>
          <option value="DEBIT">debit</option>
         </select>

         <label htmlFor="amount" className="font-medium text-sm">Amount (₦)</label>
         <div className="flex flex-row items-center">
         <input id="amount" className={`${styles.input} ${styles.amountInput}`} type="number" placeholder="enter amount" /> 
         <span className={styles.naira}>₦</span>
        </div>
      </form>

    </div>
  )
}

export default Add
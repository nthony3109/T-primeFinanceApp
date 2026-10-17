import React from 'react'
import styles from '../styles/Add.module.css'
import { useRef, useReducer } from 'react'
import { initialState } from '../hooks/initialState'
import { reducer } from '../hooks/reducer'


const Add = () => {
const [state, dispatch] = useReducer (reducer, initialState);
  const dateRef = useRef(null);
  const datePicker = () => {
    dateRef.current.showPicker();
  }

  return (
    <div className ="flex flex-col items-center bg-slate-200 w-screen h--max">   
        <div className=" pl-2.5 pt-3  flex flex-col font-sans items-start">
          <h1 className="font-bold text-2xl">Add Transaction</h1>
          <p className="text-sm text-slate-500 font-medium">Record an income or expense.</p>
        </div>

      <form className="flex flex-col md:h-screen md:w-screen md:grid md:grid-cols-2 md:pl-30 md:pr-30 md:mb-0 md:pb-10 bg-slate-200 w-sm p-10 rounded-2xl  mt-5 mb-20  shadow-lg shadow-slate-300">
        <label htmlFor="subject" className= {`${styles.label}`}>Subject</label>
         <input id="subject" className={styles.input} type="text" placeholder="Enter subject or topic" max={50} />

          <label htmlFor="description" className= {`${styles.label}`}>Description</label>
         <input id="description" className={styles.input} type="text" placeholder="Enter short description" max={50} />

         <label htmlFor="type"className= {`${styles.label}`}>Transaction Type</label>
         <select id="type"className={styles.input} placeholder ="Transaction type" name="type">
          <option value=""> Select transaction type</option>
          <option value="CREDIT">credit</option>
          <option value="DEBIT">debit</option>
         </select>

         <label htmlFor="amount" className= {`${styles.label}`}>Amount (₦)</label>
         <div className="flex flex-row items-center">
         <input id="amount" className={`${styles.input} ${styles.amountInput}`} type="number" placeholder="Enter amount" /> 
         <span className={styles.naira}>₦</span>
        </div>

        <label htmlFor='date' className={styles.label} >Date</label>
        <input type='date' id='date' onClick={datePicker} ref={dateRef} className={`${styles.input}`} />

        <button type='submit' className=" block md: md:col-start-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mb-10  hover:bg-blue-600 transitionduration-300">Add Transaction</button>


      </form>

    </div>
  )
}

export default Add
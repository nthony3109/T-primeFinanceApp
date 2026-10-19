import React from 'react'
import styles from '../styles/Add.module.css'
import { useRef, useReducer } from 'react'
import { initialState } from '../hooks/initialState'
import  reducer  from '../hooks/reducer'
import  useForm  from '../hooks/useForm'
import { CircleAlert } from 'lucide-react'


const Add = () => {
const [state, dispatch] = useReducer (reducer, initialState);


const {handleChange, handleSubmit} = useForm(dispatch, state);
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

      <form onSubmit={handleSubmit} className="flex flex-col md:h-screen md:w-screen md:grid md:grid-cols-2 md:pl-30 md:pr-30 md:mb-0 md:pb-10 bg-slate-200 w-sm p-10 rounded-2xl  mt-5 mb-20  shadow-lg shadow-slate-300">
        <label htmlFor="subject" className= {`${styles.label}`}>Subject</label>
         <input id="subject"
          name="subject"
          value={state.subject} 
         onChange={handleChange} 
         className={`${styles.input} ${state.errors.subject ? styles.inputError : ""}`} type="text" placeholder="Enter subject or topic" max={50} />
          {state.errors.subject && (
            <div className={styles.error}>
              <CircleAlert size={12} className={styles.errorIcon} />
              <span className={styles.errorMessage}>{state.errors.subject}</span>
            </div>
          )}

          <label htmlFor="description" className= {`${styles.label}`}>Description</label>
         <input id="description"
          name='description' 
          value={state.description} 
          onChange={handleChange} 
          className={`${styles.input} ${state.errors.description ? styles.inputError : ""}  `} 
          type="text" placeholder="Enter short description" max={50} />
         {state.errors.description && (
            <div className={styles.error}>
              <CircleAlert size={16} className={styles.errorIcon} />
              <span className={styles.errorMessage}>{state.errors.description}</span>
            </div>
          )}

         <label htmlFor="type"className= {`${styles.label} `}>Transaction Type</label>
         <select id="type" name ='type' value={state.type} onChange={handleChange}
          className={`${styles.input} ${state.errors.type ? styles.inputError : ""}`} 
          placeholder ="Transaction type">
          <option value=""> Select transaction type</option>
          <option value="CREDIT">credit</option>
          <option value="DEBIT">debit</option>
         </select>
         {state.errors.type && (
            <div className={styles.error}>
              <CircleAlert size={16} className={styles.errorIcon} />
              <span className={styles.errorMessage}>{state.errors.type}</span>
            </div>
          )}

         <label htmlFor="amount" className= {`${styles.label}`}>Amount (₦)</label>
         <div className="flex flex-row items-center">
         <input id="amount" name='amount' value={state.amount} onChange={handleChange} 
         className={`${styles.input} ${styles.amountInput} ${state.errors.amount ? styles.inputError : ""}`}
          type="number" placeholder="Enter amount" /> 
         <span className={styles.naira}>₦</span>
        </div>
        {state.errors.amount && (
            <div className={styles.error}>
              <CircleAlert size={16} className={styles.errorIcon} />
              <span className={styles.errorMessage}>{state.errors.amount}</span>
            </div>
          )}

        <label htmlFor='date' className={styles.label} >Date</label>
        <input type='date' id='date' name='date' value={state.date} onChange={handleChange} onClick={datePicker} ref={dateRef}
         className={`${styles.input} ${state.errors.date ? styles.inputError : ""}`} />
        {state.errors.date && (
            <div className={styles.error}>
              <CircleAlert size={16} className={styles.errorIcon} />
              <span className={styles.errorMessage}>{state.errors.date}</span>
            </div>
          )}

        <button type='submit'  className=" block md: md:col-start-2 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mb-10  hover:bg-blue-600 transitionduration-300">Add Transaction</button>


      </form>

    </div>
  )
}

export default Add
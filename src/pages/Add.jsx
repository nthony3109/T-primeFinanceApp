const Add = () => {
  return (
    <div>   
        <div className=" w-screen pl-2.5 pt-3 flex flex-col font-sans items-start">
          <h1 className="font-bold">Add Transaction</h1>
          <p className="text-sm text-slate-500 font-medium">Record a income or expense.</p>
        </div>

      <form className="flex flex-col gap-3 mt-5">
         <input className="border border-amber-300" type="text" placeholder="enter subject or topic" max={50} />
         <input type="text" placeholder="enter short description" max={50} />
         <select id="type" placeholder ="transaction type" name="type">
          <option value="CREDIT">credit</option>
          <option value="DEBIT">debit</option>
         </select>
      </form>

    </div>
  )
}

export default Add
import { ChevronLeft, ArrowLeft, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Appearance = () => {

    const[isDark, setIsDark] = useState(false)
    const toggleTheme = () => {
        setIsDark((prev) =>(!prev))
    }

    return (
        <div className=" h-screen w-screen bg-slate-200 font-sans">
         <div className=" m-5 ml-0 mt-0 flex flex-row items-center">
           <NavLink to="/settings" className="flex flex-row items-center">
            <ArrowLeft className="text-slate-600 text-lg ml-5 mr-3 font-bold" />
           </NavLink>
            <h1 className="text-slate-600 font-bold text-2xl pb-5 pt-5">Appearance</h1>
          </div>
          {/* the bottons  */}
          <div className=" flex flex-col gap-4 pl-5 pt-5 bg-slate-100 rounded-xl font-semibold m-5 h-40 shadow-sm shadow-slate-300">
            <p className="text- text-slate-600  ">choose  your preferred theme</p>
            <div>
            <div className="flex flex-row pl-2 pr-2 w-80">
                <small className="text-slate-500">Light</small>
                <small className="m-auto text-slate-500">Dark</small>
            </div>
          <button aria-label="toggle dark mode" aria-pressed={isDark}
          onClick={toggleTheme}
             className={`flex h-10 w-50 p-0 items-center rounded-full transition-colors ${
                    isDark ? "bg-slate-700" : "bg-slate-300"
                }`}>
            <span
                className={`flex h-6 w-6 m-0 items-center justify-center rounded-full bg-white transition-transform ${
                isDark ? "translate-x-40" : "translate-x-2"
                }`} >

        {isDark ? (
          <Moon size={16} className="text-slate-700" />
        ) : (
          <Sun size={16} className="text-yellow-500" />
        )}

            </span>

          </button>
          </div>
          </div>

        </div>
    )
} 
export default Appearance
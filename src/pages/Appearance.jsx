import { ChevronLeft } from "lucide-react"
import { useState } from "react"

const Appearance = () => {

    const[isDark, setIsDark] = useState(false)
    const toggleTheme = () => {
        setIsDark((prev) =>(!prev))
    }

    return (
        <div className=" h-max w-screen bg-slate-200 font-sans">
         <div className=" m-5 ml-0 mt-0 flex flex-row items-center">
           <NavLink to="/profile" className="flex flex-row items-center">
            <ArrowLeft className="text-slate-600 text-lg ml-5 mr-3 font-bold" />
           </NavLink>
            <h1 className="text-slate-600 font-bold text-2xl pb-5 pt-5">Appearance</h1>
          </div>
          {/* the bottons  */}

        </div>
    )
} 
export default Appearance
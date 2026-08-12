import { Outlet } from "react-router-dom"
import BigScreenNav from "./BigScreenNav"
import MobileNav from "./MobileNav"

const NavLayout = () => {
  return (
    <div>   
        <BigScreenNav />

     <main className = "flex flex-col items-center    justify-center">
      <Outlet />
    </main>

    <MobileNav />
    </div>
  )
}

export default NavLayout
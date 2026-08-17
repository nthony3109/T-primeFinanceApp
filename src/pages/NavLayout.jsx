import { Outlet } from "react-router-dom"
import BigScreenNav from "./BigScreenNav"
import MobileNav from "./MobileNav"

const NavLayout = () => {
  return (
    <div>   
        <BigScreenNav />

     <main className = "flex flex-col items-center md:pt-28 md:pb-0 pb-20 justify-center">
      <Outlet />
    </main>

    <MobileNav />
    </div>
  )
}

export default NavLayout
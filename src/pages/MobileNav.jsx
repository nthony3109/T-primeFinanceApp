import { HomeIcon, UserRound, ReceiptTextIcon,PlusCircleIcon } from "lucide-react"
import { NavLink } from "react-router-dom"
import styles from '../styles/MobileNav.module.css'
const MobileNav = () => {
  return (
    <div className="md:hidden">   
      <nav className={styles.nav}>
        <NavLink to="/dashboard"  className={({isActive}) => isActive ? styles.active : styles.link }><HomeIcon />
        <h1>Dashboard</h1>
        </NavLink>
        <NavLink to ="/transactions" className={({isActive}) => isActive ? styles.active : styles.link } > <ReceiptTextIcon />
        <h1>Transactions</h1>
         </NavLink>
        <NavLink to = "/add" className={({isActive}) => isActive ? styles.active : styles.link }> <PlusCircleIcon />
        <h1>Add</h1>
         </NavLink>
        <NavLink to = "/profile" className={({isActive}) => isActive ? styles.active : styles.link }> <UserRound />
        <h1>Profile</h1>
        </NavLink>
      </nav>

    </div>
  )
}

export default MobileNav
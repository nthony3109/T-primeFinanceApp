import styles from '../styles/BigScreenNav.module.css'
import {ArrowUpCircle,ArrowDownCircle} from 'lucide-react'
import logo from '../assets/logo.png'
import { NavLink, Outlet } from "react-router-dom";
const BigScreenNav = () => {
  return (
    <div className = "hidden md:block">
    <div className = {styles.navLayoutDiv}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className='h-11 md:h-20 rounded-full -ml-2.5 md:-ml-3.5' />
        <h1 className={styles.brand}>t-<span className={styles.spanned}>prime Finance</span></h1>
      </div>
     {/* Rest of the dashboard content goes here */}
      <nav className = "flex items-center gap-6 text-slate-500">
        <NavLink to ="/dashboard" className = {({isActive}) =>         isActive ? styles.active : styles.inactive}>Dashboard</NavLink>

       <NavLink to ="/transactions" className = {({isActive}) =>  isActive ? styles.active : styles.inactive}>Transactions</NavLink>
      
        <NavLink to ="/add" className ={({isActive}) =>  isActive ? styles.active : styles.inactive}>Add</NavLink>

       <NavLink to ="/profile" className = {({isActive}) =>  isActive ? styles.active : styles.inactive}>Profile</NavLink>
     </nav>
    </div>
    </div>
  )
}

export default BigScreenNav
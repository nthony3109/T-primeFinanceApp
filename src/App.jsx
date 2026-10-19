import NavLayout from './pages/NavLayout'
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Transactions from './pages/Transactions'
import Add from './pages/Add'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import { getTransactions } from './api/TransactionsCall'
import Settings from './pages/Settings'


function App() {

  const [tnx, setTnx] = useState([])

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTnx(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, [])


  return (
      <div className='bg-slate-100 h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavLayout />} >
            <Route path='/dashboard' element={<Dashboard transactions={tnx} />} />
            <Route path='/transactions' element={<Transactions transactions={tnx} />} />
            <Route path='/add' element={<Add />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App

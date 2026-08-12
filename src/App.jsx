import NavLayout from './pages/NavLayout'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Transactions from './pages/Transactions'
import Add from './pages/Add'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import BigScreenNav from './pages/BigScreenNav'


function App() {

  return (
      <div className='bg-slate-100 h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavLayout />} >
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/add' element={<Add />} />
            <Route path='/profile' element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App

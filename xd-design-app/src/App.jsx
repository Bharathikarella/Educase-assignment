
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { CreateAccount } from './components/CreateAccount'

import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>} />
   <Route path='/createaccount' element={<CreateAccount/>}/>
    <Route path='/login' element={<Login/>} />
    <Route path='/profile' element={<Profile/>}/>
 </Routes>
 </BrowserRouter>

    </>
  )
}

export default App
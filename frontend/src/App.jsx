import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Registration from './pages/Registration';
import Login from './pages/login'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import PrivateAuthCheck from './Components/PrivateAuthCheck'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path="/register" 
      element={
        <PrivateAuthCheck>
          <Registration/>
        </PrivateAuthCheck>
        
        
        } />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </BrowserRouter>

   
  )
}

export default App

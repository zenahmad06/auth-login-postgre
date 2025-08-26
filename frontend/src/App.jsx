import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import LandingLayout from './layouts/LandingLayouts'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingLayout/>}>
              <Route index element={<LoginPage/>}/>
              <Route path='login' element={<LoginPage/>}/>
              <Route path='register' element={<SignUpPage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

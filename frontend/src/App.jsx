import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminHome } from './pages/AdminHome'
import Login from './pages/Login'
import AddEmployee from './pages/AddEmployee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}/>
        <Route path='/home' Component={AdminHome} />
        <Route path='/addemployees' Component={AddEmployee}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import { DataContext, DataProvider } from './context/ContectAuth'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Register from './pages/UserRegister/Register'
import Loader from './components/loader/Loader'
import Login from './pages/Login/Login'
import PrivateRoute from './utils/PrivateRoute'


function App() {

  return (
    <>
    {/* <Loader/> */}
        <BrowserRouter>
      <DataProvider>

          <Navbar />

          <Routes>
            <Route exact path='/' element={<PrivateRoute/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </DataProvider>
          
        </BrowserRouter>
    </>
  )
}

export default App

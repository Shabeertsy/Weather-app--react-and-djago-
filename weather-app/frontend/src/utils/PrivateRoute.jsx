import {Navigate} from 'react-router-dom'
import React ,{useContext} from 'react'
import Hero from '../components/Hero/Hero';
import Landing from '../components/landing/Landing';
import { DataContext } from '../context/ContectAuth';


const PrivateRoute = () => {
  
    const {user}=useContext(DataContext)

    return user ? <Hero /> : <Landing/> 
}

export default PrivateRoute;
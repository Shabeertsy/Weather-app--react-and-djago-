import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { DataContext } from '../../context/ContectAuth'



export default function Navbar() {
  const { user, logout } = useContext(DataContext)

  return (
    <div>
      <div className="navbar-main">
        <Link to='/' className='logo'>MyWeather</Link>

        <div className="navbar-inner">
          <div className="navbar-content">

            <div className="links">
              <Link to='' className='link'>{user && user.name}</Link>
              {
               user && <i className='link' onClick={logout}>Logout</i> 
              }
          
              <Link to='/register' className='link'>{user ? '' : 'Register'}</Link>
              <Link to='/login' className='link'>{user ? '' : 'Login'}</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

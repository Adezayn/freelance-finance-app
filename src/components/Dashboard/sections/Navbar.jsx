import React from 'react'
import '../../../compiled/dashboard_navbar.css'
import {Search, Notification, Profile} from '../index'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <Search />
        <div className='inner_container'>
            <Notification />
            <NavLink to="/profile">
               <Profile />
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar;
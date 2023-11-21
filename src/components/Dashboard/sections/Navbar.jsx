import React from 'react'
import '../../../compiled/dashboard_navbar.css'
import {Search, Notification, Profile} from '../index'

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <Search />
        <div className='inner_container'>
            <Notification />
            <Profile />
        </div>
    </div>
  )
}

export default Navbar;
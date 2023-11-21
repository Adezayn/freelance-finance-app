import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import '../../compiled/dashboard_navbar.css'

const Profile = () => {
  return (
    <div className='profile_container'>
      <div className='profile'>
       <IoPersonSharp />
      </div>
      <RiArrowDropDownLine />
    </div>
  )
}

export default Profile
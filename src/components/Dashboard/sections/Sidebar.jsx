import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome5Line } from "react-icons/ri";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineLiveHelp } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { BiLogOut } from "react-icons/bi";
import logo from '../../../assets/logo.svg';
import '../../../compiled/sidebar.css';


const Sidebar = () => {
  return (
    <div className='sidebar_container'>
    
        <div className='sub_container'> 
            <div className='navbar'>
               <img src={logo} alt="logo"/>
            </div>

            <div>
                <NavLink to="/dashboard" exact className={({ isActive }) =>
                isActive ? "active" : undefined
              }>
                    <div className='option'>
                        <RiHome5Line />
                        <p>Home</p>
                    </div>
                </NavLink>
                <NavLink to="/dashboard/transactions">
                    <div className='option'>
                    <LiaMoneyCheckAltSolid />
                        <p>Transactions</p>
                    </div>
                </NavLink>
               <NavLink to="/dashboard/finance-tools">
                    <div className='option'>
                        <GiReceiveMoney />
                        <p>Financial Tools</p>
                    </div>
               </NavLink>
               <NavLink to="/dashboard/messaging" className={({ isActive }) =>
                isActive ? "active" : undefined
              }>
                   <div className='option'>
                        <HiOutlineChatBubbleLeftRight />
                        <p>Messages</p>
                    </div>
               </NavLink>
            </div>

            <div className='option last'>
            <MdOutlineLiveHelp />
                <p>Help</p>
            </div>

            <div className='option last'>
                <BiLogOut />
                <p>Log out</p>
            </div>
            
        </div>
    </div>
  )
}

export default Sidebar;
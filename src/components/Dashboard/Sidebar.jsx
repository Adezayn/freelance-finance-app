import React from 'react'
import { RiHome5Line } from "react-icons/ri";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineLiveHelp } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import '../../compiled/sidebar.css';


const Sidebar = () => {
  return (
    <div className='sidebar_container'>
        <div>
            <div className='option'>
                <RiHome5Line />
                <p>Home</p>
            </div>
            <div className='option'>
               <LiaMoneyCheckAltSolid />
                <p>Transactions</p>
            </div>
            <div className='option'>
                <GiReceiveMoney />
                <p>Financial Tools</p>
            </div>
            <div className='option'>
               <HiOutlineChatBubbleLeftRight />
                <p>Messages</p>
            </div>
        </div>
        <div className='option last'>
           <MdOutlineLiveHelp />
            <p>Help</p>
        </div>
    </div>
  )
}

export default Sidebar;
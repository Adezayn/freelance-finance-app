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
    <div className="sidebar_container">
      <div className="sub_container">
        <NavLink to="/" className="navbar">
          <img src={logo} alt="logo" />
        </NavLink>

        <div className="tabs">
          <NavLink to="" exact>
            <div className="option">
              <RiHome5Line />
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="transactions">
            <div className="option">
              <LiaMoneyCheckAltSolid />
              <p>Transactions</p>
            </div>
          </NavLink>
          <NavLink to="finance-tools">
            <div className="option">
              <GiReceiveMoney />
              <p>Financial Tools</p>
            </div>
          </NavLink>
          <NavLink to="messaging">
            <div className="option">
              <HiOutlineChatBubbleLeftRight />
              <p>Messages</p>
            </div>
          </NavLink>
        </div>

        <div className="option last">
          <MdOutlineLiveHelp />
          <p>Help</p>
        </div>

        <div className="option last">
          <BiLogOut />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
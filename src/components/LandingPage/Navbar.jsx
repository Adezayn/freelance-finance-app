import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/logo.svg';
import '../../compiled/header.css';

const Navbar = () => {
  const url = window.location.href;
  return (
    <nav className='header_container__nav'>
    <NavLink to="/">
      <img src={logo} alt="logo"/>
    </NavLink>
    <ul className='header_container__nav__ul'>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
    </ul>
    <NavLink to="/signup">
      <Button children="Sign up" color="pink"/>
    </NavLink>
    <p>{url}</p>
    <NavLink to="/login">
      <Button children="Login" color={url === "http://localhost:3000/" ? "nudeborderwhite" : "nudeborderpink"}/>
    </NavLink>
</nav>
  )
}

export default Navbar
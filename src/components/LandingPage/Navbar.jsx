import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import logo from '../../assets/logo.svg';
import '../../compiled/header.css';

const Navbar = ({optionalStyle}) => {
  const url = window.location.href;
  return (
    <nav className={`header_container__nav ${optionalStyle && 'optional_nav'}`}>
      <NavLink to="/">
        <img src={logo} alt="logo"/>
      </NavLink>
      <ul className='header_container__nav__ul'>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
      </ul>
      <NavLink to="/signup">
        <Button color="pink">Sign up</Button>
      </NavLink>
      <p>{url}</p>
      <NavLink to="/login">
        <Button color={url === "http://localhost:3000/" ? "nudeborderwhite" : "nudeborderpink"}>Login</Button>
      </NavLink>
</nav>
  )
}

export default Navbar
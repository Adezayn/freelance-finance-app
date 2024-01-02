import React from 'react';
import { NavLink } from 'react-router-dom';
import arrowRight from '../../assets/arrow-right.svg';
import logo from '../../assets/logo.svg';
import headerPhone from '../../assets/header-phone.svg';
import Button from '../Button';
import '../../compiled/header.css';

const Header = () => {
  return (
    <header className='header'>
		{/* <!-- NAVBAR --> */}
        <div className='header_container'>
            <nav className='header_container__nav'>
                <img src={logo} alt="logo"/>
                <ul className='header_container__nav__ul'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                </ul>
                <NavLink to="/signup">
                  <Button children="Sign up" color="pink"/>
                </NavLink>
                <NavLink to="/login">
                  <Button children="Login" color="nudeborderpink"/>
                </NavLink>
            </nav>
			{/* <!-- HEADER MAIN --> */}
			<section className='header_container__section'>
				<div className='header_container__section__one'>
					<h1>Smart banking for freelancers</h1>
					<p>Draft is a revolutionary mobile app built to help you manage your business easily and save you money.</p>
          <Button color="blue" optionalStyle="style">
            Register Now
            <img src={arrowRight} alt="arrow-right"/>
          </Button>
				</div>
				<img className='header_container__section__two' src={headerPhone} alt="phone"/>
			</section>
        </div>
	</header>
  )
}

export default Header;
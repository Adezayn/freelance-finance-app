import React from 'react';
import arrowRight from '../../assets/arrow-right.svg';
import headerPhone from '../../assets/header-phone.svg';
import Button from '../Button';
import '../../compiled/header.css';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='header'>
		{/* <!-- NAVBAR --> */}
    <Navbar />
        <div className='header_container'>
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
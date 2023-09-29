import React from 'react';
import logo from '../../assets/logo.svg';
import '../../compiled/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
    <div>
        <img src={logo} alt="logo in bigger size"/>
        <p>Copyright © 2020 Draft LLC.</p>
        <p>All rights reserved.</p>
    </div>
    <div>
        <p>Team</p>
        <p>Services</p>
        <p>Terms of use</p>
        <p>Press</p>
        <p>Projects</p>
        <p>Privacy Policy</p>
        <p>Fees</p>
        <p>Affiliate</p>
        <p>Contact us</p>
    </div>
</footer>
  )
}

export default Footer
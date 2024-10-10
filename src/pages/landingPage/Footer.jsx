import React from 'react';
import logo from '../../assets/logo.svg';
import '../../compiled/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='footer_content_one'>
        <img src={logo} alt="logo in bigger size"/>
        <p>Copyright © 2020 Draft LLC.</p>
        <p>All rights reserved.</p>
    </div>
    <div className='footer_content_two'>
        <div className='footer_content_two_inner_content'>
          <p>Team</p>
          <p>Press</p>
          <p>Fees</p>
        </div>
        <div className='footer_content_two_inner_content'>
          <p>Services</p>
          <p>Projects</p>
          <p>Affiliate</p>
        </div>
       <div className='footer_content_two_inner_content'>
          <p>Terms of use</p>
          <p>Privacy Policy</p>
          <p>Contact us</p>
       </div>
    </div>
</footer>
  )
}

export default Footer
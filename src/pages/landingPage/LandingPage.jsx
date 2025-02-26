import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import '../../compiled/landingPage.css';

const LandingPage = () => {


  return (
    <div className='landingPage_container'>
        <Header />
        <MainContent />
        <Footer />
    </div>
  )
}

export default LandingPage;
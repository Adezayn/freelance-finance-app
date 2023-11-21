import React from 'react';
import Header from '../components/LandingPage/Header';
import MainContent from '../components/LandingPage/MainContent';
import Footer from '../components/LandingPage/Footer';
import '../compiled/landingPage.css';

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
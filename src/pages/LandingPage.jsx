import React from 'react';
import Header from '../components/LandingPage/Header';
import MainContent from '../components/LandingPage/MainContent';
import Footer from '../components/LandingPage/Footer';
import '../compiled/landingPage.css';

const LandingPage = () => {

  const configureSmileIdentityWebIntegration = (token) => {
    // eslint-disable-next-line no-undef
    SmileIdentity({
      token,
      product: "biometric_kyc",
      callback_url: `"https://digitalservice50uat.ecobank.com/art-kyc-service/v1/identity-verification-callback"`,
      environment: "sandbox",
      partner_details: {
        partner_id: `6349`,
        name: `eco-smile-id`,
        logo_url: `https://imgd.aeplcdn.com/1280x720/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=80`,
        policy_url: `https://cdn.smileidentity.com/inline/v1/js/script.min.js`,
        theme_color: '#000'
      },
      onSuccess: () => {},
      onClose: () => {},
      onError: () => {}
    });
  };

  const handleClick = () => {
    
    try {
      // const { token } = await getWebToken(baseAPIURL);

      configureSmileIdentityWebIntegration("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWxsYmFja191cmwiOiJodHRwczovL2RpZ2l0YWxzZXJ2aWNlNTB1YXQuZWNvYmFuay5jb20vYXJ0LWt5Yy1zZXJ2aWNlL3YxL2lkZW50aXR5LXZlcmlmaWNhdGlvbi1jYWxsYmFjayIsInBhcnRuZXJfcGFyYW1zIjp7ImpvYl9pZCI6IkQ2Qzc5QkIyMkYwNzQ2ODk4RDBFMUU0Q0ExRDUwOTI4X0VORyIsImpvYl90eXBlIjoxLCJ1c2VyX2lkIjoiMSJ9LCJpYXQiOjE3MDA1Nzg0MjIsImV4cCI6MTcwMjI3ODk5M30.y7Wn2nxgntKNtExYDi4nUa8NemDfBD84PIjvZKm0KaA");
    } catch (e) {
      throw e;
    }
  }

  return (
    <div className='landingPage_container'>
        <Header />
        <MainContent />
        <Footer />
        <div>
        <h1>Smile id</h1>
        <button placeholder='click me' onClick={handleClick} style={{backgroundColor: "red", width: '50px', height: '50px'}}/>
        </div>
    </div>
  )
}

export default LandingPage;
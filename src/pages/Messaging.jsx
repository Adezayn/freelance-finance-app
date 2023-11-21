import React from 'react'
import { scrIPT as SmileIdentity } from '../constants';

const Messaging = () => {
  const configureSmileIdentityWebIntegration = (token) => {
    SmileIdentity({
      token,
      product: "biometric_kyc",
      callback_url: `"https://webhook.site/9fc38a3d-8916-42fa-b470-a73279930f6e"`,
      environment: "sandbox",
      partner_details: {
        partner_id: ``,
        name: ``,
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

      configureSmileIdentityWebIntegration("");
    } catch (e) {
      throw e;
    }
  }

  return (
    <div>
        <div>
        <h1>Smile id</h1>
        <button 
            placeholder='click me' onClick={handleClick} 
            style={{backgroundColor: "red", width: '50px', height: '50px'}}
        />
        </div>
    </div>
  )
}

export default Messaging;
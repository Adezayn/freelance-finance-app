import React from 'react'


const Messaging = () => {
  const configureSmileIdentityWebIntegration = (token) => {
    // eslint-disable-next-line no-undef
    SmileIdentity({
      token,
      product: "doc_verification",
      callback_url: "https://digitalservice50uat.ecobank.com/art-kyc-service/v1/identity-verification-callback",
      environment: "sandbox",
      partner_details: {
        partner_id: "6349",
        name: "eco-smile-id",
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

      configureSmileIdentityWebIntegration("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYWxsYmFja191cmwiOiJodHRwczovL2RpZ2l0YWxzZXJ2aWNlNTB1YXQuZWNvYmFuay5jb20vYXJ0LWt5Yy1zZXJ2aWNlL3YxL2lkZW50aXR5LXZlcmlmaWNhdGlvbi1jYWxsYmFjayIsInBhcnRuZXJfcGFyYW1zIjp7ImpvYl9pZCI6ImpvYi0zNDkwZTc5NC0wYjcwLTRjMmQtYjEyNS00NjQ2ODBjZWQzZDEiLCJqb2JfdHlwZSI6NiwidXNlcl9pZCI6IjFfRDZDNzlCQjIyRjA3NDY4OThEMEUxRTRDQTFENTA5MjhfRU5HIn0sImlhdCI6MTcwMDcyODg5NywiZXhwIjoxNzAyNDI5NjE5fQ.2DiF2tjDvKwPZgR0e3EYAS82CQ3mdkQQ78fVcOZuEIM");
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
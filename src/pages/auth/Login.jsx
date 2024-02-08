import React, { useState } from 'react'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import '../../compiled/auth.css';
import Navbar from '../../components/LandingPage/Navbar';

 const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
      // if(!username || !password) return;
    }
  return (
    <div className='auth'>
        {/* <div className='auth_nav'> */}
          <Navbar />
        {/* </div> */}
        <div className='auth_body'>
            <h1>Secure Login</h1>
            <form onSubmit={handleSubmit}>
                <p>Email</p>
                <TextInput valueInput={username} valueFunction={(e)=>setUserName(e.target.value)}/>
                <p>Password</p>
                <TextInput  valueInput={password} valueFunction={(e)=>setPassword(e.target.value)}/>

                <Button children="Login" color="blue" size="L"/>
            </form>
            <p className='forgot_text'>Forgot Password?</p>
        </div>
    </div>
  )
};

export default Login;

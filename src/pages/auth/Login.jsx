import React, { useState } from 'react'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import '../../compiled/auth.css';
import { logo } from '../../utils/images';

 const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
      // if(!username || !password) return;
    }
  return (
    <div className="auth">
      <div className="auth_body">
        <img src={logo} alt="logo" />
        <h1>Login to Draft</h1>
        <form onSubmit={handleSubmit}>
          <p>Email</p>
          <TextInput
            valueInput={username}
            valueFunction={(e) => setUserName(e.target.value)}
          />
          <p>Password</p>
          <TextInput
            valueInput={password}
            valueFunction={(e) => setPassword(e.target.value)}
          />
          {/* <p className="forgot_text">Forgot Password?</p> */}

          <Button children="Login" color="blue" />
        </form>
      </div>
    </div>
  );
};

export default Login;

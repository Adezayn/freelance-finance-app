import React, { useState } from 'react'
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import '../../compiled/auth.css';

 const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className='auth'>
        <form>
            <TextInput placeholder='First Name' valueInput={username} valueFunction={(e)=>setUserName(e.target.value)}/>
            <TextInput placeholder='Password' valueInput={password} valueFunction={(e)=>setPassword(e.target.value)}/>

            <Button children="Submit" color="blue"/>
        </form>
    </div>
  )
};

export default Login;

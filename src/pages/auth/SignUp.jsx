import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Navbar from '../../components/LandingPage/Navbar';
import Button from '../../components/Button';
import '../../compiled/auth.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretQue, setSecretQuestion] = useState('');
    const [secretAns, setSecretAnswer] = useState('');
  return (
    <div className='auth'>
        <div className='auth_nav'>
          <Navbar />
        </div>

        <div className='auth_body'>
            <h1>Create A Secure Account</h1>
            <form>
                <p>First Name</p>
                <TextInput valueInput={firstName} valueFunction={(e)=>setFirstName(e.target.value)}/>
                <p>Last Name</p>
                <TextInput valueInput={lastName} valueFunction={(e)=>setLastName(e.target.value)}/>
                <p>Email</p>
                <TextInput valueInput={email} valueFunction={(e)=>setEmail(e.target.value)}/>
                <p>Password</p>
                <TextInput valueInput={password} valueFunction={(e)=>setPassword(e.target.value)}/>
                {/* secret question should be a dropdown */}
                <p>Secret Question</p>
                <TextInput valueInput={secretQue} valueFunction={(e)=>setSecretQuestion(e.target.value)}/>
                <p>Secret Answer</p>
                <TextInput valueInput={secretAns} valueFunction={(e)=>setSecretAnswer(e.target.value)}/>

                <Button children="Submit" color="blue" size="L"/>
            </form>
        </div>
    </div>
  )
}

export default SignUp;
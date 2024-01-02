import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
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
         <form>
            <TextInput placeholder='First Name' valueInput={firstName} valueFunction={(e)=>setFirstName(e.target.value)}/>
            <TextInput placeholder='Last Name' valueInput={lastName} valueFunction={(e)=>setLastName(e.target.value)}/>
            <TextInput placeholder='Email Address' valueInput={email} valueFunction={(e)=>setEmail(e.target.value)}/>
            <TextInput placeholder='Password' valueInput={password} valueFunction={(e)=>setPassword(e.target.value)}/>
            {/* secret question should be a dropdown */}
            <TextInput placeholder='Secret Question' valueInput={secretQue} valueFunction={(e)=>setSecretQuestion(e.target.value)}/>
            <TextInput placeholder='Secret Answer' valueInput={secretAns} valueFunction={(e)=>setSecretAnswer(e.target.value)}/>

            <Button children="Submit" color="blue"/>
        </form>
    </div>
  )
}

export default SignUp;
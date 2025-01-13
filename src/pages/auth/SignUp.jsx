import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { logo } from "../../utils/images";
import '../../compiled/auth.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secretQue, setSecretQuestion] = useState('');
    const [secretAns, setSecretAnswer] = useState('');
  return (
    <div className="signup">
      <div className="sub_signup_one">
        <img src={logo} alt="logo" />
      </div>
      <div className="sub_signup_two">
        <p className="forgot_text">Forgot Password?</p>
      </div>
      <div className="auth_body">
        <h1>Create A Secure Account</h1>
        <form>
          <p>First Name</p>
          <TextInput
            valueInput={firstName}
            valueFunction={(e) => setFirstName(e.target.value)}
          />
          <p>Last Name</p>
          <TextInput
            valueInput={lastName}
            valueFunction={(e) => setLastName(e.target.value)}
          />
          <p>Email</p>
          <TextInput
            valueInput={email}
            valueFunction={(e) => setEmail(e.target.value)}
          />
          <p>Password</p>
          <TextInput
            valueInput={password}
            valueFunction={(e) => setPassword(e.target.value)}
          />
          {/* secret question should be a dropdown  */}
          <p>Secret Question</p>
          <TextInput
            valueInput={secretQue}
            valueFunction={(e) => setSecretQuestion(e.target.value)}
          />
          <p>Secret Answer</p>
          <TextInput
            valueInput={secretAns}
            valueFunction={(e) => setSecretAnswer(e.target.value)}
          />

          <Button color="blue">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
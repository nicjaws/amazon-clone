import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    // login firebase 
  }

  const register = e => {
    e.preventDefault();
    // register firebase 
  }

  return (
    <div className='login'>
      <Link to='/' >
       <img       className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
       />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <button type="submit" onClick={signIn}className="login__signInButton">Sign in</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our interest-based Ads notice.
        </p>

        <button onClick={register} className="login__registerButton">Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login

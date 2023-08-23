import React, { useState } from 'react';
import GoogleLoginButton from './googleSignIn';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>App Name</h1>
        <img src="https://thumbs.dreamstime.com/b/demo-eyeball-blue-round-button-isolated-129484845.jpg" alt="Logo" />
      </div>
      <div className="right-section">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="form-input"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-input"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="form-button">
            Login
          </button>
        </form>
        <div className="alternative-signin">
          <p>Or sign in with:</p>
          <GoogleLoginButton/>
        </div>
      </div>
    </div>
  );
}

export default Login;

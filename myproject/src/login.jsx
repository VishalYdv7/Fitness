import React, { useState } from 'react';
import "./login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputEmail = (e) => {
    e.target.setCustomValidity(""); // Reset custom validity when the user corrects the email
  };

  const handleInvalidEmail = (e) => {
    e.target.setCustomValidity("Please enter a valid email address");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign up form submission, e.g., send data to a server
    console.log('Sign Up Email:', email);
    console.log('Sign Up Password:', password);
  };

  const handleSignUpClick = () => {
    // When the "Sign Up" button is clicked, toggle the showSignUp state.
    setShowSignUp(!showSignUp);
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
      <h2>{showSignUp ? 'Sign Up' : 'Login'}</h2>
        {showSignUp ? (
          <form className="login-form" onSubmit={handleSignUp}>
            <div>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onInput={handleInputEmail}
                className="form-input"
                placeholder="Email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                onInvalid={handleInvalidEmail}
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
              Sign Up
            </button>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                onInput={handleInputEmail}
                className="form-input"
                placeholder="Email"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                onInvalid={handleInvalidEmail}
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
        )}
        <div className='switchSignup'>
          {/* Button to switch between Login and Sign Up */}
          <button onClick={handleSignUpClick} className="signup-button">
            {showSignUp ? 'Back to Login' : 'New User Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

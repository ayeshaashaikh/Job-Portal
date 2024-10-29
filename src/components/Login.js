import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { fullName, password });
  };

  return (
    <div className="login-page">
      <nav className="navbar">
        <h1 className="navbar-title">Job Connect</h1>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>

      <div className="login-overlay">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtext">Let’s get you back on track</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                
              />
            </div>
            <button type="submit" className="submit-button">Login</button>
          </form>
          <p className="forgot-password"><a href="/reset">Forgot password?</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

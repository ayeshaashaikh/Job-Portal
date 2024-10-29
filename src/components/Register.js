
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    address: '',
    email: '',
    dob: '',
    phone: '',
    gender: '',
    nationality: ''
  });
  
  const nationalityOptions = [
    'Indian', 'American', 'British', 'Canadian', 'Australian', 'German',
    'French', 'Chinese', 'Japanese', 'Brazilian', 'Mexican', 'Italian',
    'Spanish', 'Russian', 'South African'
  ];


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', formValues);
  };

  return (
    <div className="register-background">
      {/* Navbar Section */}
      <nav className="navbar">
        <h1 className="navbar-title">Job Connect </h1>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>

      {}
      <div className="register-box">
        <h2>Welcome! Create Your Account</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formValues.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formValues.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formValues.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container gender-group">
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                required
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                required
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                required
              /> Other
            </label>
          </div>

          <div className="input-container nationality-group">
            <select
              name="nationality"
              value={formValues.nationality}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Nationality</option>
              {nationalityOptions.map((nationality) => (
                <option key={nationality} value={nationality.toLowerCase()}>
                  {nationality}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="submit-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

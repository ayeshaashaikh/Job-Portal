// src/components/Register.js
import React from 'react';
import './Register.css'; // Import CSS for styling

const Register = () => {
  return (
    <div className="register-container">
      <h2>Create Your Account</h2>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" required placeholder="Enter your full name" />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" required placeholder="Enter your address" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input type="email" id="email" required placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone No:</label>
          <input type="tel" id="phone" required placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" required /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" required /> Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="nationality">Nationality:</label>
          <select id="nationality" required>
            <option value="">Select your nationality</option>
            <option value="indian">Indian</option>
            <option value="american">American</option>
            <option value="british">British</option>
            <option value="canadian">Canadian</option>
            {/* Add more nationalities as needed */}
          </select>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Register;

// src/components/Home.js
import React from 'react';
import './Home.css'; // Import CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="navbar-title">Job Portal</h1>
        <ul className="navbar-links">
        <li><a href="/">Home</a></li> {/* Use <a> tags for navigation */}
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
      <div className="hero-section">
        <h2>Welcome to the Job Portal</h2>
        <p>Your one-stop solution for finding jobs!</p>
        <div className="search-bar">
          <input type="text" placeholder="Search for jobs, companies, or keywords..." />
          <button>Search</button>
        </div>
      </div>

      <section className="featured-jobs">
        <h2>Featured Job Openings</h2>
        <div className="job-list">
          <div className="job-card">
            <h3>Software Engineer</h3>
            <p>Company ABC</p>
            <p>Location: Remote</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>Product Manager</h3>
            <p>Company XYZ</p>
            <p>Location: San Francisco, CA</p>
            <button className="apply-button">Apply Now</button>
          </div>
          <div className="job-card">
            <h3>UX Designer</h3>
            <p>Company 123</p>
            <p>Location: New York, NY</p>
            <button className="apply-button">Apply Now</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Job Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

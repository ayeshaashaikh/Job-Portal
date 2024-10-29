import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar sticky">
        <h1 className="navbar-title">Job Connect</h1>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>

      <div className="hero-section">
        <h2>Unlock Your Future</h2>
        <p>Discover new career opportunities at your fingertips</p>
        <div className="search-bar">
          <input type="text" placeholder="Search careers, companies, or fields..." />
          <button>Explore</button>
        </div>
        <div className="opportunity-carousel">
          <h3>Discover Opportunities:</h3>
          <ul className="carousel">
            <li>Tech & Engineering</li>
            <li>Marketing & Sales</li>
            <li>Healthcare</li>
            <li>Finance & Banking</li>
            <li>Remote Jobs</li>
          </ul>
        </div>
      </div>

     
    </div>
  );
};

export default Home;

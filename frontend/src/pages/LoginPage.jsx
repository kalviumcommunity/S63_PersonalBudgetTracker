import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Update path if necessary
import './LoginPage.css'; // Ensure the path is correct

const LoginPage = () => {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Login Here</h1>
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button className="login-button">Login</button>
          <div className="signup-link">
            <Link to="/signup">Signup here</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

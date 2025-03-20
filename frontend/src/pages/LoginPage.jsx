import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Update path if necessary
import './LoginPage.css'; // Import CSS

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);

      // Save token in localStorage
      localStorage.setItem('token', res.data.token);

      // Show success message and redirect after 2 seconds
      setMessage('Login successful! Redirecting...');
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    } catch (error) {
      // Show error message if login fails
      setMessage(
        error.response?.data?.message || 'Invalid credentials. Please try again.'
      );
      setIsSuccess(false);
    }
  };

  // Navigate to signup page
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>

          {/* Success or Error message */}
          {message && (
            <p
              className={`login-message ${
                isSuccess ? 'success-text' : 'error-text'
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="login-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className="login-input"
              required
            />
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="login-link">
            Don't have an account?{' '}
            <span onClick={handleSignup} className="signup-text">
              Signup here
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

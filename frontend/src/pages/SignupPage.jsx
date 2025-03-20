import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Update path if necessary
import './SignupPage.css'; // Import CSS

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { name, email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);

      // Show success message and redirect after 2 seconds
      setMessage(res.data.message);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      // Show error message if registration fails
      setMessage(
        error.response?.data?.message || 'Something went wrong. Please try again.'
      );
      setIsSuccess(false);
    }
  };

  // Navigate to login page if already registered
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
      {/* Navbar at the top */}
      <Navbar />
      <div className="signup-container">
        <div className="signup-form">
          <h2>Signup</h2>

          {/* Success or Error message */}
          {message && (
            <p
              className={`signup-message ${
                isSuccess ? 'success-text' : 'error-text'
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={name}
              onChange={handleChange}
              className="signup-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              className="signup-input"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              className="signup-input"
              required
            />
            <button type="submit" className="signup-btn">
              Signup
            </button>
          </form>

          <p className="signup-link">
            Already have an account?{' '}
            <span onClick={handleLogin} className="login-text">
              Login here
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupPage;

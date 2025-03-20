import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './LandingPage.css';
import HeroImage from '/images/image.png'; // Make sure the path is correct

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="landing-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Take Control of Your Finances<br />with Our Personal Budget Tracker</h1>
          <p>
            Transform your financial management with our intuitive budgeting tool designed to help you monitor
            your expenses, set savings goals, and achieve financial freedom. Easily visualize your spending patterns
            and make informed decisions that align with your financial objectives.
          </p>
          <button className="hero-btn" onClick={handleGetStarted}>
            Get Started Today
          </button>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src={HeroImage} alt="Personal Budget Tracker" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

import React, { useState } from "react";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="/" className="logo">
        Personal Budget Tracker
      </a>

      {/* Hamburger Menu */}
      <div className={`menuIcon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`navLinks ${isOpen ? "open" : ""}`}>
        <li className="navItem">
          <a href="/" className="navLink">
            Home
          </a>
        </li>
        <li className="navItem">
          <a href="/transaction" className="navLink">
            Dashboard
          </a>
        </li>

        {/* Dropdown for Features */}
        <li className="navItem">
          <a href="#features" className="navLink">
            Features <FaChevronDown className="dropdown-icon" />
          </a>
          <div className="dropdown">
            <a href="/feature1" className="dropdown-item">
              Expense Tracking
            </a>
            <a href="/feature2" className="dropdown-item">
              Goal Setting
            </a>
            <a href="/feature3" className="dropdown-item">
              Financial Reports
            </a>
          </div>
        </li>

        <li className="navItem">
          <a href="#contact" className="navLink">
            Contact
          </a>
        </li>
      </ul>

      {/* Get Started Button */}
      <a href="/login">
        <button className="getStartedBtn">Get Started</button>
      </a>

      {/* Get Started Button */}
      <button className="getStartedBtn">Get Started</button>
    </nav>
  );
};

export default Navbar;

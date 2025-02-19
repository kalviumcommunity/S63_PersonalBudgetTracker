import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if necessary

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.content}>
        <header style={styles.header}>
          <h1>Personal Budget Tracker</h1>
          <p>Manage your finances effortlessly and stay on top of your budget!</p>
          <button style={styles.button}>Get Started</button>
        </header>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    width: '100vw',
  },
  content: {
    marginTop: '40px',                                   
    width: '100%',
    maxWidth: '1000px',
    padding: '20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    flex: 1,
  },
  header: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 10px',
    borderRadius: '10px',
  },
  button: {
    backgroundColor: '#ffcc00',
    color: '#333',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default LandingPage;
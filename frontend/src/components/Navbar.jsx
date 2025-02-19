import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Personal Budget Tracker</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="/transaction" style={styles.navLink}>Dashboard</a></li>
        <li style={styles.navItem}><a href="#features" style={styles.navLink}>Features</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },
  logo: {
    position: 'absolute',
    left: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Navbar;
import React, { useState } from 'react';
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar-container">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li className="menu-item">
          <a href="/home" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li className="menu-item">
          <a href="/about" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-info-circle"></i> About
          </a>
        </li>
        <li className="menu-item">
          <a href="/projects" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-laptop-code"></i> Projects
          </a>
        </li>
        <li className="menu-item">
          <a href="https://www.linkedin.com/in/your-profile-url" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li className="menu-item">
          <a href="/blog" onClick={() => setMenuOpen(false)}>
            <i className="fas fa-blog"></i> Blog
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

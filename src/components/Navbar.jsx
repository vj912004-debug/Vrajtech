import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">VRAJ<span>DESIGN</span></div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact" className="btn-primary" style={{ padding: '10px 25px', marginLeft: '20px' }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
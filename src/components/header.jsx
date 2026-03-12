import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) document.body.classList.add('light-mode');
    else document.body.classList.remove('light-mode');
  }, [isDark]);

  return (
    <nav className="navbar">
      <div className="logo">VRAJ<span>DESIGN</span></div>
      
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About Us</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" className="btn-nav" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>

      <div className="nav-controls">
        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? <FaMoon size={22} color="#333" /> : <FaSun size={22} color="#f1c40f" />}
        </button>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} color="#00d2ff" /> : <FaBars size={28} color="#ffffff" />}
        </div>
      </div>
    </nav>
  );
};

export default Header;
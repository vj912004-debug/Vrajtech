import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  // Mouse Parallax Logic using standard React state for clean performance
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Calculate movement from the center of the screen
    const x = (e.clientX - window.innerWidth / 2) / 60;
    const y = (e.clientY - window.innerHeight / 2) / 60;
    setMousePos({ x, y });
  };

  return (
    <div className="hero-container" onMouseMove={handleMouseMove}>
      <div className="container">
        <motion.div 
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ type: 'spring', stiffness: 150, damping: 20 }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="hero-content"
        >
          <p className="hero-sub">FULL-STACK DEVELOPER & DESIGNER</p>

          <h1 className="hero-title">
            <Typewriter
              options={{
                strings: [
                  'Building Architectures of the Future.',
                  'Developing Scalable MERN Solutions.',
                  'Engineering Digital Experiences.',
                  'Bridging India to New Zealand.'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 60,
                wrapperClassName: "Typewriter__wrapper"
              }}
            />
          </h1>

          <p className="hero-description">
            Merging technical precision with an aesthetic soul to create digital 
            experiences that resonate. Specialized in high-performance web systems.
          </p>

          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/projects')}>
              Explore Works
            </button>
            <button className="btn-outline" onClick={() => navigate('/about')}>
              My Journey
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
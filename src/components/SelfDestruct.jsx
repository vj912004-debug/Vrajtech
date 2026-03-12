import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Removed AnimatePresence here

const SelfDestruct = ({ onComplete }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete(); 
    }
  }, [count, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [0, -10, 10, -10, 10, 0], // Screen shake effect
      }}
      transition={{ duration: 0.2, repeat: Infinity }}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: 'rgba(255, 0, 0, 0.15)', backdropFilter: 'blur(15px)',
        zIndex: 999999, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', color: '#ff0000',
        fontFamily: 'monospace', textShadow: '0 0 20px #ff0000'
      }}
    >
      <motion.h1 
        key={count} // Key ensures the animation re-triggers every second
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: '12rem', fontWeight: '900', margin: 0 }}
      >
        {count}
      </motion.h1>
      <h2 style={{ letterSpacing: '10px', textAlign: 'center' }}>CRITICAL SYSTEM FAILURE</h2>
      <p style={{ marginTop: '20px', fontWeight: 'bold' }}>TERMINATING ALL PROCESSES...</p>
    </motion.div>
  );
};

export default SelfDestruct;
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // High-performance spring physics
  const x = useSpring(0, { stiffness: 1000, damping: 40 });
  const y = useSpring(0, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    const handleMove = (e) => {
      x.set(e.clientX - 16);
      y.set(e.clientY - 16);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMove);
    
    // Select all interactive elements
    const targets = document.querySelectorAll('a, button, .dock-icon, input, .terminal-window-wrapper');
    targets.forEach(t => {
      t.addEventListener('mouseenter', handleHoverStart);
      t.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        backgroundColor: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999999,
        x,
        y,
        mixBlendMode: 'difference', // This creates the unique "Inversion" effect
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;
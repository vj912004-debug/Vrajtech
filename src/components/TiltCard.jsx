import React, { useState, useRef } from 'react';

const TiltCard = ({ children }) => {
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    // Get the exact dimensions and position of the card on the screen
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate where the mouse is relative to the center of the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate the rotation degrees (max tilt is set to 15 degrees)
    const rotateY = ((mouseX / width) - 0.5) * 30; 
    const rotateX = ((mouseY / height) - 0.5) * -30; 

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    // Snap back to perfectly flat when the mouse leaves
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease-out'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...tiltStyle, width: '100%', height: '100%', willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default TiltCard;
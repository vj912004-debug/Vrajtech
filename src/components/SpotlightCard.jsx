import React, { useRef, useState } from 'react';

export const SpotlightCard = ({ children }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={() => setOpacity(1)} onMouseLeave={() => setOpacity(0)} 
      style={{ position: 'relative', overflow: 'hidden', borderRadius: '28px' }}>
      <div style={{ opacity, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 242, 255, 0.15), transparent 40%)`, position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }} />
      {children}
    </div>
  );
};
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    // Function to get the current primary color from CSS variables
    const getThemeColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue('--primary')
        .trim();
      // Convert hex string to a number format Vanta understands (0x00f2ff)
      return color ? parseInt(color.replace('#', '0x'), 16) : 0x00f2ff;
    };

    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          // Sync with your dynamic theme color!
          highlightColor: getThemeColor(),
          midtrackColor: 0x050505,
          lowlightColor: 0x000000,
          baseColor: 0x03050a,
          blurFactor: 0.60,
          speed: 1.50,
          zoom: 0.80
        })
      );
    }

    // Cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
      ref={vantaRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1 
      }} 
    />
  );
};

export default VantaBackground;
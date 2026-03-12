import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton'; // Ensure this path is correct

const Hero = () => {
  const { scrollY } = useScroll();
  
  // High-end scroll physics: Text fades out and "sinks" into the background fog
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, -50]);

  return (
    <section className="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="container">
        <motion.div style={{ opacity, y }}>
          
          <span style={{ 
            color: 'var(--primary)', 
            letterSpacing: '4px', 
            textTransform: 'uppercase', 
            fontSize: '0.8rem', 
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '20px'
          }}>
            Full-Stack Developer & Designer
          </span>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            lineHeight: '1.1', 
            fontWeight: '800',
            letterSpacing: '-2px'
          }}>
            Building <span className="text-gradient">Architectures</span> <br /> 
            of the Future.
          </h1>

          <p style={{ 
            maxWidth: '600px', 
            color: 'var(--text-muted)', 
            fontSize: '1.2rem', 
            marginTop: '30px', 
            lineHeight: '1.6' 
          }}>
            Merging technical precision with an aesthetic soul to create digital experiences that resonate.
          </p>
          
          <div style={{ marginTop: '50px', display: 'flex', gap: '25px' }}>
            {/* Magnetic Interaction for primary action */}
            <MagneticButton>
              <a href="/projects" className="btn-primary">Explore Works</a>
            </MagneticButton>

            {/* Magnetic Interaction for secondary action */}
            <MagneticButton>
              <a href="/about" className="btn-outline">My Journey</a>
            </MagneticButton>
          </div>

        </motion.div>
      </div>
      
      {/* Visual Indicator: Animated Scroll Mouse */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ 
          position: 'absolute', 
          bottom: '40px', 
          left: '50%', 
          transform: 'translateX(-50%)',
          opacity: 0.5
        }}
      >
        <div style={{ 
          width: '24px', 
          height: '40px', 
          border: '2px solid white', 
          borderRadius: '20px', 
          display: 'flex', 
          justifyContent: 'center',
          paddingTop: '8px'
        }}>
          <div style={{ width: '4px', height: '8px', background: 'white', borderRadius: '2px' }}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
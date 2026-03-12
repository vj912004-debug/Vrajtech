import React from 'react';

const About = () => {
  return (
    <section className="container" style={{ paddingTop: '150px' }}>
      <div className="glass-card" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 1fr', 
        gap: '50px', 
        alignItems: 'center',
        background: 'rgba(0, 0, 0, 0.6)' // Darker tint for readability
      }}>
        
        <div data-aos="fade-right">
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            About <span className="text-gradient">Vraj</span>
          </h2>
          <p style={{ 
            fontSize: '1.15rem', 
            color: '#e2e8f0', 
            lineHeight: '1.8',
            marginBottom: '30px'
          }}>
            Currently pursuing a Graduate Diploma in IT at Otago Polytechnic, I am a dedicated developer 
            focused on transforming complex ideas into elegant, user-centric web applications. 
            My expertise spans across modern frontend frameworks and robust backend architectures.
          </p>
          <a href="/resume.pdf" className="btn-primary">Download CV</a>
        </div>

        <div data-aos="fade-left" style={{ position: 'relative' }}>
          {/* Decorative frame around the image */}
          <div style={{
            position: 'absolute',
            inset: '-10px',
            border: '1px solid var(--primary)',
            borderRadius: '20px',
            zIndex: -1,
            opacity: 0.3
          }}></div>
          <img 
            src="/your-image.jpg" 
            alt="Vraj Patel" 
            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
          />
        </div>

      </div>
    </section>
  );
};

export default About;
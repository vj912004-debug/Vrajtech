import React from 'react';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import Services from '../components/Services';

const Home = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Hero />
      <TechMarquee />
      <div className="container" style={{ marginTop: '80px' }}>
         <Services />
      </div>
    </div>
  );
};

export default Home;
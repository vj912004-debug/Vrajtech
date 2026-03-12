import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import GithubStats from '../components/GithubStats';
import { TerminalBio, TimezonePulse } from '../components/EliteFeatures';
import { SortingVisualizer, TravelMap } from '../components/AdvancedModules';
import { LighthousePulse } from '../components/LighthousePulse';

const AboutPage = () => {
  return (
    <div className="container" style={{ paddingTop: '140px', paddingBottom: '100px' }}>
      
      {/* --- SECTION 1: IDENTITY & TERMINAL --- */}
      <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }} data-aos="fade-up">
        
        {/* LEFT COLUMN: Your Branding */}
        <div>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="badge-nz">Graduate Diploma in IT @ Otago Polytechnic</span>
            
            <h1 className="text-gradient" style={{ fontSize: '4.5rem', margin: '20px 0', lineHeight: '1.1' }}>
              Vraj Patel
            </h1>

            {/* Gauges now sit properly below the name */}
            <div style={{ margin: '30px 0' }}>
              <LighthousePulse />
            </div>
            
            <p className="about-bio">
              A Full-Stack Developer moving from <span className="text-in">India</span> to 
              <span className="text-nz"> New Zealand</span>. I build reactive systems 
              that bridge data with immersive design.
            </p>

            <div style={{ marginTop: '40px' }}>
              <TimezonePulse />
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Terminal (Cleanly Wrapped) */}
        <div style={{ position: 'relative' }}>
          <div className="terminal-window-wrapper">
            <div className="terminal-titlebar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-text-label">vraj@portfolio: ~/about</span>
            </div>
            <TerminalBio />
          </div>
        </div>
      </div>

      {/* --- SECTION 2: ENGINEERING & LOGIC --- */}
      <div className="grid-2" style={{ marginTop: '100px' }} data-aos="fade-up">
        <SortingVisualizer />
        <TravelMap />
      </div>

      {/* --- SECTION 3: TECH & STATS --- */}
      <div style={{ marginTop: '120px' }} data-aos="fade-up">
        <Skills />
        <GithubStats />
      </div>

      {/* --- SECTION 4: THE JOURNEY --- */}
      <div style={{ marginTop: '120px' }} data-aos="fade-up">
        <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px' }}>
          The Engineering Journey
        </h2>
        <Timeline />
      </div>
    </div>
  );
};

export default AboutPage;
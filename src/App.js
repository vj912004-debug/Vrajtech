import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import VantaBackground from './components/VantaBackground';
import MatrixRain from './components/MatrixRain';
import SelfDestruct from './components/SelfDestruct';
import CustomCursor from './components/CustomCursor';
import WeatherBridge from './components/WeatherBridge';
import { MagneticDock, CustomMenu } from './components/EliteFeatures';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isMatrix, setIsMatrix] = useState(false);
  const [isDestructing, setIsDestructing] = useState(false);
  const [isGlitched, setIsGlitched] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const toggleMatrix = () => setIsMatrix(prev => !prev);
    const triggerDestruct = () => setIsDestructing(true);
    const rebootSystem = () => {
      setIsGlitched(false);
      setIsDestructing(false);
      setIsMatrix(false);
    };

    window.addEventListener('toggle-matrix', toggleMatrix);
    window.addEventListener('trigger-destruct', triggerDestruct);
    window.addEventListener('system-reboot', rebootSystem);

    return () => {
      window.removeEventListener('toggle-matrix', toggleMatrix);
      window.removeEventListener('trigger-destruct', triggerDestruct);
      window.removeEventListener('system-reboot', rebootSystem);
    };
  }, []);

  return (
    <Router>
      <div className={`main-layout ${isGlitched ? 'glitch-mode' : ''}`}>
        <CustomCursor />
        <CustomMenu />
        
        {/* Global Weather Bridge - Fixed at Top Left */}
        <WeatherBridge /> 

        {/* Background Layers */}
        {isMatrix ? <MatrixRain /> : <VantaBackground />}
        
        {/* Special Overlays */}
        {isDestructing && <SelfDestruct onComplete={() => {
          setIsDestructing(false);
          setIsGlitched(true);
        }} />}

        <Navbar />
        
        <main style={{ position: 'relative', zIndex: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <MagneticDock />
      </div>
    </Router>
  );
}

export default App;
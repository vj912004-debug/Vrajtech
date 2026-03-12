import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// --- 1. 3D TILT WRAPPER (Exported) ---
export const TiltCard = ({ children }) => (
  <Tilt perspective={1200} glareEnable={true} glareMaxOpacity={0.1} scale={1.02} transitionSpeed={1500}>
    {children}
  </Tilt>
);

// --- 2. MAGNETIC SOCIAL DOCK ---
const DockIcon = ({ icon: Icon, mouseX, link, label }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const distance = useMotionValue(Infinity);
  const size = useSpring(useTransform(distance, [-150, 0, 150], [50, 80, 50]), {
    mass: 0.1, stiffness: 150, damping: 12
  });

  return (
    <div style={{ position: 'relative' }}>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: -10, x: '-50%' }}
            exit={{ opacity: 0, y: 10, x: '-50%' }}
            className="dock-tooltip"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={link} target="_blank" rel="noreferrer" ref={ref}
        style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onMouseMove={(e) => {
          const rect = ref.current?.getBoundingClientRect();
          if (rect) distance.set(e.clientX - (rect.left + rect.width / 2));
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { distance.set(Infinity); setHovered(false); }}
        className="dock-icon"
      >
        <Icon size={24} />
      </motion.a>
    </div>
  );
};

// Exporting MagneticDock
export const MagneticDock = () => {
  const mouseX = useMotionValue(Infinity);
  return (
    <div className="dock-wrapper">
      <motion.div onMouseMove={(e) => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)} className="magnetic-dock">
        <DockIcon icon={FaGithub} mouseX={mouseX} link="https://github.com" label="GITHUB" />
        <DockIcon icon={FaLinkedin} mouseX={mouseX} link="https://linkedin.com" label="LINKEDIN" />
        <DockIcon icon={FaEnvelope} mouseX={mouseX} link="mailto:vraj@example.com" label="EMAIL" />
        <DockIcon icon={FaFileDownload} mouseX={mouseX} link="/resume.pdf" label="RESUME" />
      </motion.div>
    </div>
  );
};

// --- 3. CUSTOM CONTEXT MENU (Exported) ---
export const CustomMenu = () => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMenu = (e) => {
      e.preventDefault();
      setPos({ x: e.pageX, y: e.pageY });
      setVisible(true);
    };
    const close = () => setVisible(false);
    window.addEventListener('contextmenu', handleMenu);
    window.addEventListener('click', close);
    return () => { 
      window.removeEventListener('contextmenu', handleMenu); 
      window.removeEventListener('click', close); 
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="context-menu" style={{ top: pos.y, left: pos.x }}>
      <div onClick={() => window.location.href='/'}>Home</div>
      <div onClick={() => window.location.href='/about'}>About System</div>
      <div onClick={() => window.location.href='/projects'}>Archive</div>
      <div style={{ borderTop: '1px solid #333', color: 'var(--primary)', marginTop: '5px', paddingTop: '5px' }}>
        vraj@patel:~$
      </div>
    </div>
  );
};

// --- 4. TIMEZONE PULSE (Exported) ---
export const TimezonePulse = () => {
  const [times, setTimes] = useState({ in: '--:--', nz: '--:--' });
  useEffect(() => {
    const timer = setInterval(() => {
      const opt = { hour: '2-digit', minute: '2-digit', hour12: false };
      setTimes({
        in: new Intl.DateTimeFormat('en-GB', { ...opt, timeZone: 'Asia/Kolkata' }).format(new Date()),
        nz: new Intl.DateTimeFormat('en-GB', { ...opt, timeZone: 'Pacific/Auckland' }).format(new Date())
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass-card" style={{ display: 'flex', gap: '30px', padding: '15px 25px', alignItems: 'center', width: 'fit-content' }}>
      <div>
        <p style={{ fontSize: '0.65rem', color: 'var(--primary)', letterSpacing: '1px' }}>VADODARA (IST)</p>
        <h3 style={{ fontFamily: 'monospace', fontSize: '1.4rem' }}>{times.in}</h3>
      </div>
      <div style={{ width: '1px', height: '30px', background: 'var(--border)' }}></div>
      <div>
        <p style={{ fontSize: '0.65rem', color: 'var(--secondary)', letterSpacing: '1px' }}>OTAGO (NZDT)</p>
        <h3 style={{ fontFamily: 'monospace', fontSize: '1.4rem' }}>{times.nz}</h3>
      </div>
    </div>
  );
};

// --- 5. TERMINAL BIO (Exported) ---
export const TerminalBio = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(['Type "help" to begin...']);

  const handleCmd = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      let res = '';
      
      if (cmd === 'matrix') {
        res = 'MAINFRAME OVERRIDE... ENCRYPTING SYSTEM.';
        window.dispatchEvent(new Event('toggle-matrix'));
      } else if (cmd === 'self-destruct') {
        res = 'CRITICAL: AUTHORIZING MELTDOWN SEQUENCE.';
        window.dispatchEvent(new Event('trigger-destruct'));
      } else if (cmd === 'reboot') {
        res = 'SYSTEM RECOVERY INITIATED...';
        window.dispatchEvent(new Event('system-reboot'));
      } else if (cmd === 'help') {
        res = 'Commands: bio, tech, path, matrix, self-destruct, reboot, clear';
      } else if (cmd === 'bio') {
        res = 'Vraj Patel: MERN Developer & Otago IT Scholar.';
      } else if (cmd === 'clear') {
        setHistory([]); setInput(''); return;
      } else {
        res = `Command not recognized: ${cmd}`;
      }
      
      setHistory([...history, `> ${input}`, res]);
      setInput('');
    }
  };

  return (
    <div className="terminal-container">
      {history.map((line, i) => (
        <div key={i} style={{ color: line.startsWith('>') ? '#fff' : 'var(--primary)', marginBottom: '4px' }}>{line}</div>
      ))}
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <span style={{ color: '#fff' }}>{"vraj@portfolio:~$"}</span>
        <input autoFocus value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleCmd} className="terminal-input" />
      </div>
    </div>
  );
};

// --- 6. MAC CODE EDITOR (Exported) ---
export const CodeCaseStudy = () => {
  const code = `// Optimized GPA Logic
const calculateGPA = (grades) => {
  const total = grades.reduce((acc, curr) => acc + curr.points, 0);
  return (total / grades.length).toFixed(2);
};
export default calculateGPA;`;

  return (
    <div className="glass-card" style={{ padding: '0', overflow: 'hidden', marginTop: '40px' }}>
      <div style={{ background: '#1a1a1a', padding: '12px', display: 'flex', gap: '8px', borderBottom: '1px solid #333' }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
        <span style={{ fontSize: '0.75rem', marginLeft: '10px', opacity: 0.5, fontFamily: 'monospace' }}>LogicHandler.js</span>
      </div>
      <SyntaxHighlighter language="javascript" style={atomDark} customStyle={{ margin: '0', background: 'transparent', padding: '20px', fontSize: '0.9rem' }}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
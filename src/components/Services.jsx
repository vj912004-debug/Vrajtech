import React from 'react';
import { SpotlightCard } from './SpotlightCard';
import { FaReact, FaCode, FaServer } from 'react-icons/fa';

const Services = () => (
  <div className="grid-3">
    {[
      { title: "Web Dev", icon: <FaReact />, desc: "High-performance React apps." },
      { title: "App Design", icon: <FaCode />, desc: "Clean UI/UX architectures." },
      { title: "Backend", icon: <FaServer />, desc: "Node.js & MongoDB systems." }
    ].map((s, i) => (
      <SpotlightCard key={i}>
        <div className="glass-card" style={{ height: '100%' }}>
          <div style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>{s.icon}</div>
          <h3 style={{ marginTop: '20px' }}>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      </SpotlightCard>
    ))}
  </div>
);

export default Services;
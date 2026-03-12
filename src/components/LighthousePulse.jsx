import React from 'react';

const Gauge = ({ label, score, color }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ 
      width: '45px', height: '45px', borderRadius: '50%', 
      border: `2px solid ${color}`, display: 'flex', 
      alignItems: 'center', justifyContent: 'center',
      boxShadow: `0 0 10px ${color}`, marginBottom: '5px'
    }}>
      <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{score}</span>
    </div>
    <p style={{ fontSize: '0.5rem', letterSpacing: '1px', margin: 0 }}>{label}</p>
  </div>
);

export const LighthousePulse = () => (
  <div className="glass-card" style={{ display: 'flex', gap: '15px', padding: '12px 20px', border: '1px solid rgba(255,255,255,0.1)' }}>
    <Gauge label="PERF" score="98" color="#00ff88" />
    <Gauge label="ACCES" score="100" color="#00f2ff" />
    <Gauge label="SEO" score="95" color="#7000ff" />
  </div>
);
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- 1. SORTING VISUALIZER (Engineering Proof) ---
export const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  useEffect(() => resetArray(), []);

  const resetArray = () => {
    const arr = Array.from({ length: 20 }, () => Math.floor(Math.random() * 150) + 10);
    setArray(arr);
  };

  const bubbleSort = async () => {
    let aux = [...array];
    for (let i = 0; i < aux.length; i++) {
      for (let j = 0; j < aux.length - i - 1; j++) {
        if (aux[j] > aux[j + 1]) {
          [aux[j], aux[j + 1]] = [aux[j + 1], aux[j]];
          setArray([...aux]);
          await new Promise(r => setTimeout(r, 50));
        }
      }
    }
  };

  return (
    <div className="glass-card" style={{ textAlign: 'center' }}>
      <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Algorithm Visualizer</h4>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '4px', height: '160px' }}>
        {array.map((val, i) => (
          <motion.div key={i} layout style={{ width: '12px', height: `${val}px`, background: 'var(--primary)', borderRadius: '2px' }} />
        ))}
      </div>
      <button onClick={bubbleSort} className="btn-outline" style={{ marginTop: '20px', fontSize: '0.8rem' }}>Run Bubble Sort</button>
    </div>
  );
};

// --- 2. NZ TRAVEL MAP (Storytelling) ---
export const TravelMap = () => (
  <div className="glass-card" style={{ overflow: 'hidden', position: 'relative', height: '300px' }}>
    <h4 style={{ color: 'var(--primary)' }}>The 2026 Transition</h4>
    <div className="map-line">
      <div className="city-point"><span>Vadodara, IN</span></div>
      <div className="plane-icon">✈️</div>
      <div className="city-point"><span>Otago, NZ</span></div>
    </div>
    <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '20px' }}>Bridging Indian engineering with New Zealand innovation.</p>
  </div>
);
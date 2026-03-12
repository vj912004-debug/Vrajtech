import React from 'react';
import { motion } from 'framer-motion';

const blockData = [
  { title: "BCA Graduation", detail: "Completed with Focus on Database Management", date: "2024" },
  { title: "NZ Student Visa", detail: "Under Assessment - Path to Otago Poly", date: "Jan 2026" },
  { title: "Advanced IT Diploma", detail: "Specializing in Software Development", date: "April 2026" }
];

export const DataBlocks = () => {
  return (
    <div style={{ marginTop: '50px' }}>
      {blockData.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="glass-card"
          style={{ marginBottom: '20px', borderLeft: '4px solid var(--primary)' }}
        >
          <span style={{ fontSize: '0.7rem', color: 'var(--primary)' }}>[{item.date}]</span>
          <h4 style={{ margin: '5px 0' }}>{item.title}</h4>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{item.detail}</p>
        </motion.div>
      ))}
    </div>
  );
};
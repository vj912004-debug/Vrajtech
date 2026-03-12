import React, { useState } from 'react';
import { TiltCard, CodeCaseStudy } from '../components/EliteFeatures';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: "Student Management", cat: "Full-Stack", desc: "MERN system with GPA logic and secure Auth." },
    { id: 2, title: "E-Commerce Engine", cat: "Frontend", desc: "React/Tailwind with dynamic cart & Stripe." },
    { id: 3, title: "Inventory API", cat: "Backend", desc: "Node.js RESTful architecture with MongoDB." }
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="text-gradient" style={{ fontSize: '3.5rem' }}>Selected Works</h2>
        
        {/* Filter Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px' }}>
          {['All', 'Frontend', 'Backend', 'Full-Stack'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={filter === cat ? "btn-primary" : "btn-outline"}
              style={{ padding: '10px 25px', borderRadius: '50px', cursor: 'pointer' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D TILT GALLERY */}
      <div className="grid-3">
        {filtered.map(p => (
          <TiltCard key={p.id}>
            <div className="glass-card" style={{ height: '100%' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem' }}>{p.cat}</span>
              <h3 style={{ margin: '15px 0' }}>{p.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* TECHNICAL DEEP DIVE (MAC CODE EDITOR) */}
      <div style={{ marginTop: '120px' }} data-aos="fade-up">
        <div className="glass-card" style={{ border: 'none', background: 'transparent', padding: '0' }}>
          <h2 className="text-gradient" style={{ fontSize: '2rem' }}>Under The Hood</h2>
          <p style={{ margin: '15px 0 30px', color: '#94a3b8' }}>
            My development philosophy focuses on clean, reusable logic. This snippet highlights an 
            asynchronous handler used in my recent student management project.
          </p>
          <CodeCaseStudy />
        </div>
      </div>

    </div>
  );
};

export default ProjectsPage;
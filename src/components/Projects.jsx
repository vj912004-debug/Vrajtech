import React, { useState } from 'react';
import { SpotlightCard } from './SpotlightCard';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projectData = [
    { title: "Student System", category: "Full-Stack", desc: "MERN Stack Application" },
    { title: "E-Commerce", category: "Frontend", desc: "React & Tailwind" },
    { title: "Inventory API", category: "Backend", desc: "Node.js & MongoDB" }
  ];

  const filtered = filter === 'All' ? projectData : projectData.filter(p => p.category === filter);

  return (
    <section 
      id="projects" 
      className="container" 
      style={{ 
        position: 'relative', 
        zIndex: 20, /* Sits above everything */
        padding: '150px 0 100px' 
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 className="text-gradient" style={{ fontSize: '3.5rem' }}>Selected Works</h2>
        
        {/* Category Filters */}
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

      <div className="grid-3">
        {filtered.map((project, index) => (
          <SpotlightCard key={index}>
            <div className="glass-card">
              <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '0.85rem' }}>
                {project.category}
              </span>
              <h3 style={{ margin: '15px 0' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{project.desc}</p>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
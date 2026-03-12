import React, { useEffect, useState, useRef } from 'react';

const SkillCircle = ({ percentage, skill }) => {
  const [offset, setOffset] = useState(280);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const progress = 280 - (percentage / 100) * 280;
          setOffset(progress);
        }
      },
      { threshold: 0.5 }
    );

    if (circleRef.current) observer.observe(circleRef.current);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={circleRef} style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', width: '120px', height: '120px', margin: '0 auto' }}>
        <svg width="120" height="120">
          <circle cx="60" cy="60" r="45" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
          <circle
            cx="60" cy="60" r="45" fill="transparent" stroke="var(--primary)" strokeWidth="8"
            strokeDasharray="280"
            style={{ 
              strokeDashoffset: offset, 
              transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)',
              strokeLinecap: 'round',
              filter: 'drop-shadow(0 0 8px var(--primary))'
            }}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: '800', fontSize: '1.2rem' }}>
          {percentage}%
        </div>
      </div>
      <h4 style={{ marginTop: '15px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{skill}</h4>
    </div>
  );
};

export default SkillCircle;
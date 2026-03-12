import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const TechMarquee = () => {
  const techs = [
    { name: 'React.js', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'JS', icon: <SiJavascript /> },
    { name: 'GitHub', icon: <FaGithub /> }
  ];
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...techs, ...techs].map((t, i) => (
          <div key={i} className="tech-item">
            <span style={{ color: 'var(--primary)' }}>{t.icon}</span> {t.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechMarquee;
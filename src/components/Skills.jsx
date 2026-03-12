import React from 'react';
import SkillCircle from './SkillCircle';

const Skills = () => {
  const skillsData = [
    { name: "React / Frontend", level: 90 },
    { name: "Node / Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "UI / UX Design", level: 75 }
  ];

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="glass-card" style={{ padding: '50px' }}>
        <h2 className="text-gradient" style={{ marginBottom: '40px', textAlign: 'center' }}>Technical Proficiency</h2>
        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
          {skillsData.map((s, i) => (
            <SkillCircle key={i} skill={s.name} percentage={s.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
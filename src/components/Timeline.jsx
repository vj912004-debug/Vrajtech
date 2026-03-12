import React from 'react';

const Timeline = () => {
  const experiences = [
    {
      year: "2026 (Upcoming)",
      title: "Graduate Diploma in IT",
      location: "Otago Polytechnic, NZ",
      desc: "Specializing in advanced software architectures and cloud integration."
    },
    {
      year: "2025 - Present",
      title: "Full-Stack Developer",
      location: "Independent Projects",
      desc: "Developing high-performance React applications and MERN stack systems."
    },
    {
      year: "2023 - 2025",
      title: "IT Foundations",
      location: "Vadodara, India",
      desc: "Mastering the fundamentals of JavaScript, Database design, and Networking."
    }
  ];

  return (
    <div className="timeline-container">
      {experiences.map((exp, index) => (
        <div className="timeline-item" key={index} data-aos="fade-up">
          <div className="timeline-dot" />
          <div className="glass-card timeline-content">
            <span className="timeline-year">{exp.year}</span>
            <h3 className="timeline-title">{exp.title}</h3>
            <span className="timeline-location">{exp.location}</span>
            <p className="timeline-desc">{exp.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
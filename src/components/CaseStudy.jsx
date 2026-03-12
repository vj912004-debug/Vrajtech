import React from 'react';
// 1. Removed FaServer from this import list
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaCode } from 'react-icons/fa';

const CaseStudy = () => {
  return (
    <div className="case-study-container" data-aos="fade-up">
      {/* Header Section */}
      <div className="case-study-header">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Student <span className="text-gradient">Management System</span>
        </h2>
        <div className="tech-tags">
          <span className="tech-tag">React.js</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">Express</span>
          <span className="tech-tag">MongoDB</span>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid-2" style={{ marginTop: '40px', alignItems: 'start' }}>
        
        {/* Left Column: The Story */}
        <div className="case-study-story">
          <h3><FaCode style={{ color: 'var(--primary)', marginRight: '10px' }}/> The Challenge</h3>
          <p>Educational institutions often struggle with fragmented data. The goal was to build a centralized, secure dashboard capable of handling high-volume queries for student records, attendance, and grading in real-time.</p>
          
          <h3 style={{ marginTop: '30px' }}><FaDatabase style={{ color: 'var(--primary)', marginRight: '10px' }}/> Database Architecture</h3>
          <p>Designed a scalable NoSQL database schema using <strong>MongoDB</strong>. Utilized Mongoose for object data modeling, implementing complex aggregation pipelines to quickly generate institutional performance reports.</p>
          
          {/* 2. Updated the hrefs to use "#!" to clear the warnings */}
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
            <a href="#!" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}><FaExternalLinkAlt /> Live App</a>
            <a href="#!" className="btn-outline" style={{ padding: '10px 20px', fontSize: '0.9rem' }}><FaGithub /> View Source</a>
          </div>
        </div>

        {/* Right Column: The Code & Visuals */}
        <div className="case-study-visuals">
          <div className="glass-card" style={{ padding: '0', overflow: 'hidden' }}>
            {/* Simulated Code Editor Window */}
            <div className="code-header">
              <div className="mac-dots"><span></span><span></span><span></span></div>
              <span className="file-name">studentController.js</span>
            </div>
            <pre className="code-block">
              <code>
{`// Fetch student records with pagination
export const getStudents = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const students = await Student.find()
      .populate('courses')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Student.countDocuments();
    
    res.json({
      students,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};`}
              </code>
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudy;
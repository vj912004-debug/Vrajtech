import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ padding: '100px 0' }}>
      <div className="glass-card grid-2" style={{ padding: '0', overflow: 'hidden' }}>
        {/* Left Side: Info */}
        <div style={{ background: 'var(--primary)', color: '#000', padding: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's connect</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: 0.8 }}>
            Have a project in mind or looking to hire? Reach out and let's build something great.
          </p>
          <div style={{ fontWeight: '700' }}>
            <p style={{ marginBottom: '10px' }}>Email: vraj@example.com</p>
            <p>Location: Vadodara / New Zealand</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div style={{ padding: '60px' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="text" 
              placeholder="Your Name" 
              style={inputStyle}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              style={inputStyle}
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              style={inputStyle}
            ></textarea>
            <button className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '15px',
  borderRadius: '12px',
  color: 'white',
  outline: 'none',
  fontSize: '1rem'
};

export default Contact;
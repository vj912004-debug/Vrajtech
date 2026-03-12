import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const GithubStats = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Change 'vrajpatel' to your exact GitHub username if different
  const username = 'vrajpatel'; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("GitHub Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="glass-card">Connecting to GitHub...</div>;
  if (!profile || profile.message === "Not Found") return null;

  return (
    <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '25px', padding: '30px' }}>
      <img 
        src={profile.avatar_url} 
        alt="Vraj GitHub" 
        style={{ 
          width: '70px', 
          height: '70px', 
          borderRadius: '50%', 
          border: '2px solid var(--primary)',
          boxShadow: '0 0 15px var(--primary)'
        }} 
      />
      <div>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
          <FaGithub style={{ color: 'var(--primary)' }} /> Live Engineering Pulse
        </h3>
        <p style={{ marginTop: '5px', color: '#94a3b8' }}>
          Public Repos: <span style={{ color: 'var(--primary)', fontWeight: '800' }}>{profile.public_repos}</span> 
          <span style={{ margin: '0 15px', opacity: 0.3 }}>|</span>
          Followers: <span style={{ color: 'var(--primary)', fontWeight: '800' }}>{profile.followers}</span>
        </p>
      </div>
    </div>
  );
};

export default GithubStats;
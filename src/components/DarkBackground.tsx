import React from 'react';
import '../styles/DarkBackground.css';

const DarkBackground = () => (
  <div className="background-container">
    <div className="noise-overlay"></div>
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="floating-sphere"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 20}s`,
        }}
      />
    ))}
  </div>
);

export default DarkBackground;

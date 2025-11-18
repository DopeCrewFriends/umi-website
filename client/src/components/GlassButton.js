import React, { useRef, useState } from 'react';
import './GlassButton.css';

const GlassButton = ({ icon, label, onClick, href }) => {
  const buttonRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <div
      ref={buttonRef}
      className="glass-button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      }}
    >
      <div className="glass-button-border"></div>
      <div className="glass-button-content">
        {icon && <span className="glass-button-icon">{icon}</span>}
        <span className="glass-button-label">{label}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="glass-button-link">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default GlassButton;


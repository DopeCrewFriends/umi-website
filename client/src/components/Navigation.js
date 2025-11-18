import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Gallery</div>
        <div className="nav-item">Contact</div>
      </div>
    </nav>
  );
};

export default Navigation;


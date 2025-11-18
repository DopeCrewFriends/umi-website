import React from 'react';
import './WoodenFloor.css';

const WoodenFloor = () => {
  return (
    <div className="wooden-floor">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="floor-plank" style={{ '--index': i }}></div>
      ))}
    </div>
  );
};

export default WoodenFloor;


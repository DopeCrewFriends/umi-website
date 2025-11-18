import React from 'react';
import './Character.css';

const Character = ({ children }) => {
  return (
    <div className="character">
      <div className="character-body">
        {/* Head */}
        <div className="character-head">
          <div className="ear ear-left"></div>
          <div className="ear ear-right"></div>
          <div className="face">
            <div className="eye eye-left"></div>
            <div className="eye eye-right"></div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
        </div>
        
        {/* Body/Dress */}
        <div className="character-dress"></div>
        
        {/* Arms */}
        <div className="arm arm-left">
          <div className="hand hand-left"></div>
        </div>
        <div className="arm arm-right">
          <div className="hand hand-right"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Character;


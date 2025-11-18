import React from 'react';
import './CandleLight.css';

const CandleLight = ({ intensity, mouseX, mouseY }) => {
  const candleStyle = {
    '--intensity': intensity,
    '--mouse-x': mouseX,
    '--mouse-y': mouseY,
    opacity: intensity,
  };

  return (
    <div className="candle-container" style={candleStyle}>
      <div className="candle">
        <div className="candle-wick"></div>
        <div className="flame" style={{ opacity: intensity }}></div>
        <div className="candle-glow" style={{ opacity: intensity * 0.8 }}></div>
      </div>
      <div className="light-ray" style={{ opacity: intensity * 0.6 }}></div>
    </div>
  );
};

export default CandleLight;


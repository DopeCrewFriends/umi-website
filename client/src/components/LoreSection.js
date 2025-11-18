import React from 'react';
import './LoreSection.css';

const LoreSection = ({ imageSrc, imageAlt = "Lore tweet", text, tweet1Src, tweet2Src }) => {
  return (
    <div className="lore-section">
      <h2 className="lore-heading">Lore</h2>
      <div className="lore-content">
        <div className="lore-main-layout">
          {/* Left: Main Tweet */}
          {imageSrc && (
            <div className="lore-main-tweet-container">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="lore-main-tweet-image"
              />
            </div>
          )}
          
          {/* Right: Text and Two Tweets */}
          <div className="lore-right-section">
            {/* Top: Text */}
            {text && (
              <div className="lore-text-container">
                <p className="lore-text">{text}</p>
              </div>
            )}
            
            {/* Bottom: Two Tweets */}
            {(tweet1Src || tweet2Src) && (
              <div className="lore-tweets-container">
                {tweet1Src && (
                  <div className="lore-tweet-item">
                    <img 
                      src={tweet1Src} 
                      alt="Tweet 1"
                      className="lore-tweet-image"
                    />
                  </div>
                )}
                {tweet2Src && (
                  <div className="lore-tweet-item">
                    <img 
                      src={tweet2Src} 
                      alt="Tweet 2"
                      className="lore-tweet-image"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoreSection;

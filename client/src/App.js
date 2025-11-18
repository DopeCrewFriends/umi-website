import React from 'react';
import './App.css';
import GlassButton from './components/GlassButton';
import ContractAddress from './components/ContractAddress';
import LoreSection from './components/LoreSection';

function App() {
  const bgStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/bg.gif)`,
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="App">
      <div className="background-layer" style={bgStyle}></div>
      <div className="scene-container">
        <div className="glass-buttons-container">
          <GlassButton 
            icon="👥"
            label="Community"
            href="https://x.com/i/communities/1990401915310526961"
          />
          <GlassButton 
            icon="💀"
            label="Dexscreener"
            href="https://dexscreener.com/solana/45nvmidth2cebeexdb7ylk5sbhtfbf2qf2jugercojig"
          />
          <GlassButton 
            icon="📄"
            label="Know Your Meme"
            href="#"
          />
        </div>
        <ContractAddress address="GyonHTjR4NiJxKLfFrUnreTPULnBcMZnM3BPQcU3pump" />
        <LoreSection 
          imageSrc={`${process.env.PUBLIC_URL}/tweet.png`} 
          imageAlt="Lore tweet"
          text="On November 15 2025, X user @yuristrapula took over the timeline, posting a gif of $UMI a low poly ps1 style bunny from the game Rental. The post went viral gaining over 50 million views in just a couple of days. From that day on, the GIF spread all over the internet and became famous. It's still popular today."
          tweet1Src={`${process.env.PUBLIC_URL}/tweet1.png`}
          tweet2Src={`${process.env.PUBLIC_URL}/tweet2.png`}
        />
      </div>
    </div>
  );
}

export default App;


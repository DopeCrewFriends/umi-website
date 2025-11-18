import React, { useState } from 'react';
import './ContractAddress.css';

const ContractAddress = ({ address }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="contract-address-container">
      <div className="contract-address-box">
        <div className="contract-address-text">
          {address}
        </div>
        <button 
          className="contract-address-copy-btn"
          onClick={handleCopy}
        >
          {copied ? 'COPIED!' : 'COPY'}
        </button>
      </div>
    </div>
  );
};

export default ContractAddress;


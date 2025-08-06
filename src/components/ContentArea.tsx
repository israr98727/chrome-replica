import React from 'react';
import { FiSearch, FiMic } from 'react-icons/fi';
import './ContentArea.css';

const ContentArea: React.FC = () => {
  return (
    <div className="content-area">
      <div className="logo-container">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
          className="google-logo"
        />
      </div>
      <div className="search-bar-container">
        <FiSearch className="search-icon" />
        <input type="text" className="search-input" />
        <FiMic className="mic-icon" />
      </div>
      <div className="buttons-container">
        <button className="content-button">Google Search</button>
        <button className="content-button">I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default ContentArea;

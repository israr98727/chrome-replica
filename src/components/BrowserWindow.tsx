import React from 'react';
import { FiMinus, FiSquare, FiX } from 'react-icons/fi';
import './BrowserWindow.css';
import TopBar from './TopBar';
import ContentArea from './ContentArea';

const BrowserWindow: React.FC = () => {
  return (
    <div className="browser-window">
      <div className="window-controls">
        <span className="control"><FiMinus /></span>
        <span className="control"><FiSquare /></span>
        <span className="control close"><FiX /></span>
      </div>
      <TopBar />
      <div className="page-content">
        <ContentArea />
      </div>
    </div>
  );
};

export default BrowserWindow;

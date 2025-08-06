import React from 'react';
import { FiArrowLeft, FiArrowRight, FiRefreshCw, FiGrid, FiMoreVertical } from 'react-icons/fi';
import './TopBar.css';
import AddressBar from './AddressBar';
import Tabs from './Tabs';

const TopBar: React.FC = () => {
  return (
    <div className="top-bar-container">
      <div className="tabs-row">
        <Tabs />
      </div>
      <div className="controls-row">
        <div className="navigation-icons">
          <span className="icon"><FiArrowLeft /></span>
          <span className="icon"><FiArrowRight /></span>
          <span className="icon"><FiRefreshCw /></span>
        </div>
        <AddressBar />
        <div className="menu-icons">
          <span className="icon"><FiGrid /></span>
          <span className="icon user-icon">U</span>
          <span className="icon"><FiMoreVertical /></span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

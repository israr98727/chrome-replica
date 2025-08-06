import React, { useState } from 'react';
import { FaReact, FaGoogle } from 'react-icons/fa';
import { FiX, FiPlus } from 'react-icons/fi';
import './Tabs.css';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs = [
    { name: 'Vite + React + TS', icon: <FaReact /> },
    { name: 'React Test - israr98727@gmail.com', icon: <FaGoogle /> },
  ];

  return (
    <div className="tabs-container">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${activeTab === index ? 'active' : ''}`}
          onClick={() => setActiveTab(index)}
        >
          <span className="tab-icon">{tab.icon}</span>
          <span className="tab-title">{tab.name}</span>
          <span className="tab-close"><FiX /></span>
        </div>
      ))}
      <div className="new-tab-button">
        <FiPlus />
      </div>
    </div>
  );
};

export default Tabs;

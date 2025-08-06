import React from 'react';
import { FiLock, FiStar } from 'react-icons/fi';
import './AddressBar.css';

const AddressBar: React.FC = () => {
  return (
    <div className="address-bar-container">
      <div className="address-bar">
        <span className="icon"><FiLock /></span>
        <input type="text" defaultValue="mail.google.com/mail/u/0/#inbox/FMfcgzQbcTvp..." readOnly />
        <span className="icon"><FiStar /></span>
      </div>
    </div>
  );
};

export default AddressBar;

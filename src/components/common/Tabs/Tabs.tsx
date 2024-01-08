// Tabs.js
import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

interface TabsProps {
    activeTab: string;
    tabs:string[];
    onTabChange: (tab: string) => void;
  }
  
  function Tabs({ activeTab,tabs, onTabChange }: TabsProps) {


  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => onTabChange(tab)}
        >
          <p    className={`tabtext`}>
          {tab}
          </p>
        
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Tabs;
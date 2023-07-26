import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ onTabClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (value, index) => {
    setActiveTab(index);
    // Pass the value and index to the parent component via the onTabClick prop
    onTabClick(value, index);
  };

  const tabs = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
  ];

  return (

    <div className="tabs-container ">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.value, index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default Tabs;

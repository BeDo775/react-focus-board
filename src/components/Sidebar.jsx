import React from 'react';

export default function Sidebar({ activeTab, setActiveTab, completedCount, totalCount, progressPercent }) {
  const tabs = ['Overview', 'My Projects'];

  return (
    <div className="sidebar">
      <h2>FocusBoard</h2>
      <p className="user-name">Abdelrahman</p>
      
      <div className="menu">
        {tabs.map((tab) => (
          <button 
            key={tab}
            className={activeTab === tab ? 'active' : ''} 
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="progress-card">
        <h4>Progress</h4>
        <div className="bar">
          <div className="fill" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <span>{completedCount} / {totalCount} Done</span>
      </div>
    </div>
  );
}
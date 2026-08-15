import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ activeTab, setActiveTab, completedCount, totalCount, progressPercent }) {
  const tabs = ['Overview', 'My Projects'];

  return (
    <div className={styles.sidebarContainer}>
      <h2 className={styles.brandTitle}>FocusBoard</h2>
      <p className="text-secondary mb-4">Abdelrahman</p>
      
      <div className="d-grid gap-2 mb-4">
        {tabs.map((tab) => (
          <button 
            key={tab}
            className={`btn text-start ${activeTab === tab ? 'btn-primary' : 'btn-outline-secondary'}`} 
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="card bg-dark text-light border-secondary p-3">
        <h6>Progress</h6>
        <div className="progress mb-2" style={{ height: '8px' }}>
          <div 
            className="progress-bar bg-success" 
            role="progressbar" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <small className="text-muted">{completedCount} / {totalCount} Done</small>
      </div>
    </div>
  );
}
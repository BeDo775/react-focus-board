import React from 'react';

export default function Header({ activeTab, onAddTask }) {
  return (
    <div className="top-bar">
      <h3>Workspace / {activeTab}</h3>
      <button className="add-btn" onClick={onAddTask}>+ Add Task</button>
    </div>
  );
}
import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  const itemStyle = {
    backgroundColor: '#1e1e1e',
    border: '1px solid #333',
    borderRadius: '6px',
    padding: '12px',
    textDecoration: task.completed ? 'line-through' : 'none',
    opacity: task.completed ? 0.6 : 1,
  };

  return (
    <div style={itemStyle} className="d-flex align-items-center justify-content-between mb-2">
      <div className="d-flex align-items-center gap-2">
        <input
          type="checkbox"
          className="form-check-input mt-0"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="text-light fs-6">{task.title}</span>
      </div>
      
      <div className="d-flex align-items-center gap-2">
        <span className="badge bg-info text-dark fw-bold">{task.tag}</span>
        <button 
          className="btn btn-sm btn-outline-danger" 
          onClick={() => onDelete(task.id)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
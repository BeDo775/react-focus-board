import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskItem from './components/TaskItem';

const initialTasks = [
  { id: 1, title: 'Study React Components', tag: 'Components', completed: true },
  { id: 2, title: 'Practice Props & State', tag: 'Props', completed: true },
  { id: 3, title: 'Practice Conditional Rendering', tag: 'Logic', completed: false },
  { id: 4, title: 'Review Dynamic Array Mapping', tag: 'Map', completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [activeTab, setActiveTab] = useState('Overview');
  const [showPending, setShowPending] = useState(false);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const addTask = () => {
    const taskTitle = prompt('Enter task name:');
    if (taskTitle && taskTitle.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: taskTitle.trim(),
        tag: 'Custom',
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);
  const displayedTasks = showPending ? tasks.filter(t => !t.completed) : tasks;

  return (
    <div className="layout">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        completedCount={completedCount} 
        totalCount={tasks.length} 
        progressPercent={progressPercent} 
      />

      <div className="main">
        <Header activeTab={activeTab} onAddTask={addTask} />

        <div className="hero-box">
          <h1>React.js Workspace</h1>
          <p>Assignment demonstration for components, props, state, and array mapping.</p>
        </div>

        {completedCount > 0 && (
          <div className="status-banner">
            🎉 Great job! You have completed {completedCount} task(s).
          </div>
        )}

        <div className="tasks-container">
          <div className="tasks-header">
            <h3>Tasks List</h3>
            <button className="filter-btn" onClick={() => setShowPending(!showPending)}>
              {showPending ? 'Show All' : 'Show Pending Only'}
            </button>
          </div>

          <div className="list">
            {displayedTasks.map((task) => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onToggle={toggleTask} 
                onDelete={deleteTask}
              />
            ))}

            {displayedTasks.length === 0 && (
              <p className="no-data">No tasks found in this view.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
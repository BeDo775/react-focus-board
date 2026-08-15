import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskItem from './components/TaskItem';
import { useLocalStorage } from './hooks/useLocalStorage';

const initialTasks = [
  { id: 1, title: 'Study React Components', tag: 'Components', completed: true },
  { id: 2, title: 'Practice Props & State', tag: 'Props', completed: true },
  { id: 3, title: 'Practice Conditional Rendering', tag: 'Logic', completed: false },
  { id: 4, title: 'Review Dynamic Array Mapping', tag: 'Map', completed: false },
];

export default function App() {
  const [tasks, setTasks] = useLocalStorage('focus_board_tasks', initialTasks);
  const [activeTab, setActiveTab] = useState('Overview');
  const [showPending, setShowPending] = useState(false);

  useEffect(() => {
    document.title = `FocusBoard (${tasks.filter(t => !t.completed).length} pending)`;
  }, [tasks]);

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
  const progressPercent = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0;
  const displayedTasks = showPending ? tasks.filter(t => !t.completed) : tasks;

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 p-0">
      <div className="row g-0">
        <div className="col-md-3 col-lg-2">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            completedCount={completedCount} 
            totalCount={tasks.length} 
            progressPercent={progressPercent} 
          />
        </div>

        <div className="col-md-9 col-lg-10 p-4">
          <Header activeTab={activeTab} onAddTask={addTask} />

          <div className="bg-secondary bg-opacity-10 p-4 rounded mb-4 border border-secondary">
            <h1 className="h3">React.js Workspace</h1>
            <p className="text-muted mb-0">Assignment demonstration using Hooks, Bootstrap, and multiple Styling approaches.</p>
          </div>

          {completedCount > 0 && (
            <div className="alert alert-success bg-dark text-success border-success mb-4" role="alert">
              🎉 Great job! You have completed {completedCount} task(s).
            </div>
          )}

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="m-0">Tasks List</h4>
            <button className="btn btn-outline-light btn-sm" onClick={() => setShowPending(!showPending)}>
              {showPending ? 'Show All' : 'Show Pending Only'}
            </button>
          </div>

          <div>
            {displayedTasks.map((task) => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onToggle={toggleTask} 
                onDelete={deleteTask}
              />
            ))}

            {displayedTasks.length === 0 && (
              <p className="text-center text-muted my-4">No tasks found in this view.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
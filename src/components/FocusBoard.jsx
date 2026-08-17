import { useState } from 'react';
import { CheckCircle2, ListTodo, Plus, Trash2, XCircle } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addTask,
  toggleTask,
  removeTask,
  clearCompleted,
  selectTasks,
  selectTaskCount,
  selectCompletedCount,
} from '../redux/slices/tasksSlice';

export default function FocusBoard() {
  const tasks = useAppSelector(selectTasks);
  const total = useAppSelector(selectTaskCount);
  const completed = useAppSelector(selectCompletedCount);
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    dispatch(addTask(trimmed, priority));
    setTitle('');
  };

  return (
    <div className="focusboard">
      <div className="focusboard-header">
        <div className="focusboard-icon">
          <ListTodo />
        </div>
        <h1 className="focusboard-title">FocusBoard</h1>
        <p className="focusboard-desc">
          Manage your tasks, set priorities, and track progress all in one place.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-value">{total}</p>
          <p className="stat-label">Total</p>
        </div>
        <div className="stat-card">
          <p className="stat-value success">{completed}</p>
          <p className="stat-label">Done</p>
        </div>
        <div className="stat-card">
          <p className="stat-value primary">{total - completed}</p>
          <p className="stat-label">Active</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What do you need to focus on?"
          className="form-input"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="form-input"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="btn-submit">
          <Plus />
          Add
        </button>
      </form>

      {tasks.length === 0 ? (
        <div className="empty-state empty-state-dashed">
          <p>No tasks yet. Add one above to get started.</p>
        </div>
      ) : (
        <>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <button
                  onClick={() => dispatch(toggleTask(task.id))}
                  className="task-toggle"
                  aria-label={task.done ? 'Mark as not done' : 'Mark as done'}
                >
                  {task.done ? (
                    <CheckCircle2 className="done" />
                  ) : (
                    <XCircle className="undone" />
                  )}
                </button>

                <div className="task-text-wrapper">
                  <p className={`task-text ${task.done ? 'completed' : ''}`}>
                    {task.title}
                  </p>
                </div>

                <span className={`priority-tag ${task.priority}`}>
                  {task.priority}
                </span>

                <button
                  onClick={() => dispatch(removeTask(task.id))}
                  aria-label="Remove task"
                  className="task-remove"
                >
                  <Trash2 />
                </button>
              </li>
            ))}
          </ul>

          {completed > 0 && (
            <button
              onClick={() => dispatch(clearCompleted())}
              className="btn-clear-tasks"
            >
              Clear {completed} completed {completed === 1 ? 'task' : 'tasks'}
            </button>
          )}
        </>
      )}
    </div>
  );
}
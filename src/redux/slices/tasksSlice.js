import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(title, priority = 'medium') {
        return {
          payload: {
            id: Date.now().toString(36) + Math.random().toString(36).substring(2, 5),
            title,
            priority,
            done: false,
            createdAt: Date.now(),
          },
        };
      },
    },
    toggleTask(state, action) {
      const task = state.items.find((item) => item.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },
    removeTask(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCompleted(state) {
      state.items = state.items.filter((item) => !item.done);
    },
  },
});

export const { addTask, toggleTask, removeTask, clearCompleted } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

// Selectors
export const selectTasks = (state) => state.tasks.items;

export const selectTaskCount = (state) => state.tasks.items.length;

export const selectCompletedCount = (state) =>
  state.tasks.items.filter((item) => item.done).length;
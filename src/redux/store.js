import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cartSlice';
import { tasksReducer } from './slices/tasksSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    tasks: tasksReducer,
  },
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './Modal/modalSlice';

const store = configureStore({
  reducer: {
    Modal: modalReducer,
  },
});

export default store;

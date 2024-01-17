import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './Modal/modalSlice';

const store = configureStore({
  reducer: {
    Modal: modalSlice,
  },
});

export default store;

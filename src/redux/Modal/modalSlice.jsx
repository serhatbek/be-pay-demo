import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeModal: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
});

export default modalSlice.reducer;

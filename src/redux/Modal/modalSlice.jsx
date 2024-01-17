import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeModal: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: () => {},
    setOpenModal: (state, action) => {
      state.activeModal = action.payload;
    },
    closeModal: () => {},
    setCloseModal: (state) => {
      state.activeModal = null;
    },
  },
});

export const { openModal, setOpenModal, closeModal, setCloseModal } =
  modalSlice.actions;
export default modalSlice.reducer;

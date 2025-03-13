import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface IModalState {
  isOpen: boolean;
}

const initialState: IModalState = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal.isOpen;
export const modalReducer = modalSlice.reducer;

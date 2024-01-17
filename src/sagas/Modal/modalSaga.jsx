import { put, takeLatest, fork } from 'redux-saga/effects';
import {
  closeModal,
  openModal,
  setCloseModal,
  setOpenModal,
} from '../../redux/Modal/modalSlice';

function* onOpenModalAsync(action) {
  yield put(setOpenModal(action.payload));
}

function* onCloseModalAsync() {
  yield put(setCloseModal());
}

function* watchOpenModal() {
  yield takeLatest(openModal.type, onOpenModalAsync);
}

function* watchCloseModal() {
  yield takeLatest(closeModal.type, onCloseModalAsync);
}

export const modalSagas = [fork(watchOpenModal), fork(watchCloseModal)];

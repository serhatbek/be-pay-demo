import { all } from 'redux-saga/effects';
import { modalSagas } from './Modal/modalSaga';

export default function* rootSaga() {
  yield all([...modalSagas]);
}

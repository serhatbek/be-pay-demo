import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './Modal/modalSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    Modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);
export default store;

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { authReducer, authSlice } from '@auth/redux';
import { todoReducer, todoSlice } from '@todo/redux';
import { appSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        [authSlice.name]: authReducer,
        [todoSlice.name]: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(appSaga);

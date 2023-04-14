import { configureStore } from '@reduxjs/toolkit';
import { authReducer, authSlice } from '@auth/redux';
import { todoReducer, todoSlice } from '@todo/redux';

export const store = configureStore({
    reducer: {
        [authSlice.name]: authReducer,
        [todoSlice.name]: todoReducer,
    },
});

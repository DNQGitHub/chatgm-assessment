import { configureStore } from '@reduxjs/toolkit';
import { todoReducer, todoSlice } from '@todo/redux';

export const store = configureStore({
    reducer: {
        [todoSlice.name]: todoReducer,
    },
});

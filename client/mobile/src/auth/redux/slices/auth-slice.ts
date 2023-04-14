import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthModel } from '@auth/models';

export enum AuthStatus {
    IDLE,
    PROCESSING,
    AUTH_FAILED,
    AUTH_SUCCEEDED,
}

interface AuthState {
    status: AuthStatus;
    error?: string | null;
    auth?: AuthModel;
}

const initialState: AuthState = {
    status: AuthStatus.IDLE,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        processRequested: (state, { payload, type }: PayloadAction<any>) => {
            state.status = AuthStatus.PROCESSING;
        },
        authFailed: (state, { payload, type }: PayloadAction<{ error: string }>) => {
            const { error } = payload;
            state.error = error;
            state.status = AuthStatus.AUTH_FAILED;
        },
        authSucceeded: (state, { payload, type }: PayloadAction<{ auth: AuthModel }>) => {
            const { auth } = payload;
            state.auth = auth;
            state.status = AuthStatus.AUTH_SUCCEEDED;
        },
        resetAuthRequested: (state, { payload, type }: PayloadAction<any>) => {
            state.auth = undefined;
            state.error = undefined;
            state.status = AuthStatus.IDLE;
        },
    },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectAuth = (state: any): AuthModel | undefined => state[authSlice.name].auth;

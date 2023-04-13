import { AuthModel } from '@auth/models';
import React from 'react';

export enum AuthState {
    IDLE,
    AUTHENTICATING,
    AUTHENTICATE_FAILED,
    AUTHENTICATE_SUCCEEDED,
}

export interface AuthContextValue {
    state: AuthState;
    error: string | null | undefined;
    auth?: AuthModel;

    handleSetState: (state: AuthState) => void;
    handleSetError: (error: string) => void;
    handleSetAuth: (auth: AuthModel) => void;
}

export const AuthContext = React.createContext<AuthContextValue>({} as AuthContextValue);

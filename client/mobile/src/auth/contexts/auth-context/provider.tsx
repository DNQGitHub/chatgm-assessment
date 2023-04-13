import { PropsWithChildren } from 'react';
import { AuthContext, AuthState } from '@auth/contexts';
import React from 'react';
import { AuthModel } from '@auth/models';

export const AuthProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const [state, setState] = React.useState<AuthState>(AuthState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);
    const [auth, setAuth] = React.useState<AuthModel>();

    const handleSetState = (state: AuthState) => {
        setState(() => state);
    };

    const handleSetError = (errors: string) => {
        setError(() => error);
    };

    const handleSetAuth = (auth: AuthModel) => {
        setAuth(() => auth);
    };

    return (
        <AuthContext.Provider
            value={{
                state,
                error,
                auth,

                handleSetState,
                handleSetError,
                handleSetAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

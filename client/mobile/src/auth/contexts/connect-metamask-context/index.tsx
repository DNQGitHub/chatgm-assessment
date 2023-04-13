import React from 'react';

export enum ConnectMetamaskState {
    IDLE,
    CONNECTING,
    CONNECT_FAILED,
    CONNECT_SUCCEEDED,
}

export interface ConnectMetamaskContextValue {
    state: ConnectMetamaskState;
    error: string | null | undefined;
}

export const ConnectMetamaskContext = React.createContext<ConnectMetamaskContextValue>(
    {} as ConnectMetamaskContextValue,
);

export const useConnectMetamaskContext = () => {
    const context = React.useContext(ConnectMetamaskContext);

    if (!context) {
        throw new Error('Missing wrap with ConnectMetamaskContext.Provider');
    }

    return context;
};

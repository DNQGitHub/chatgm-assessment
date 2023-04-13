import React from 'react';

export enum ConnectWalletConnectState {
    IDLE,
    CONNECTING,
    CONNECT_FAILED,
    CONNECT_SUCCEEDED,
}

export interface ConnectWalletConnectContextValue {
    state: ConnectWalletConnectState;
    error: string | null | undefined;
}

export const ConnectWalletConnectContext = React.createContext<ConnectWalletConnectContextValue>(
    {} as ConnectWalletConnectContextValue,
);

export const useConnectWalletConnectContext = () => {
    const context = React.useContext(ConnectWalletConnectContext);

    if (!context) {
        throw new Error('Missing wrap with ConnectWalletConnectContext.Provider');
    }

    return context;
};

import React from 'react';

export interface ConnectWalletConnectContextValue {}

export const ConnectWalletConnectContext = React.createContext<ConnectWalletConnectContextValue>(
    {} as ConnectWalletConnectContextValue,
);

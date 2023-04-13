import React from 'react';

export interface ConnectMetamaskContextValue {}

export const ConnectMetamaskContext = React.createContext<ConnectMetamaskContextValue>(
    {} as ConnectMetamaskContextValue,
);

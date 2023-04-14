import React from 'react';

export interface WalletConnectContextValue {
    connector: any;

    handleConnect: () => Promise<void>;
    handleDisconnect: () => Promise<void>;
}

export const WalletConnectContext = React.createContext<WalletConnectContextValue>({} as WalletConnectContextValue);

export const useWalletConnectContext = () => {
    const context = React.useContext(WalletConnectContext);

    if (!context) {
        throw new Error('Missing wrap with WalletConnectContext.Provider');
    }

    return context;
};

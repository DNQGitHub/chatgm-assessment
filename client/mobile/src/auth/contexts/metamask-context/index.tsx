import React from 'react';

export interface MetamaskContextValue {
    provider: any;

    handleConnect: () => Promise<void>;
}

export const MetamaskContext = React.createContext<MetamaskContextValue>({} as MetamaskContextValue);

export const useMetamaskContext = () => {
    const context = React.useContext(MetamaskContext);

    if (!context) {
        throw new Error('Missing wrap with MetamaskContext.Provider');
    }

    return context;
};

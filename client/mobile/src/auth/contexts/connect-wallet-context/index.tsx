import React from 'react';

export interface ConnectWalletContextValue {
    modalVisible: boolean;
    handleSetModalVisible: (visible: boolean) => void;
}

export const ConnectWalletContext = React.createContext<ConnectWalletContextValue>({} as ConnectWalletContextValue);

export const useConnectWalletContext = () => {
    const context = React.useContext(ConnectWalletContext);

    if (!context) {
        throw new Error('Missing wrap with ConnectWalletContext.Provider');
    }

    return context;
};

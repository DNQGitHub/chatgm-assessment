import { PropsWithChildren } from 'react';
import { ConnectWalletContext } from '@auth/contexts';
import React from 'react';

export const ConnectWalletProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const [modalVisible, setModalVisible] = React.useState(false);

    const handleSetModalVisible = (visible: boolean) => {
        setModalVisible(() => visible);
    };

    return (
        <ConnectWalletContext.Provider
            value={{
                modalVisible,
                handleSetModalVisible,
            }}
        >
            {children}
        </ConnectWalletContext.Provider>
    );
};

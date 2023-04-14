import { ConnectMetamaskContext, ConnectMetamaskState, useAuthContext } from '@auth/contexts';
import { AuthMethod } from '@auth/models';
import MetaMaskSDK from '@metamask/sdk';
import React, { PropsWithChildren } from 'react';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const metamaskSdk = new MetaMaskSDK({
    openDeeplink: (link) => {
        Linking.openURL(link);
    },
    timer: BackgroundTimer,
    dappMetadata: {
        name: "Q's TODO",
        url: 'https://www.google.com',
    },
});

const ethereum = metamaskSdk.getProvider();

export const ConnectMetamaskProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const [state, setState] = React.useState<ConnectMetamaskState>(ConnectMetamaskState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);

    const { handleSetAuth } = useAuthContext();

    const handleConnect = async () => {
        try {
            console.log('handleConnect', {
                handleSetAuth,
                isConnected: ethereum.isConnected(),
                selectedAddress: ethereum.selectedAddress,
                chainId: ethereum.chainId,
            });

            setState(ConnectMetamaskState.CONNECTING);

            if (!ethereum.isConnected()) {
                const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
                console.log({ accounts });
            }

            setState(ConnectMetamaskState.CONNECT_SUCCEEDED);

            handleSetAuth({
                method: AuthMethod.CONNECT_METAMASK,
                walletAddress: ethereum.selectedAddress,
                blockchainNetwork: ethereum.chainId,
            });

            console.log({
                isConnected: ethereum.isConnected(),
                selectedAddress: ethereum.selectedAddress,
                chainId: ethereum.chainId,
            });
        } catch (error: any) {
            console.log(error);
            setError(error.toString());
            setState(ConnectMetamaskState.CONNECT_FAILED);
        }
    };

    return (
        <ConnectMetamaskContext.Provider
            value={{
                state,
                error,

                handleConnect,
            }}
        >
            {children}
        </ConnectMetamaskContext.Provider>
    );
};

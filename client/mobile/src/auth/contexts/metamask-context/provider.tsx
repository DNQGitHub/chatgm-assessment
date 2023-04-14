import { PropsWithChildren } from 'react';
import { MetamaskContext } from '@auth/contexts';
import MetaMaskSDK from '@metamask/sdk';
import { Linking } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '@auth/redux';
import { AuthMethod } from '@auth/models';

const metamaskSdk = new MetaMaskSDK({
    openDeeplink: (link) => {
        console.log('MetamaskProvider | openDeeplink', { link });
        Linking.openURL(link);
    },
    timer: BackgroundTimer,
    dappMetadata: {
        name: "Q's TODO",
        url: 'https://www.google.com',
    },
});

const provider = metamaskSdk.getProvider();

export const MetamaskProvider = (props: PropsWithChildren) => {
    const { children } = props;

    React.useEffect(() => {
        const handleOnConnect = (connectInfo: { chainId: string }) => {
            console.log('metamask | connect', { connectInfo });
        };

        const handleOnDisconnect = (error: { message: string; code: number; data?: unknown }) => {
            console.log('metamask | disconnect', { error });
        };

        const handleOnAccountsChanged = (accounts: Array<string>) => {
            console.log('metamask | accountsChanged', { accounts });
        };

        const handleOnChainChanged = (chainId: string) => {
            console.log('metamask | chainChanged', { chainId });
        };

        const handleOnMessage = (message: { type: string; data: unknown }) => {
            console.log('metamask | message', { message });
        };

        provider.on('connect', handleOnConnect);
        provider.on('disconnect', handleOnDisconnect);
        provider.on('accountsChanged', handleOnAccountsChanged);
        provider.on('chainChanged', handleOnChainChanged);
        provider.on('message', handleOnMessage);

        return () => {
            console.log('----aaaa');
            if (provider.removeListener) {
                provider.removeListener('connect', handleOnConnect);
                provider.removeListener('disconnect', handleOnDisconnect);
                provider.removeListener('accountsChanged', handleOnAccountsChanged);
                provider.removeListener('chainChanged', handleOnChainChanged);
                provider.removeListener('message', handleOnMessage);
            } else {
                provider.off('connect', handleOnConnect);
                provider.off('disconnect', handleOnDisconnect);
                provider.off('accountsChanged', handleOnAccountsChanged);
                provider.off('chainChanged', handleOnChainChanged);
                provider.off('message', handleOnMessage);
            }
        };
    }, []);

    const dispatch = useDispatch();

    const handleConnect = async () => {
        try {
            console.log('handleConnect');
            dispatch(authActions.processRequested({}));

            if (!provider.isConnected()) {
                await provider.request({ method: 'eth_requestAccounts' });
            }
            console.log('handleConnect', { address: provider.selectedAddress, chainId: provider.chainId });
            dispatch(
                authActions.authSucceeded({
                    auth: {
                        method: AuthMethod.CONNECT_METAMASK,
                        walletAddress: provider.selectedAddress,
                        blockchainNetwork: provider.chainId,
                    },
                }),
            );
        } catch (error: any) {
            console.log('handleConnect', { error });
            dispatch(authActions.authFailed({ error: error.toString() }));
        }
    };

    return <MetamaskContext.Provider value={{ provider, handleConnect }}>{children}</MetamaskContext.Provider>;
};

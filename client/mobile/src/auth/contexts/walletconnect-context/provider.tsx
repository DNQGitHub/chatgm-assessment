import React from 'react';
import { PropsWithChildren } from 'react';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import { WalletConnectContext } from '@auth/contexts';
import { useDispatch } from 'react-redux';
import { authActions } from '@auth/redux';
import { AuthMethod } from '@auth/models';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WalletConnectProvider = withWalletConnect(
    (props: PropsWithChildren) => {
        const { children } = props;

        const connector = useWalletConnect();

        const dispatch = useDispatch();

        const handleConnect = async () => {
            try {
                console.log('handleConnect');
                dispatch(authActions.processRequested({}));

                if (!connector.connected) {
                    await connector.connect();
                }
                console.log('handleConnect', { address: connector.accounts, chainId: connector.chainId });
                dispatch(
                    authActions.authSucceeded({
                        auth: {
                            method: AuthMethod.CONNECT_WALLETCONNECT,
                            walletAddress: connector.accounts?.[0],
                            blockchainNetwork: connector.chainId + '',
                        },
                    }),
                );
            } catch (error: any) {
                console.log('handleConnect', { error });
                dispatch(authActions.authFailed({ error: error.toString() }));
            }
        };

        return (
            <WalletConnectContext.Provider
                value={{
                    connector,
                    handleConnect,
                }}
            >
                {children}
            </WalletConnectContext.Provider>
        );
    },
    {
        storageOptions: {
            asyncStorage: AsyncStorage as any,
        },
    },
);

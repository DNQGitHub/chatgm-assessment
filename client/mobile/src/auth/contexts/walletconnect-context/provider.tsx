import React from 'react';
import { PropsWithChildren } from 'react';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import { WalletConnectContext } from '@auth/contexts';
import { useDispatch } from 'react-redux';
import { authActions } from '@auth/redux';
import { AuthMethod } from '@auth/models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WalletConnect from '@walletconnect/client';

export const WalletConnectProvider = withWalletConnect(
    (props: PropsWithChildren) => {
        const { children } = props;

        const prevConnectorRef = React.useRef<WalletConnect | null>(null);
        const connector = useWalletConnect();

        React.useEffect(() => {
            if ((!prevConnectorRef.current || !prevConnectorRef.current.connected) && connector.connected) {
                dispatch(
                    authActions.authSucceeded({
                        auth: {
                            method: AuthMethod.CONNECT_WALLETCONNECT,
                            walletAddress: connector.accounts?.[0],
                            blockchainNetwork: connector.chainId + '',
                        },
                    }),
                );
            }

            if (prevConnectorRef.current != connector) {
                prevConnectorRef.current = connector;
            }
        }, [connector]);

        const dispatch = useDispatch();

        const handleConnect = async () => {
            try {
                dispatch(authActions.processRequested({}));

                if (!connector.connected) {
                    await connector.connect();
                }
            } catch (error: any) {
                console.log('handleConnect', { error });
                dispatch(authActions.authFailed({ error: error.toString() }));
            }
        };

        const handleDisconnect = async () => {
            await connector.killSession();
            dispatch(authActions.resetAuthRequested({}));
        };

        return (
            <WalletConnectContext.Provider
                value={{
                    connector,
                    handleConnect,
                    handleDisconnect,
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

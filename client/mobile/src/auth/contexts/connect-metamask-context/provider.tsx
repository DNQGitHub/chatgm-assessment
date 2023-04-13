import { ConnectMetamaskContext, ConnectMetamaskState, useAuthContext } from '@auth/contexts';
// import MetaMaskSDK from '@metamask/sdk';
import React, { PropsWithChildren } from 'react';
import { Linking } from 'react-native';
// import BackgroundTimer from 'react-native-background-timer';

// const metamaskSdk = new MetaMaskSDK({
//     openDeeplink: (link) => {
//         Linking.openURL(link);
//     },
//     timer: BackgroundTimer,
//     dappMetadata: {
//         name: "Q's TODO",
//         url: 'https://www.google.com',
//     },
// });

// const ethereum = metamaskSdk.getProvider();

export const ConnectMetamaskProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const {} = useAuthContext();

    const [state, setState] = React.useState<ConnectMetamaskState>(ConnectMetamaskState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);

    const handleConnect = async () => {
        console.log('handleConnect');
        // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        // console.log({ accounts });
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

import { NativeBaseProvider } from 'native-base';
import { ScreenHome } from './screens';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@app/redux';
import { MetamaskProvider } from '@auth/contexts/metamask-context/provider';
import { WalletConnectProvider } from '@auth/contexts/walletconnect-context/provider';

export const App = () => {
    return (
        <NativeBaseProvider>
            <ReduxProvider store={store}>
                <WalletConnectProvider>
                    <MetamaskProvider>
                        <ScreenHome />
                    </MetamaskProvider>
                </WalletConnectProvider>
            </ReduxProvider>
        </NativeBaseProvider>
    );
};

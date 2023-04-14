import { NativeBaseProvider } from 'native-base';
import { ScreenHome } from './screens';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@app/redux/store';
import { MetamaskProvider } from '@auth/contexts/metamask-context/provider';
import { WalletConnectProvider } from '@auth/contexts/walletconnect-context/provider';

export const App = () => {
    return (
        <ReduxProvider store={store}>
            <WalletConnectProvider>
                <MetamaskProvider>
                    <NativeBaseProvider>
                        <ScreenHome />
                    </NativeBaseProvider>
                </MetamaskProvider>
            </WalletConnectProvider>
        </ReduxProvider>
    );
};

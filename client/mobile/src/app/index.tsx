import { NativeBaseProvider } from 'native-base';
import { ScreenHome } from './screens';
import { AuthProvider } from '@auth/contexts/auth-context/provider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@app/redux';

export const App = () => {
    return (
        <NativeBaseProvider>
            <ReduxProvider store={store}>
                <AuthProvider>
                    <ScreenHome />
                </AuthProvider>
            </ReduxProvider>
        </NativeBaseProvider>
    );
};

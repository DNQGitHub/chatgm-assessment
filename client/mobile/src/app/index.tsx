import { NativeBaseProvider } from 'native-base';
import { ScreenHome } from './screens';
import { TodoProvider } from '@todo/contexts/todo-context/provider';
import { AuthProvider } from '@auth/contexts/auth-context/provider';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@app/redux';

export const App = () => {
    return (
        <NativeBaseProvider>
            <ReduxProvider store={store}>
                <AuthProvider>
                    <TodoProvider>
                        <ScreenHome />
                    </TodoProvider>
                </AuthProvider>
            </ReduxProvider>
        </NativeBaseProvider>
    );
};

import { NativeBaseProvider } from 'native-base';
import { ScreenHome } from './screens';
import { TodoProvider } from '@todo/contexts/todo-context/provider';
import { AuthProvider } from '@auth/contexts/auth-context/provider';

export const App = () => {
    return (
        <NativeBaseProvider>
            <AuthProvider>
                <TodoProvider>
                    <ScreenHome />
                </TodoProvider>
            </AuthProvider>
        </NativeBaseProvider>
    );
};

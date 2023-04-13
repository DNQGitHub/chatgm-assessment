import { NativeBaseProvider } from 'native-base';
import { ScreenHome } from './screens';
import { TodoProvider } from '@todo/contexts/todo-context/provider';

export const App = () => {
    return (
        <NativeBaseProvider>
            <TodoProvider>
                <ScreenHome />
            </TodoProvider>
        </NativeBaseProvider>
    );
};

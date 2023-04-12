import { NativeBaseProvider } from 'native-base';
import { ScreenHome } from './screens';
import { ToDoProvider } from '../todo/contexts/todo-context/provider';

export const App = () => {
    return (
        <NativeBaseProvider>
            <ToDoProvider>
                <ScreenHome />
            </ToDoProvider>
        </NativeBaseProvider>
    );
};

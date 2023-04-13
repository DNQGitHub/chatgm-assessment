import {} from 'react';
import { LayoutMain } from '../../layouts';
import { View } from 'native-base';
import { ButtonAddNewTodo, ListTodos } from '@todo/components';
import { AddNewTodoProvider } from '@todo/contexts/add-new-todo-context/provider';

export const ScreenHome = () => {
    return (
        <LayoutMain>
            <View style={{ flex: 1, marginVertical: 16 }}>
                <ListTodos />
            </View>

            <View position={'absolute'} right={30} bottom={30}>
                <AddNewTodoProvider>
                    <ButtonAddNewTodo />
                </AddNewTodoProvider>
            </View>
        </LayoutMain>
    );
};

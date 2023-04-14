import React from 'react';
import { LayoutMain } from '@app/layouts';
import { View } from 'native-base';
import { ButtonAddNewTodo, ListTodos } from '@todo/components';
import { AddNewTodoProvider } from '@todo/contexts/add-new-todo-context/provider';
import { AuthInfo } from '@auth/components/auth-info';

export const ScreenHome = () => {
    return (
        <LayoutMain>
            <View flex={1} marginBottom={16}>
                <AuthInfo />
            </View>

            <View flex={1} marginBottom={16}>
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

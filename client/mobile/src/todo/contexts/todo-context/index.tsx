import { AddNewTodoDto, EditTodoDto } from '@todo/dtos';
import { TodoModel } from '@todo/models';
import React from 'react';

export interface TodoContextValue {
    todos: Array<TodoModel>;

    handleAddTodo: (todo: AddNewTodoDto) => void;
    handleEditTodo: (todoId: string, dto: EditTodoDto) => void;
    handleDeleteTodo: (todoId: string) => void;
    handleCheckTodoDone: (todoId: string, dto: boolean) => void;
}

export const TodoContext = React.createContext<TodoContextValue>({} as TodoContextValue);

export const useTodoContext = () => {
    const context = React.useContext(TodoContext);

    if (!context) {
        throw new Error('Missing wrap with TodoContext.Provider');
    }

    return context;
};

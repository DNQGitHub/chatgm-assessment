import { AddNewTodoDto, EditTodoDto } from '@todo/dtos';
import { TodoModel } from '@todo/models';
import React from 'react';

export interface TodoContextValue {
    todos: Array<TodoModel>;

    addTodo: (todo: AddNewTodoDto) => void;
    editTodo: (todoId: string, dto: EditTodoDto) => void;
    deleteTodo: (todoId: string) => void;
    checkTodoDone: (todoId: string, dto: boolean) => void;
}

export const TodoContext = React.createContext<TodoContextValue>({} as TodoContextValue);

export const useTodoContext = () => {
    const context = React.useContext(TodoContext);

    if (!context) {
        throw new Error('Missing wrap with TodoContext.Provider');
    }

    return context;
};

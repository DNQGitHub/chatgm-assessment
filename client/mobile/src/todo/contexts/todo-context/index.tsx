import React from 'react';

export interface ToDoContextValue {
    todos: Array<{ id: string; name: string; isDone: boolean }>;

    addTodo: (todo: { id: string; name: string; isDone: boolean }) => void;
    editTodo: (todoId: string, data: { name: string }) => void;
    deleteTodo: (todoId: string) => void;
    checkTodoDone: (todoId: string, done: boolean) => void;
}

export const ToDoContext = React.createContext<ToDoContextValue>({} as ToDoContextValue);

export const useToDoContext = () => {
    const context = React.useContext(ToDoContext);

    if (!context) {
        throw new Error('Missing wrap with ToDoContext.Provider');
    }

    return context;
};

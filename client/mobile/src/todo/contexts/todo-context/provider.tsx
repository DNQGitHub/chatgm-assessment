import React, { PropsWithChildren } from 'react';
import { ToDoContext } from '.';

export const ToDoProvider = (props: PropsWithChildren) => {
    const { children } = props;
    const [todos, setTodos] = React.useState<Array<{ id: string; name: string; isDone: boolean }>>([]);

    const addTodo = (todo: { id: string; name: string; isDone: boolean }) => {
        console.log('addTodo', { todo });
        setTodos((curTodos) => [todo, ...curTodos]);
    };

    const editTodo = (todoId: string, data: { name: string }) => {
        setTodos((curTodos) =>
            curTodos.map((i) => {
                if (i.id == todoId) {
                    i.name = data.name;
                }

                return i;
            }),
        );
    };

    const deleteTodo = (todoId: string) => {
        setTodos((curTodos) => curTodos.filter((i) => i.id != todoId));
    };

    const checkTodoDone = (todoId: string, done: boolean) => {
        setTodos((curTodos) =>
            curTodos.map((i) => {
                if (i.id == todoId) {
                    i.isDone = done;
                }

                return i;
            }),
        );
    };

    return (
        <ToDoContext.Provider
            value={{
                todos,
                addTodo,
                editTodo,
                checkTodoDone,
                deleteTodo,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};

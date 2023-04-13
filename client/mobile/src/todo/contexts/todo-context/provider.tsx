import React, { PropsWithChildren } from 'react';
import { TodoContext } from '@todo/contexts';
import { AddNewTodoDto, EditTodoDto } from '@todo/dtos';
import { TodoModel } from '@todo/models';
import { v4 as Uuid } from 'uuid';

export const TodoProvider = (props: PropsWithChildren) => {
    const { children } = props;
    const [todos, setTodos] = React.useState<Array<TodoModel>>([]);

    const addTodo = (dto: AddNewTodoDto) => {
        const newTodo: TodoModel = {
            ...dto,
            id: Uuid(),
            isDone: false,
        };
        setTodos((curTodos) => [newTodo, ...curTodos]);
    };

    const editTodo = (todoId: string, dto: EditTodoDto) => {
        setTodos((curTodos) =>
            curTodos.map((i) => {
                if (i.id == todoId) {
                    i.name = dto.name;
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
        <TodoContext.Provider
            value={{
                todos,
                addTodo,
                editTodo,
                checkTodoDone,
                deleteTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

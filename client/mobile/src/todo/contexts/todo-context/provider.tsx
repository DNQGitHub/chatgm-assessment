import React, { PropsWithChildren } from 'react';
import { TodoContext } from '@todo/contexts';
import { AddNewTodoDto, EditTodoDto } from '@todo/dtos';
import { TodoModel } from '@todo/models';
import { v4 as Uuid } from 'uuid';

export const TodoProvider = (props: PropsWithChildren) => {
    const { children } = props;
    const [todos, setTodos] = React.useState<Array<TodoModel>>([]);

    const handleAddTodo = (dto: AddNewTodoDto) => {
        const newTodo: TodoModel = {
            ...dto,
            id: Uuid(),
            isDone: false,
        };
        setTodos((curTodos) => [newTodo, ...curTodos]);
    };

    const handleEditTodo = (todoId: string, dto: EditTodoDto) => {
        setTodos((curTodos) =>
            curTodos.map((i) => {
                if (i.id == todoId) {
                    i.name = dto.name;
                }

                return i;
            }),
        );
    };

    const handleDeleteTodo = (todoId: string) => {
        setTodos((curTodos) => curTodos.filter((i) => i.id != todoId));
    };

    const handleCheckTodoDone = (todoId: string, done: boolean) => {
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
                handleAddTodo,
                handleEditTodo,
                handleCheckTodoDone,
                handleDeleteTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

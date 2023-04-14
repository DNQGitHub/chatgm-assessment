import React, { PropsWithChildren } from 'react';
import { TodoContext } from '@todo/contexts';
import { AddNewTodoDto, EditTodoDto } from '@todo/dtos';
import { TodoModel } from '@todo/models';
import { v4 as Uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos, todoActions } from '@todo/redux';

export const TodoProvider = (props: PropsWithChildren) => {
    const { children } = props;
    // const [todos, setTodos] = React.useState<Array<TodoModel>>([]);
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);

    const handleAddTodo = (dto: AddNewTodoDto) => {
        const newTodo: TodoModel = {
            ...dto,
            id: Uuid(),
            isDone: false,
        };

        dispatch(todoActions.newTodoAdded({ newTodo }));
        // setTodos((curTodos) => [newTodo, ...curTodos]);
    };

    const handleEditTodo = (todoId: string, dto: EditTodoDto) => {
        dispatch(todoActions.todoUpdated({ todoId, dto }));
        // setTodos((curTodos) =>
        //     curTodos.map((i) => {
        //         if (i.id == todoId) {
        //             i.name = dto.name;
        //         }

        //         return i;
        //     }),
        // );
    };

    const handleDeleteTodo = (todoId: string) => {
        dispatch(todoActions.todoDeleted({ todoId }));
        // setTodos((curTodos) => curTodos.filter((i) => i.id != todoId));
    };

    const handleCheckTodoDone = (todoId: string, done: boolean) => {
        dispatch(todoActions.todoIsDoneUpdated({ todoId, isDone: done }));
        // setTodos((curTodos) =>
        //     curTodos.map((i) => {
        //         if (i.id == todoId) {
        //             i.isDone = done;
        //         }

        //         return i;
        //     }),
        // );
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

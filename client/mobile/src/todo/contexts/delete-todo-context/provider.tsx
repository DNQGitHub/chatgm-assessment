import { PropsWithChildren } from 'react';
import React from 'react';
import { DeleteTodoContext, DeleteTodoState, useTodoContext } from '@todo/contexts';
import { TodoModel } from '@todo/models';

export const DeleteTodoProvider = (props: PropsWithChildren<{ todo: TodoModel }>) => {
    const { children, todo } = props;

    const { deleteTodo } = useTodoContext();

    const [state, setState] = React.useState(DeleteTodoState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);

    const handleConfirm = () => {
        try {
            setState(() => DeleteTodoState.SUBMITING);

            deleteTodo(todo.id);

            setState(() => DeleteTodoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            setError(error.toString());
            setState(() => DeleteTodoState.SUBMIT_FAILED);
        }
    };

    return (
        <DeleteTodoContext.Provider
            value={{
                state,
                error,
                todo,

                handleConfirm,
            }}
        >
            {children}
        </DeleteTodoContext.Provider>
    );
};
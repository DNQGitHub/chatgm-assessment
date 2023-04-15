import { PropsWithChildren } from 'react';
import React from 'react';
import { DeleteTodoContext, DeleteTodoState } from '@todo/contexts';
import { TodoModel } from '@todo/models';
import { useDispatch } from 'react-redux';
import { todoActions } from '@todo/redux/slices';

export const DeleteTodoProvider = (props: PropsWithChildren<{ todo: TodoModel }>) => {
    const { children, todo } = props;

    const [state, setState] = React.useState(DeleteTodoState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);

    const dispatch = useDispatch();

    const handleConfirm = () => {
        try {
            setState(() => DeleteTodoState.SUBMITING);

            dispatch(todoActions.todoDeleted({ todoId: todo.id }));

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

import { PropsWithChildren } from 'react';
import { DeleteToDoContext, DeleteToDoState } from '.';
import React from 'react';
import { useToDoContext } from '../todo-context';

export const DeleteToDoProvider = (
    props: PropsWithChildren<{ todo: { id: string; name: string; isDone: boolean } }>,
) => {
    const { children, todo } = props;

    const { deleteTodo } = useToDoContext();

    const [state, setState] = React.useState(DeleteToDoState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);

    const handleConfirm = () => {
        try {
            setState(() => DeleteToDoState.SUBMITING);

            deleteTodo(todo.id);

            setState(() => DeleteToDoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            setError(error.toString());
            setState(() => DeleteToDoState.SUBMIT_FAILED);
        }
    };

    return (
        <DeleteToDoContext.Provider
            value={{
                state,
                error,
                todo,

                handleConfirm,
            }}
        >
            {children}
        </DeleteToDoContext.Provider>
    );
};

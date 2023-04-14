import { PropsWithChildren } from 'react';
import React from 'react';
import { DeleteTodoContext, DeleteTodoState } from '@todo/contexts';
import { TodoModel } from '@todo/models';
import { useDispatch } from 'react-redux';
import { todoActions } from '@todo/redux/slices';

export const DeleteTodoProvider = (props: PropsWithChildren<{ todo: TodoModel }>) => {
    const { children, todo } = props;

    const [modalVisible, setModalVisible] = React.useState(false);
    const [state, setState] = React.useState(DeleteTodoState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);

    const dispatch = useDispatch();

    const handleConfirm = () => {
        try {
            setState(() => DeleteTodoState.SUBMITING);

            dispatch(todoActions.todoDeleted({ todoId: todo.id }));

            setModalVisible(() => false);

            setState(() => DeleteTodoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            setError(error.toString());
            setState(() => DeleteTodoState.SUBMIT_FAILED);
        }
    };

    const handleSetModalVisible = (visible: boolean) => {
        setModalVisible(() => visible);
    };

    return (
        <DeleteTodoContext.Provider
            value={{
                state,
                error,
                todo,
                modalVisible,

                handleConfirm,
                handleSetModalVisible,
            }}
        >
            {children}
        </DeleteTodoContext.Provider>
    );
};

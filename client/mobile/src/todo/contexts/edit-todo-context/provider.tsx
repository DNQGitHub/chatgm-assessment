import { PropsWithChildren } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import { EditTodoDto, EditTodoDtoValidationSchema } from '@todo/dtos';
import { EditTodoContext, EditTodoState } from '@todo/contexts';
import { TodoModel } from '@todo/models';
import { useDispatch } from 'react-redux';
import { todoActions } from '@todo/redux';

export const EditTodoProvider = (props: PropsWithChildren<{ todo: TodoModel }>) => {
    const { children, todo } = props;

    const [modalVisible, setModalVisible] = React.useState(false);
    const [state, setState] = React.useState(EditTodoState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);
    const form = useFormik<EditTodoDto>({
        initialValues: {
            name: todo.name,
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
        validationSchema: new EditTodoDtoValidationSchema(),
    });

    const dispatch = useDispatch();

    const handleSubmit = (dto: EditTodoDto) => {
        try {
            setState(() => EditTodoState.SUBMITING);

            dispatch(todoActions.todoUpdated({ todoId: todo.id, dto }));

            setModalVisible(() => false);

            setState(() => EditTodoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            setError(error.toString());
            setState(() => EditTodoState.SUBMIT_FAILED);
        }
    };

    const handleSetModalVisible = (visible: boolean) => {
        setModalVisible(() => visible);
    };

    return (
        <EditTodoContext.Provider
            value={{
                state,
                error,
                form,
                modalVisible,

                handleSetModalVisible,
            }}
        >
            {children}
        </EditTodoContext.Provider>
    );
};

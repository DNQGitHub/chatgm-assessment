import { PropsWithChildren } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import { EditTodoDto, EditTodoDtoValidationSchema } from '@todo/dtos';
import { EditTodoContext, EditTodoState } from '@todo/contexts';
import { TodoModel } from '@todo/models';
import { useDispatch } from 'react-redux';
import { todoActions } from '@todo/redux/slices';

export const EditTodoProvider = (props: PropsWithChildren<{ todo: TodoModel }>) => {
    const { children, todo } = props;

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

            setState(() => EditTodoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            setError(error.toString());
            setState(() => EditTodoState.SUBMIT_FAILED);
        }
    };

    return (
        <EditTodoContext.Provider
            value={{
                state,
                error,
                form,
            }}
        >
            {children}
        </EditTodoContext.Provider>
    );
};

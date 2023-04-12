import { PropsWithChildren } from 'react';
import { EditToDoContext, EditToDoFormValues, EditToDoState } from '.';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useToDoContext } from '../todo-context';

export const EditToDoProvider = (props: PropsWithChildren<{ todo: { id: string; name: string; isDone: boolean } }>) => {
    const { children, todo } = props;

    const { editTodo } = useToDoContext();

    const [state, setState] = React.useState(EditToDoState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);
    const form = useFormik<EditToDoFormValues>({
        initialValues: {
            name: todo.name,
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
        }),
    });

    const handleSubmit = (values: EditToDoFormValues) => {
        try {
            setState(() => EditToDoState.SUBMITING);

            editTodo(todo.id, { ...values });

            setState(() => EditToDoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            setError(error.toString());
            setState(() => EditToDoState.SUBMIT_FAILED);
        }
    };

    return (
        <EditToDoContext.Provider
            value={{
                state,
                error,
                form,
            }}
        >
            {children}
        </EditToDoContext.Provider>
    );
};

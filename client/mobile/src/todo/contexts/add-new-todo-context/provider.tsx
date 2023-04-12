import { PropsWithChildren } from 'react';
import { AddNewToDoContext, AddNewToDoFormValues, AddNewToDoState } from '.';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as Uuid } from 'uuid';
import { useToDoContext } from '../todo-context';

export const AddNewToDoProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const { addTodo } = useToDoContext();

    const [state, setState] = React.useState(AddNewToDoState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);
    const form = useFormik<AddNewToDoFormValues>({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required(),
        }),
    });

    const handleSubmit = (values: AddNewToDoFormValues) => {
        try {
            console.log('handleSubmit', { values });
            setState(() => AddNewToDoState.SUBMITING);

            addTodo({ ...values, id: Uuid(), isDone: false });

            setState(() => AddNewToDoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            console.log('handleSubmit', { error });
            setError(error.toString());
            setState(() => AddNewToDoState.SUBMIT_FAILED);
        }
    };

    return (
        <AddNewToDoContext.Provider
            value={{
                state,
                error,
                form,
            }}
        >
            {children}
        </AddNewToDoContext.Provider>
    );
};

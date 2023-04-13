import { PropsWithChildren } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import { AddNewTodoContext, AddNewTodoState, useTodoContext } from '@todo/contexts';
import { AddNewTodoDto, AddNewTodoDtoValidationSchema } from '@todo/dtos';

export const AddNewTodoProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const { addTodo } = useTodoContext();

    const [state, setState] = React.useState(AddNewTodoState.IDLE);
    const [error, setError] = React.useState<string | null | undefined>(null);
    const form = useFormik<AddNewTodoDto>({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
        validationSchema: new AddNewTodoDtoValidationSchema(),
    });

    const handleSubmit = (dto: AddNewTodoDto) => {
        try {
            setState(() => AddNewTodoState.SUBMITING);

            addTodo(dto);

            setState(() => AddNewTodoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            setError(error.toString());
            setState(() => AddNewTodoState.SUBMIT_FAILED);
        }
    };

    return (
        <AddNewTodoContext.Provider
            value={{
                state,
                error,
                form,
            }}
        >
            {children}
        </AddNewTodoContext.Provider>
    );
};

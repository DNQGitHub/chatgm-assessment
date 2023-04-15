import { PropsWithChildren } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import { AddNewTodoContext, AddNewTodoState } from '@todo/contexts';
import { AddNewTodoDto, AddNewTodoDtoValidationSchema } from '@todo/dtos';
import { useDispatch } from 'react-redux';
import { todoActions } from '@todo/redux/slices';
import { v4 as Uuid } from 'uuid';

export const AddNewTodoProvider = (props: PropsWithChildren) => {
    const { children } = props;

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

    const dispatch = useDispatch();

    const handleSubmit = (dto: AddNewTodoDto) => {
        try {
            setState(() => AddNewTodoState.SUBMITING);

            dispatch(
                todoActions.newTodoAdded({
                    newTodo: {
                        id: Uuid(),
                        name: dto.name,
                        isDone: false,
                    },
                }),
            );

            form.resetForm();

            setState(() => AddNewTodoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            console.log(error);
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

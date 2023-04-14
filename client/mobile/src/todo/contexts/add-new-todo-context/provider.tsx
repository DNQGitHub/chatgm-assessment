import { PropsWithChildren } from 'react';
import React from 'react';
import { useFormik } from 'formik';
import { AddNewTodoContext, AddNewTodoState, useTodoContext } from '@todo/contexts';
import { AddNewTodoDto, AddNewTodoDtoValidationSchema } from '@todo/dtos';

export const AddNewTodoProvider = (props: PropsWithChildren) => {
    const { children } = props;

    const { handleAddTodo } = useTodoContext();

    const [modalVisible, setModalVisible] = React.useState(false);
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

            handleAddTodo(dto);
            form.resetForm();

            setState(() => AddNewTodoState.SUBMIT_SUCCEEDED);
        } catch (error: any) {
            console.log(error);
            setError(error.toString());
            setState(() => AddNewTodoState.SUBMIT_FAILED);
        }
    };

    const handleSetModalVisible = (visible: boolean) => {
        setModalVisible(() => visible);
    };

    return (
        <AddNewTodoContext.Provider
            value={{
                state,
                error,
                form,

                modalVisible,
                handleSetModalVisible,
            }}
        >
            {children}
        </AddNewTodoContext.Provider>
    );
};

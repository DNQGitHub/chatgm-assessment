import { FormikProps } from 'formik';
import React from 'react';
import { AddNewTodoDto } from '@todo/dtos';

export enum AddNewTodoState {
    IDLE,
    SUBMITING,
    SUBMIT_FAILED,
    SUBMIT_SUCCEEDED,
}

export type AddNewTodoForm = FormikProps<AddNewTodoDto>;

export interface AddNewTodoContextValue {
    state: AddNewTodoState;
    error: string | null | undefined;
    form: AddNewTodoForm;
}

export const AddNewTodoContext = React.createContext<AddNewTodoContextValue>({} as AddNewTodoContextValue);

export const useAddNewTodoContext = () => {
    const context = React.useContext(AddNewTodoContext);

    if (!context) {
        throw new Error('Missing wrap with AddNewTodoContext.Provider');
    }

    return context;
};

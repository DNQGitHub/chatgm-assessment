import { FormikProps } from 'formik';
import React from 'react';

export enum AddNewToDoState {
    IDLE,
    SUBMITING,
    SUBMIT_FAILED,
    SUBMIT_SUCCEEDED,
}

export type AddNewToDoFormValues = {
    name: string;
};

export type AddNewToDoForm = FormikProps<AddNewToDoFormValues>;

export interface AddNewToDoContextValue {
    state: AddNewToDoState;
    error: string | null | undefined;
    form: AddNewToDoForm;
}

export const AddNewToDoContext = React.createContext<AddNewToDoContextValue>({} as AddNewToDoContextValue);

export const useAddNewToDoContext = () => {
    const context = React.useContext(AddNewToDoContext);

    if (!context) {
        throw new Error('Missing wrap with AddNewToDoContext.Provider');
    }

    return context;
};

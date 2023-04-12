import { FormikProps } from 'formik';
import React from 'react';

export enum EditToDoState {
    IDLE,
    SUBMITING,
    SUBMIT_FAILED,
    SUBMIT_SUCCEEDED,
}

export type EditToDoFormValues = {
    name: string;
};

export type EditToDoForm = FormikProps<EditToDoFormValues>;

export interface EditToDoContextValue {
    state: EditToDoState;
    error: string | null | undefined;
    form: EditToDoForm;
}

export const EditToDoContext = React.createContext<EditToDoContextValue>({} as EditToDoContextValue);

export const useEditToDoContext = () => {
    const context = React.useContext(EditToDoContext);

    if (!context) {
        throw new Error('Missing wrap with EditToDoContext.Provider');
    }

    return context;
};

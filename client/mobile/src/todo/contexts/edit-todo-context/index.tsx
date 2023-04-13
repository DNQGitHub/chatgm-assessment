import { EditTodoDto } from '@todo/dtos';
import { FormikProps } from 'formik';
import React from 'react';

export enum EditTodoState {
    IDLE,
    SUBMITING,
    SUBMIT_FAILED,
    SUBMIT_SUCCEEDED,
}

export type EditTodoForm = FormikProps<EditTodoDto>;

export interface EditTodoContextValue {
    state: EditTodoState;
    error: string | null | undefined;
    form: EditTodoForm;
    modalVisible: boolean;

    handleSetModalVisible: (visible: boolean) => void;
}

export const EditTodoContext = React.createContext<EditTodoContextValue>({} as EditTodoContextValue);

export const useEditTodoContext = () => {
    const context = React.useContext(EditTodoContext);

    if (!context) {
        throw new Error('Missing wrap with EditTodoContext.Provider');
    }

    return context;
};

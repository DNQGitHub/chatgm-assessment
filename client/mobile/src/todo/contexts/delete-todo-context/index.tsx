import { TodoModel } from '@todo/models';
import React from 'react';

export enum DeleteTodoState {
    IDLE,
    SUBMITING,
    SUBMIT_FAILED,
    SUBMIT_SUCCEEDED,
}

export interface DeleteTodoContextValue {
    state: DeleteTodoState;
    error: string | null | undefined;
    todo: TodoModel;
    modalVisible: boolean;

    handleConfirm: () => void;
    handleSetModalVisible: (visible: boolean) => void;
}

export const DeleteTodoContext = React.createContext<DeleteTodoContextValue>({} as DeleteTodoContextValue);

export const useDeleteTodoContext = () => {
    const context = React.useContext(DeleteTodoContext);

    if (!context) {
        throw new Error('Missing wrap with DeleteTodoContext.Provider');
    }

    return context;
};

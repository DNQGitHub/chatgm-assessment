import React from 'react';

export enum DeleteToDoState {
    IDLE,
    SUBMITING,
    SUBMIT_FAILED,
    SUBMIT_SUCCEEDED,
}

export interface DeleteToDoContextValue {
    state: DeleteToDoState;
    error: string | null | undefined;
    todo: { id: string; name: string; isDone: boolean };

    handleConfirm: () => void;
}

export const DeleteToDoContext = React.createContext<DeleteToDoContextValue>({} as DeleteToDoContextValue);

export const useDeleteToDoContext = () => {
    const context = React.useContext(DeleteToDoContext);

    if (!context) {
        throw new Error('Missing wrap with DeleteToDoContext.Provider');
    }

    return context;
};

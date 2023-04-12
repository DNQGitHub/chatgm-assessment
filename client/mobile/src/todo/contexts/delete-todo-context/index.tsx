import React from 'react';

export const DeleteToDoContext = React.createContext({});

export const useDeleteToDoContext = () => {
    const context = React.useContext(DeleteToDoContext);

    if (!context) {
        throw new Error('Missing wrap with DeleteToDoContext.Provider');
    }

    return context;
};

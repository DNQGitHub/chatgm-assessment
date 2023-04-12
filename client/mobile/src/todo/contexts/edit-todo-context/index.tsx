import React from 'react';

export const EditToDoContext = React.createContext({});

export const useEditToDoContext = () => {
    const context = React.useContext(EditToDoContext);

    if (!context) {
        throw new Error('Missing wrap with EditToDoContext.Provider');
    }

    return context;
};

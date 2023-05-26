// Import Modules
import { createContext, PropsWithChildren, useReducer } from 'react';

// Import Interfaces
import { InitialState } from '@interfaces/context';

// Import Context
import { useActions } from './action';
import { reducer } from './reducer';

// Define Initial State
export const INITIAL_STATE: InitialState = {
    menu: {
        name: '',
    },
    pagination: {
        currentPage: 0,
        rowPerPage: 10,
    },
    filter: {
        key: '',
        column: '',
        direction: 'ASC',
        status: '',
        startDate: '',
        endDate: '',
    },
};

export const StoreContext = createContext({
    states: INITIAL_STATE,
    // eslint-disable-next-line
    actions: useActions((value) => value),
});

export const StoreContextProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [states, dispatch] = useReducer(reducer, INITIAL_STATE);

    const actions = useActions(dispatch);

    return <StoreContext.Provider value={{ states, actions }}>{children}</StoreContext.Provider>;
};

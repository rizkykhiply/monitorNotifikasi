// Import Modules
import { createContext, PropsWithChildren, useReducer } from 'react';

// Import Interfaces
import { InitialState } from '../interfaces/store.interface';

// Import Context
import { useActions } from './action';
import { reducer } from './reducer';

// Define Initial State
export const INITIAL_STATE: InitialState = {
    modal: {
        session: {
            show: false,
        },
        delete: {
            show: false,
        },
    },
    pagination: {
        currentPage: 1,
        limit: 10,
        sort: 'ASC',
        search: '',
        startDate: '',
        endDate: '',
    },
    notification: {
        show: false,
        type: 'error',
        position: {
            horizontal: 'center',
            vertical: 'top',
        },
        message: '',
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

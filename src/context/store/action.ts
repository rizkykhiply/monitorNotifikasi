// Import Modules
import { Dispatch } from 'react';

// Import Interfaces
import { Action, Filter, Menu, Pagination } from '@interfaces/context';

export const actions = {
    CLEAR_SESSION: 'CLEAR_SESSION',
    UPDATE_MENU: 'UPDATE_MENU',
    UPDATE_PAGINATION: 'UPDATE_PAGINATION',
    UPDATE_FILTER: 'UPDATE_FILTER',
};

export const useActions = (dispatch: Dispatch<Action>) => ({
    CLEAR_SESSION: () => dispatch({ type: actions.CLEAR_SESSION, payload: {} }),
    UPDATE_MENU: (value: Menu) => dispatch({ type: actions.UPDATE_MENU, payload: value }),
    UPDATE_PAGINATION: (value: Pagination) => dispatch({ type: actions.UPDATE_PAGINATION, payload: value }),
    UPDATE_FILTER: (value: Filter) => dispatch({ type: actions.UPDATE_FILTER, payload: value }),
});

// Import Modules
import { Dispatch } from 'react';

// Import Interfaces
import { Action, Filter, Modal, Pagination } from '@interfaces/context';

export const actions = {
    CLEAR_SESSION: 'CLEAR_SESSION',
    UPDATE_MODAL: 'UPDATE_MODAL',
    UPDATE_PAGINATION: 'UPDATE_PAGINATION',
    UPDATE_FILTER: 'UPDATE_FILTER',
};

export const useActions = (dispatch: Dispatch<Action>) => ({
    CLEAR_SESSION: () => dispatch({ type: actions.CLEAR_SESSION, payload: {} }),
    UPDATE_MODAL: (value: Modal) => dispatch({ type: actions.UPDATE_MODAL, payload: value }),
    UPDATE_PAGINATION: (value: Pagination) => dispatch({ type: actions.UPDATE_PAGINATION, payload: value }),
    UPDATE_FILTER: (value: Filter) => dispatch({ type: actions.UPDATE_FILTER, payload: value }),
});

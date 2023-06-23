// Import Modules
import { Dispatch } from 'react';

// Import Interfaces
import { Action, Modal, Pagination, Notification } from '../interfaces/store.interface';

export const actions = {
    CLEAR_STATE: 'CLEAR_STATE',
    UPDATE_MODAL: 'UPDATE_MODAL',
    UPDATE_PAGINATION: 'UPDATE_PAGINATION',
    UPDATE_NOTIFICATION: 'UPDATE_NOTIFICATION',
};

export const useActions = (dispatch: Dispatch<Action>) => ({
    CLEAR_STATE: () => dispatch({ type: actions.CLEAR_STATE, payload: {} }),
    UPDATE_MODAL: (value: Modal) => dispatch({ type: actions.UPDATE_MODAL, payload: value }),
    UPDATE_PAGINATION: (value: Pagination) => dispatch({ type: actions.UPDATE_PAGINATION, payload: value }),
    UPDATE_NOTIFICATION: (value: Notification) => dispatch({ type: actions.UPDATE_NOTIFICATION, payload: value }),
});

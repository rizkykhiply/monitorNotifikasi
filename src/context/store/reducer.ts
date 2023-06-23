// Import Context
import { INITIAL_STATE } from './context';
import { actions } from './action';

// Import Interfaces
import { Action, InitialState } from '../interfaces/store.interface';

const actionTypes = (state: InitialState, { type, payload }: Action) => {
    switch (type) {
        case actions.CLEAR_STATE:
            return INITIAL_STATE;

        case actions.UPDATE_MODAL:
            return {
                ...state,
                modal: {
                    session: {
                        show: payload.session.show,
                    },
                    delete: {
                        show: payload.delete.show,
                    },
                },
            };

        case actions.UPDATE_PAGINATION:
            return {
                ...state,
                pagination: {
                    currentPage: payload.currentPage,
                    limit: payload.limit,
                    sort: payload.sort,
                    search: payload.search,
                    startDate: payload.startDate,
                    endDate: payload.endDate,
                },
            };

        case actions.UPDATE_NOTIFICATION:
            return {
                ...state,
                notification: {
                    show: payload.show,
                    type: payload.type,
                    position: {
                        horizontal: payload.position.horizontal,
                        vertical: payload.position.vertical,
                    },
                    message: payload.message,
                },
            };

        default:
            return state;
    }
};

export const reducer = (state: InitialState, { type, payload }: Action) => {
    const result = actionTypes(state, { type, payload });

    return result;
};

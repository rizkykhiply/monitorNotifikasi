// Import Context
import { actions } from './action';
import { INITIAL_STATE } from './context';

// Import Interfaces
import { Action, InitialState } from '@interfaces/context';

const actionTypes = (state: InitialState, { type, payload }: Action) => {
    switch (type) {
        case actions.CLEAR_SESSION:
            return INITIAL_STATE;
        case actions.UPDATE_MENU:
            return {
                ...state,
                menu: {
                    name: payload.name,
                },
            };
        case actions.UPDATE_PAGINATION:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: payload.currentPage,
                    rowPerPage: payload.rowPerPage,
                },
            };
        case actions.UPDATE_FILTER:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    key: payload.key,
                    column: payload.column,
                    direction: payload.direction,
                    status: payload.status,
                    startDate: payload.startDate,
                    endDate: payload.endDate,
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

// Define Modal Interface
export interface Modal {
    open: boolean;
}

// Define Pagination Interface
export interface Pagination {
    currentPage: number;
    rowPerPage: number;
}

// Define Filter Interface
export interface Filter {
    key: string;
    status?: string;
    startDate?: string;
    endDate?: string;
    direction: 'ASC' | 'DESC';
    column: string;
}

// Define Initial State Interface
export interface InitialState {
    modal: Modal;
    pagination: Pagination;
    filter: Filter;
}

// Define Action Interface
export interface Action {
    type: string;
    payload: any;
}

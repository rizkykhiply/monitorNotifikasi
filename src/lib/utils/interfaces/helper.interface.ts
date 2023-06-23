// Define Validate String Type
export type TValidateString = 'char' | 'numeric' | 'emoji' | 'encode' | 'decode';

// Define Validate Time Type
export type TValidateTime =
    | 'date'
    | 'date-time-1'
    | 'date-time-2'
    | 'date-time-3'
    | 'date-time-4'
    | 'date-start'
    | 'date-add'
    | 'date-subs'
    | 'date-time-add'
    | 'date-time-subs';

// Define Validate Random Char Type
export type TValidateRandomChar = 'alpha' | 'numeric' | 'alphanumeric';

// Define Pagination Interface
export interface IPagination {
    pagination?: string;
    count?: number;
    countPage?: number;
    totalPage?: number;

    currentPage: number;
    limit: number;
    sort: string;
    search?: string;
    startDate?: string;
    endDate?: string;
}

// Define Pagination Filter Interface
export interface IPaginationFilter {
    startDate?: string;
    endDate?: string;
    column: string;
}

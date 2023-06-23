// Import Modules
import useSWR from 'swr';

// Import Interfaces
import { IPagination } from '@lib/utils/interfaces/helper.interface';

// Define Journal List
interface JournalList {
    date: string;
    trx_no: string;
    account: string;
    account_name: string;
    group: string;
    total_amount: string;
    created_by: string;
}

// Define Journal Data
export interface JournalData {
    data: JournalList[];
    currentPage: number;
    countPage: number;
    totalPage: number;
}

// Define Hooks Journal Params
interface HooksJournalParams extends IPagination {
    fallback: any;
}

// Define Hooks Journal
interface HooksJournal {
    data: JournalData;
    isLoading: boolean;
}

// Define All Journal Url
const getUrlJournal = '/api/journal?';

// Define Fetcher
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Define Hooks Journal
const useHooksJournal = (params: HooksJournalParams): HooksJournal => {
    const getQuery = `currentPage=${params.currentPage}&limit=${params.limit}&sort=${params.sort}&search=${params.search}&startDate=${params.startDate}&endDate=${params.endDate}`;
    const { data, isLoading } = useSWR(getUrlJournal + getQuery, fetcher, { fallbackData: params.fallback, keepPreviousData: true });

    return {
        data: data?.data,
        isLoading,
    };
};

// Export All Hooks Journal
export { useHooksJournal };

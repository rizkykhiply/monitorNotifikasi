// Import Modules
import useSWR from 'swr';

// Define Params Transaction
interface ITransactions {
    kodePos: string;
    gate: string;
}

// Define Transaction Data
interface TransactionData extends ITransactions {
    nama_visitor: string;
    nama_karyawan: string;
    divisi: string;
    no_polisi_visitor: string;
    no_polisi_karyawan: string;
    image_visitor: string;
    image_karyawan: string;
    dateIn: string;
    dateOut: string;
}

// Define Hooks Transaction
interface HooksTransaction {
    data: TransactionData[];
    isLoading: boolean;
}

// Define All Transaction Url
const getTransactionUrl = '/api/transaction?';

// Define Custom Fetcher
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Define Hooks Transaction
const useHooksTransaction = (params: ITransactions[]): HooksTransaction => {
    const getKodePos = params.map((value) => value.kodePos).join(',');
    const getGate = params.map((value) => value.gate).join(',');

    const getQuery = `kodePos=${getKodePos}&gate=${getGate}`;
    const { data, isLoading } = useSWR(getTransactionUrl + getQuery, fetcher, { refreshInterval: 3000, keepPreviousData: true });

    return {
        data: data?.data,
        isLoading,
    };
};

// Export All Hooks Transaction
export { useHooksTransaction };

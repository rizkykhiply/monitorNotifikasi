// Import Modules
import useSWR from 'swr';

// Define Session Data
interface SessionData {
    name: string;
    role: string;
    expired: boolean;
}

// Define Hooks Session
interface HooksSession {
    data: SessionData;
    isLoading: boolean;
}

// Define All Session Url
const getUrlSession = '/api/auth/session';

// Define Hooks Session
const useHooksSession = (): HooksSession => {
    const { data, isLoading } = useSWR(getUrlSession);

    return {
        data: {
            ...data?.data,
            expired: data?.statusCode === 401,
        },
        isLoading,
    };
};

// Export All Hooks Session
export { useHooksSession };

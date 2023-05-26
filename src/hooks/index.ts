// Import Modules
import useSWR from 'swr';

// Import Interfaces
import { HooksMenu, PropsHooks } from '@interfaces/hooks';

// Import Url Api
import { getUrlMasterMenu } from './api';

// Define Base Fetcher
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// Define Hooks Menu
const useHooksMenu = (fallback?: PropsHooks): HooksMenu[] => {
    const config = fallback ? { fallbackData: fallback['/api/master/list-menu'] } : {};
    const { data } = useSWR(getUrlMasterMenu, fetcher, config);

    return data?.data;
};

// Export All Hooks
export { useHooksMenu };

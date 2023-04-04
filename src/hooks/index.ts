// Import Modules
import useSWR from 'swr';

// Import Interfaces
import { HooksMasterMenu } from '@interfaces/hooks';

// Import Libs
import { Api } from '@lib/api';

// Import Url Api
import { getUrlMasterMenu } from './api';

// Define Base Fetcher
const fetcher = (url: string) => Api.get(url).then((res) => res.data);

// Define Hooks Master Menu
const useHooksMasterMenu = (): HooksMasterMenu[] => {
    const { data } = useSWR(getUrlMasterMenu, fetcher);
    return data?.data;
};

// Export All Hooks
export { useHooksMasterMenu };

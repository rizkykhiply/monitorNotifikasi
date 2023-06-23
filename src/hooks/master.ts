// Import Modules
import useSWR from 'swr';
import * as Icon from '@mui/icons-material';

// Define Menu List
interface MenuList {
    id: number;
    name: string;
    path: string;
    icon: keyof typeof Icon;
}

// Define Menu Data
interface MenuData {
    menu: MenuList;
    subMenu: MenuList[];
}

// Define Hooks Menu
interface HooksMenu {
    data: MenuData[];
    isLoading: boolean;
}

// Define All Master Url
const getUrlMasterMenu = '/api/master/list-menu';

// Define Hooks Menu
const useHooksMenu = (): HooksMenu => {
    const { data, isLoading } = useSWR(getUrlMasterMenu);

    return {
        data: data?.data,
        isLoading,
    };
};

// Export All Hooks Master
export { useHooksMenu };

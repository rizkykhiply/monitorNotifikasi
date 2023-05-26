// Import Modules
import * as Icon from '@mui/icons-material';

// Define Props Hooks
export interface PropsHooks {
    [fallback: string]: any;
}

// Define Menu Interface
interface Menu {
    id: number;
    name: string;
    path: string;
    icon: keyof typeof Icon;
}

// Define Hooks Menu Interface
export interface HooksMenu {
    menu: Menu;
    subMenu: Menu[];
}

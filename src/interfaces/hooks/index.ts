// Import Modules
import * as Icon from '@mui/icons-material';

// Define Menu Interface
interface Menu {
    id: number;
    name: string;
    path: string;
    icon: keyof typeof Icon;
}

// Define Hooks Master Menu Interface
export interface HooksMasterMenu {
    menu: Menu;
    subMenu: Menu[];
}

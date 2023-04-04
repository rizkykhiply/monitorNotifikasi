// Import Modules
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

// Define Sidebar Menu Interface
interface Menu {
    id: number;
    name: string;
    icon: Icon;
    path: string;
    subMenu?: SubMenu[];
}

// Define Sidebar Icon Type
type Icon = OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
};

// Define Sidebar SubMenu Type
type SubMenu = {
    id: number;
    name: string;
    path: string;
};

// Define Props List Interface
export interface PropsList {
    menu: Menu;
    currRoute: string;
}

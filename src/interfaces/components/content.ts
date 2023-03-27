// Import Modules
import { ReactElement } from 'react';
import * as Icon from '@mui/icons-material';

interface Menu {
    name: string;
    path: string;
    icon: keyof typeof Icon;
}

interface User {
    name: string;
    role: string;
}

export interface StateContent {
    menu: Menu[];
    user: User;
}

export interface PropsContent {
    window?: () => Window;
    children: ReactElement;
}

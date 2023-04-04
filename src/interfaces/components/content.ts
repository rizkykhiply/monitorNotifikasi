// Import Modules
import { ReactElement } from 'react';

// Define Props Content Interface
export interface PropsContent {
    window?: () => Window;
    children: ReactElement;
}

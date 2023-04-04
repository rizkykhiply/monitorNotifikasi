// Import Entities
import { Menu } from '@lib/databases/entities';

// Define Menu List Interface
export interface MenuList {
    menu: Menu;
    subMenu: Menu[];
}

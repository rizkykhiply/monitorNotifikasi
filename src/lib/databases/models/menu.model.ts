// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Entities
import { Menu } from '../entities';

// Define Find All Menu
const findAllMenu = async (): Promise<Menu[]> => {
    return await baseQuery<Menu[]>('SELECT id, name, level, path ,header, icon FROM menu WHERE status = 1 ORDER BY sort ASC', []);
};

// Assign All Query Menu
const exported = {
    findAllMenu,
};

// Export Query Menu
export default exported;

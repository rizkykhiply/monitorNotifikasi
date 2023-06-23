// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { API_OK, API_UNAUTHORIZED } from '@lib/constants';
import { models } from '@lib/databases/models';
import { handlerProtectApi } from '@lib/protect';

// Import Entities
import { Menu } from '@lib/databases/entities';

// Define List menu
interface ListMenu {
    menu: Menu;
    subMenu: Menu[];
}

// Define find All Menu
const findAllMenu = async () => {
    const listMenu: ListMenu[] = [];
    const findMenu = await models.menu.findAllMenu();

    for (let i = 0; i < findMenu.length; i++) {
        const getMenu = findMenu[i];
        const getMenuHeader = findMenu[i].header;

        if (getMenuHeader === 0) {
            listMenu.push({
                menu: getMenu,
                subMenu: [],
            });
        }
        if (getMenuHeader > 0) {
            for (let j = 0; j < listMenu.length; j++) {
                const getMenuId = listMenu[j].menu.id;
                if (getMenuId === getMenuHeader) {
                    listMenu[j].subMenu.push(getMenu);
                }
            }
        }
    }

    return listMenu;
};

// Define Handler Api List Menu
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const getSession = await getLoginSession(req);

    if (!getSession) {
        return API_UNAUTHORIZED(res);
    }

    const getMenu = await findAllMenu();

    return API_OK(res, getMenu);
};

// Export Handler Api List Menu
export default handlerProtectApi(handler, ['GET']);

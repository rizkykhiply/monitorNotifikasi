// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Interfaces
import { MenuList } from '@interfaces/pages/api';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { API_NOT_FOUND, API_OK, API_UNAUTHORIZED } from '@lib/constants';
import { models } from '@lib/databases/models';
import { handlerProtectApi } from '@lib/protect';

// Import Entities
import { Menu } from '@lib/databases/entities';

// Define Mapping Menu
const getMappingMenu = async (menu: Menu[]): Promise<MenuList[]> => {
    const menuList: MenuList[] = [];

    for (let index = 0; index < menu.length; index++) {
        menuList.push({
            menu: menu[index],
            subMenu: [],
        });
    }

    for (let idx = 0; idx < menuList.length; idx++) {
        const menu = menuList[idx].menu;
        const menuLevel = menu.level;
        const menuHeader = menu.header;

        if (menuLevel && menuHeader) {
            for (let ids = 0; ids < menuList.length; ids++) {
                const menuId = menuList[ids].menu.id;
                if (menuId === menuHeader) {
                    menuList[ids].subMenu.push(menu);
                }
            }
        }
    }

    return menuList.filter((v) => v.menu.header === 0);
};

// Define Handler Api List Menu
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const getSession = await getLoginSession(req);

    if (!getSession) {
        return API_UNAUTHORIZED(res);
    }

    const getMenu = await models.menu.findAllMenu();

    if (getMenu.length === 0) {
        return API_NOT_FOUND(res);
    }

    const getListMenu = await getMappingMenu(getMenu);
    return API_OK(res, getListMenu);
};

// Export Handler Api List Menu
export default handlerProtectApi(handler, ['GET']);

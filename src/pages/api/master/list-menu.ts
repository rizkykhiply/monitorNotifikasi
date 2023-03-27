// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { API_NOT_FOUND, API_OK } from '@/lib/constants';
import { models } from '@/lib/databases/models';
import { handlerProtectApi } from '@/lib/protect';

// Define Handler Api List Menu
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const getListMenu = await models.menu.findAllMenu();

    if (getListMenu.length === 0) {
        return API_NOT_FOUND(res);
    }

    return API_OK(res, getListMenu);
};

// Export Handler Api List Menu
export default handlerProtectApi(handler, ['GET']);

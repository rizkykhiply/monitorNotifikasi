// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Configs
import { API_NOT_FOUND, API_OK } from '@/lib/constants';
import { handlerProtectApi } from '@/lib/protect';

// Import Models
import { models } from '@/lib/databases/models';

// Define Handler Api
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    let getUser = await models.user.findAll();
    if (!getUser) {
        return API_NOT_FOUND(res);
    }

    return API_OK(res, getUser);
};

// Export Handler Api
export default handlerProtectApi(handler, ['GET']);

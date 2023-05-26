// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { API_OK, API_UNAUTHORIZED } from '@lib/constants';
import { handlerProtectApi } from '@lib/protect';

// Define Handler Api Session
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const getSession = await getLoginSession(req);

    if (!getSession) {
        return API_UNAUTHORIZED(res);
    }

    return API_OK(res, getSession);
};

// Export Handler Api Session
export default handlerProtectApi(handler, ['GET']);

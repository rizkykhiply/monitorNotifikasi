// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { API_OK } from '@lib/constants';
import { handlerProtectApi } from '@lib/protect';

// Define Handler Api Session
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getLoginSession(req);
    return API_OK(res, session);
};

// Export Handler Api Session
export default handlerProtectApi(handler, ['GET']);

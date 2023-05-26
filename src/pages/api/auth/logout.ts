// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { API_UNAUTHORIZED } from '@lib/constants';
import { removeTokenCookie } from '@lib/auth/cookies';
import { handlerProtectApi } from '@lib/protect';

// Define Handler Api Logout
const logout = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const getSession = await getLoginSession(req);

    if (!getSession) {
        return API_UNAUTHORIZED(res);
    }

    removeTokenCookie(res);
    res.writeHead(302, { Location: '/login' });
    res.end();
};

// Export Handler Api Logout
export default handlerProtectApi(logout, ['GET']);

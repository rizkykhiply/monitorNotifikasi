// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { handlerProtectApi } from '@lib/protect';
import { removeTokenCookie } from '@lib/auth/cookies';

// Define Handler Api Logout
const logout = async (req: NextApiRequest, res: NextApiResponse) => {
    removeTokenCookie(res);
    res.writeHead(302, { Location: '/login' });
    res.end();
};

// Export Handler Api Logout
export default handlerProtectApi(logout, ['GET']);

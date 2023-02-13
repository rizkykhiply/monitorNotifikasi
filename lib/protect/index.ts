// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

// Import Auth
import { getLoginSession } from '../auth/auth';

// Import Constants
import { API_INTERNAL_SERVER_ERROR, API_METHOD_NOT_ALLOWED, API_UNAUTHORIZED, SERVICE_BASE_URL } from '../constants';

// Import Logs
import { logs } from '../logs';

// Define Handler Protect Api
const handlerProtectApi = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>, method: string[]) => {
    return async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        const getUrl = req?.url ? req.url : '';
        const getMethod = req?.method ? req.method : '';
        try {
            await NextCors(req, res, {
                origin: SERVICE_BASE_URL,
            });

            const getSession = await getLoginSession(req);

            if (!getSession) {
                return API_UNAUTHORIZED(res);
            }

            if (!method.includes(getMethod) || getMethod === 'OPTIONS') {
                return API_METHOD_NOT_ALLOWED(res);
            }

            await handler(req, res);
        } catch (error) {
            logs(getUrl).error(error);
            return API_INTERNAL_SERVER_ERROR(res);
        }
    };
};

// Export Handlers
export { handlerProtectApi };

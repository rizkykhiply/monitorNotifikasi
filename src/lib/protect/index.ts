// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';

// Import Constants
import { API_FORBIDDEN, API_INTERNAL_SERVER_ERROR, API_METHOD_NOT_ALLOWED, SERVICE_BASE_URL, SERVICE_PUBLIC_URL } from '../constants';

// Import Logs
import { logs } from '../logs';

// Define Handler Protect Api
const handlerProtectApi = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>, method: string[]) => {
    return async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
        try {
            const getHeaderReferer = new URL(req.headers.referer ? req.headers.referer : '').origin;
            const getMethod = req?.method ? req.method : '';

            if (getHeaderReferer !== SERVICE_PUBLIC_URL) {
                return API_FORBIDDEN(res);
            }

            await NextCors(req, res, {
                origin: SERVICE_BASE_URL,
            });

            const getMethodAllow = method.includes(getMethod);

            if (!getMethodAllow) {
                return API_METHOD_NOT_ALLOWED(res);
            }

            await handler(req, res);
        } catch (error) {
            const getUrl = req.url ? req.url : 'middleware';
            logs(getUrl).error(error);

            return API_INTERNAL_SERVER_ERROR(res, 'Internal Server Error, Please Try Again');
        }
    };
};

// Export Handler Protect Api
export { handlerProtectApi };

// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import nextConnect from 'next-connect';

// Import Libs
import { localStrategy } from '@/lib/auth/strategy';
import { setLoginSession } from '@/lib/auth/auth';
import { API_OK, API_UNAUTHORIZED } from '@/lib/constants';

// Define Request Authentication
const authenticate = (method: string, req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
        passport.authenticate(method, { session: false }, (error, token) => {
            if (error) {
                reject(error);
            } else {
                resolve(token);
            }
        })(req, res);
    });

// Define Strategy Authentication
passport.use(localStrategy);

// Define Handler Api Login
export default nextConnect()
    .use(passport.initialize())
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const user: any = await authenticate('local', req, res);
            const session = { ...user };

            await setLoginSession(res, session);

            return API_OK(res, { done: true });
        } catch (error) {
            if (error instanceof Error) {
                return API_UNAUTHORIZED(res);
            }
        }
    });

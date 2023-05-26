// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import nextConnect from 'next-connect';

// Import Libs
import { localStrategy } from '@lib/auth/strategy';
import { setLoginSession } from '@lib/auth/auth';
import { API_CREATED, API_UNAUTHORIZED, LOGIN_ERROR_MESSAGE } from '@lib/constants';

// Define Request Authentication
const authenticate = (method: string, req: NextApiRequest, res: NextApiResponse): Promise<unknown> =>
    new Promise((resolve, reject) => {
        passport.authenticate(method, { session: false }, (error: unknown, token: unknown) => {
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
            const getUser: any = await authenticate('local', req, res);
            const getSession = { ...getUser };

            await setLoginSession(res, getSession);

            return API_CREATED(res);
        } catch (error) {
            return API_UNAUTHORIZED(res, LOGIN_ERROR_MESSAGE);
        }
    });

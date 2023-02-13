// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';
import passport from 'passport';
import nextConnect from 'next-connect';

// Import Auth
import { localStrategy } from '@/lib/auth/strategy';
import { setLoginSession } from '@/lib/auth/auth';

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

passport.use(localStrategy);

export default nextConnect()
    .use(passport.initialize())
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const user: any = await authenticate('local', req, res);
            const session = { ...user };

            await setLoginSession(res, session);

            res.status(200).send({ done: true });
        } catch (error) {
            if (error instanceof Error) {
                res.status(401).send(error.message);
            }
        }
    });

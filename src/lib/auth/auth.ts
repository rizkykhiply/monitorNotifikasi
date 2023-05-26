// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';
import Iron from '@hapi/iron';

// Import Constants
import { SERVICE_TOKEN_MAX_AGE, SERVICE_TOKEN_SECRET } from '../constants';

// Import Cookies
import { getTokenCookie, setTokenCookie } from './cookies';

// Import Models
import { models } from '@lib/databases/models';
import { User } from '@lib/databases/entities';

// Define Get Login Session
const getLoginSession = async (req: NextApiRequest): Promise<User | undefined> => {
    const getToken = getTokenCookie(req);

    if (!getToken) return;

    const getCurrentDate = Date.now();
    const getSession = await Iron.unseal(getToken, SERVICE_TOKEN_SECRET, Iron.defaults);
    const getExpired = getSession.createdAt + getSession.maxAge * 1000;

    if (getCurrentDate > getExpired) {
        throw new Error('session expired');
    }

    return getSession;
};

// Define Set Login Session
const setLoginSession = async (res: NextApiResponse, session: User): Promise<void> => {
    const setPayload = {
        id: session.id,
        username: session.username,
        role: session.role,
        name: session.name,
        createdAt: Date.now(),
        maxAge: SERVICE_TOKEN_MAX_AGE,
    };
    const setToken = await Iron.seal(setPayload, SERVICE_TOKEN_SECRET, Iron.defaults);
    await models.user.updateUserLogin({ username: session.username });

    setTokenCookie(res, setToken);
};

// Export Sessions
export { getLoginSession, setLoginSession };

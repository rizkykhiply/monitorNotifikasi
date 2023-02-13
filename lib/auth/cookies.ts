// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';
import { serialize, parse } from 'cookie';

// Import Constants
import { SERVICE_NODE_ENV, SERVICE_TOKEN_MAX_AGE, SERVICE_TOKEN_NAME } from '../constants';

// Define Get Token Cookie
const getTokenCookie = (req: NextApiRequest): string | undefined => {
    return parseTokenCookie(req)[SERVICE_TOKEN_NAME];
};

// Define Set Token Cookie
const setTokenCookie = (res: NextApiResponse, token: string): void => {
    const cookie = serialize(SERVICE_TOKEN_NAME, token, {
        maxAge: SERVICE_TOKEN_MAX_AGE,
        expires: new Date(Date.now() + SERVICE_TOKEN_MAX_AGE * 1000),
        httpOnly: true,
        secure: SERVICE_NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
    });

    res.setHeader('Set-Cookie', cookie);
};

// Define Remove Token Cookie
const removeTokenCookie = (res: NextApiResponse): void => {
    const cookie = serialize(SERVICE_TOKEN_NAME, '', {
        maxAge: -1,
        path: '/',
    });

    res.setHeader('Set-Cookie', cookie);
};

// Define Parse Token Cookie
const parseTokenCookie = (
    req: NextApiRequest,
): Partial<{
    [key: string]: string;
}> => {
    let getCookies = req?.cookies;
    if (getCookies) {
        return getCookies;
    }

    const getCookie = req.headers?.cookie || '';
    return parse(getCookie);
};

// Export Cookies
export { getTokenCookie, setTokenCookie, removeTokenCookie };

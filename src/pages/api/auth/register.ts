// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { API_BAD_REQUEST, API_CREATED, REGISTER_ERROR_MESSAGE, REGISTER_SUCCESS_MESSAGE } from '@lib/constants';
import { models } from '@lib/databases/models';
import { validateHash, validateUpperCase } from '@lib/utils/helper';
import { handlerProtectApi } from '@lib/protect';

// Define Handler Api Session
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const getBody = req.body;

    const getName: string = validateUpperCase(getBody.name);
    const getUsername: string = getBody.username.toLowerCase();
    const getEmail: string = getBody.email.toLowerCase();

    const getUser = await models.user.fineOneUserLogin({ username: getUsername });

    if (getUser) {
        return API_BAD_REQUEST(res, ['username'], REGISTER_ERROR_MESSAGE);
    }

    const getPassword = getBody.password;
    const getHashPassword = await validateHash(getPassword);

    await models.user.createUser({ name: getName, username: getUsername, email: getEmail, password: getHashPassword });

    return API_CREATED(res, REGISTER_SUCCESS_MESSAGE);
};

// Export Handler Api Session
export default handlerProtectApi(handler, ['POST']);

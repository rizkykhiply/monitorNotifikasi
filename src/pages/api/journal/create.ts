// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { API_CREATED, API_UNAUTHORIZED, BASE_SAVED_MESSAGE } from '@lib/constants';
import { models } from '@lib/databases/models';
import { validateRandomChar, validateTime } from '@lib/utils/helper';
import { handlerProtectApi } from '@lib/protect';

// Define Handler Api Session
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const getSession = await getLoginSession(req);

    if (!getSession) {
        return API_UNAUTHORIZED(res);
    }

    const getBody = req.body;
    const getAccountId: number = +getBody.accountId;
    const getDate: string = getBody.date;
    const getTrxNo = `JOURNAL-${validateRandomChar(8, 'alphanumeric')}-${validateTime(new Date(), 'date-time-3')}`;
    const getTotalAmount: number = +getBody.totalAmount;
    const getTrxType: number = +getBody.trxType;
    const getUserId = getSession.id;

    await models.trxJurnalHead.createTrxHead({
        accountId: getAccountId,
        date: getDate,
        trxNo: getTrxNo,
        totalAmount: getTotalAmount,
        trxType: getTrxType,
        createdBy: getUserId,
    });

    return API_CREATED(res, BASE_SAVED_MESSAGE);
};

// Export Handler Api Session
export default handlerProtectApi(handler, ['POST']);

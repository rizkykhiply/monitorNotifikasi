// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { handlerProtectApi } from '@lib/protect';
import { models } from '@lib/databases/models';
import { API_OK } from '@lib/constants';

// Define Handler Transaction Api
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const getKodePos = req.query.kodePos as string;
    const getGate = req.query.gate as string;

    let getTransaction = '';

    if (getGate === 'in') {
        getTransaction = await models.transaction.findAllTransactionIn(getKodePos);
    } else {
        getTransaction = await models.transaction.findAllTransactionOut(getKodePos);
    }

    return API_OK(res, getTransaction);
};

// Export Handler Transaction Api
export default handlerProtectApi(handler, ['GET']);

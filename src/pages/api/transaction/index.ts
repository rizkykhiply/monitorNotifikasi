// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { handlerProtectApi } from '@lib/protect';
import { models } from '@lib/databases/models';
import { API_OK, SERVICE_KODEPOS } from '@lib/constants';

// Define Handler Transaction Api
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Transaction In
    const getTransactionIn = await models.transaction.findAllTransactionIn(SERVICE_KODEPOS);

    // Transaction Out
    const getTransactionOut = await models.transaction.findAllTransactionOut(SERVICE_KODEPOS);

    return API_OK(res, getTransactionIn);
};

// Export Handler Transaction Api
export default handlerProtectApi(handler, ['GET']);

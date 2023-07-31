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

    const arrKodePos = getKodePos.split(',');
    const arrGate = getGate.split(',');

    const getTransaction = [];

    for (let index = 0; index < arrKodePos.length; index++) {
        const kodePos = arrKodePos[index].toUpperCase();
        const gate = arrGate[index].toLowerCase();

        let getData = {};

        if (gate === 'in') {
            getData = await models.transaction.findOneTransactionIn(kodePos);
        } else {
            getData = await models.transaction.findOneTransactionOut(kodePos);
        }

        getTransaction.push({ ...getData, gate, kodePos });
    }

    return API_OK(res, getTransaction);
};

// Export Handler Transaction Api
export default handlerProtectApi(handler, ['GET']);

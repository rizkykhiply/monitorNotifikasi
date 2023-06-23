// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Interfaces
import { IPagination } from '@lib/utils/interfaces/helper.interface';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { API_OK, API_UNAUTHORIZED } from '@lib/constants';
import { models } from '@lib/databases/models';
import { handlerProtectApi } from '@lib/protect';
import { validatePagination } from '@lib/utils/helper';

const findAllJournal = async (params: IPagination) => {
    const getCount = await models.trxJurnalHead.countTrxHead(params);
    const getPagination = validatePagination({ ...params, count: getCount });
    const getJournal = await models.trxJurnalHead.findAllTrxHead(getPagination);

    return {
        currentPage: getPagination.currentPage,
        countPage: getPagination.countPage,
        totalPage: getPagination.totalPage,
        data: getJournal,
    };
};

// Define Handler Api Session
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const getSession = await getLoginSession(req);

    if (!getSession) {
        return API_UNAUTHORIZED(res);
    }

    const getQuery = {
        currentPage: req.query.currentPage || 10,
        limit: req.query.limit || 10,
        sort: req.query.sort || 'ASC',
        search: req.query.search || '',
        startDate: req.query.startDate || '',
        endDate: req.query.endDate || '',
    } as IPagination;

    const getJournal = await findAllJournal(getQuery);

    return API_OK(res, getJournal);
};

// Export Handler Api Session
export default handlerProtectApi(handler, ['GET']);

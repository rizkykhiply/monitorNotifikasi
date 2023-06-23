// Import Modules
import { NextApiRequest, NextApiResponse } from 'next';

// Import Libs
import { getLoginSession } from '@lib/auth/auth';
import { API_CREATED, API_UNAUTHORIZED, BASE_CREATED_MESSAGE } from '@lib/constants';
import { models } from '@lib/databases/models';
import { handlerProtectApi } from '@lib/protect';

// Define Handler Api Session
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const getSession = await getLoginSession(req);

        if (!getSession) {
            return API_UNAUTHORIZED(res);
        }

        const getBody = req.body;
        const getDate = getBody.date;
        const getTrxNo = getBody.transactionNo;
        const getCurrencyId = +getBody.currencyId;
        const getAccountIdHead = +getBody.accountIdHead;
        const getTrxTypeHead = +getBody.trxTypeHead;
        const getDescHead = getBody.descriptionHead;
        const getKursHead = +getBody.kursHead;
        const getAmountHead = +getBody.amountHead;
        const getTransactionsDet = getBody.transactionsDet;
        const getNotes = getBody.notes;
        const getTotalAmount = +getBody.totalAmount;
        const getUserId = getSession.id;

        await models.baseModel.startTransaction();
        const createTrx = await models.trxJurnalHead.createTrxHead({
            date: getDate,
            trxNo: getTrxNo,
            currencyId: getCurrencyId,
            accountId: getAccountIdHead,
            trxType: getTrxTypeHead,
            description: getDescHead,
            kurs: getKursHead,
            amount: getAmountHead,
            totalAmount: getTotalAmount,
            notes: getNotes,
            createdBy: getUserId,
        });

        const getTrxId = createTrx?.[0].id;

        for (let index = 0; index < getTransactionsDet.length; index++) {
            const getAccountIdDet = +getTransactionsDet[index].accountIdDet;
            const getTrxTypeDet = +getTransactionsDet[index].trxTypeDet;
            const getDescDet = getTransactionsDet[index].descriptionDet;
            const getKursDet = +getTransactionsDet[index].kursDet;
            const getAmountDet = +getTransactionsDet[index].amountDet;

            await models.trxJurnalDet.createTrxDet({
                trxJurnalHeadId: getTrxId,
                accountId: getAccountIdDet,
                trxType: getTrxTypeDet,
                description: getDescDet,
                kurs: getKursDet,
                amount: getAmountDet,
                createdBy: getUserId,
            });
        }

        await models.baseModel.commitTransaction();
        return API_CREATED(res, BASE_CREATED_MESSAGE);
    } catch (error) {
        await models.baseModel.rollbackTransaction();
        throw error;
    }
};

// Export Handler Api Session
export default handlerProtectApi(handler, ['POST']);

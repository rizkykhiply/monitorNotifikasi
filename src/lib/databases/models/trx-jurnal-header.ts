// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Interfaces
import { CreateTrxHead } from '@interfaces/lib/models';

// Import Entities

// Define Create Trx Head
const createTrxHead = async (params: CreateTrxHead): Promise<unknown> => {
    return await baseQuery(
        'INSERT INTO trx_jurnal_header (account_id, date, trx_no, total_amount, trx_type, created_by) VALUES ($1, $2, $3, $4, $5, $6)',
        [params.accountId, params.date, params.trxNo, params.totalAmount, params.trxType, params.createdBy],
    );
};

// Assign All Query Trx Jurnal
const exported = {
    createTrxHead,
};

// Export Query Trx Jurnal
export default exported;

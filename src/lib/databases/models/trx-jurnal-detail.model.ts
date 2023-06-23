// Import Modules
import { QueryResultRow } from 'pg';

// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Interfaces
import { CreateTrxDet } from '@lib/databases/models/interfaces';

// Define Create Trx Det
const createTrxDet = async (params: CreateTrxDet): Promise<QueryResultRow> => {
    return await baseQuery(
        'INSERT INTO trx_jurnal_detail (trx_jurnal_header_id, account_id, trx_type, description, kurs, amount, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7)',
        [params.trxJurnalHeadId, params.accountId, params.trxType, params.description, params.kurs, params.amount, params.createdBy],
    );
};

// Assign All Query Trx Jurnal
const exported = {
    createTrxDet,
};

// Export Query Trx Jurnal
export default exported;

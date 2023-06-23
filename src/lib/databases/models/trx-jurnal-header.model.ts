// Import Modules
import { QueryResultRow } from 'pg';

// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Interfaces
import { IPagination } from '@lib/utils/interfaces/helper.interface';
import { CreateTrxHead } from '@lib/databases/models/interfaces';

// Import Entities
import { TrxJurnalHeader } from '../entities/trx-jurnal-header.entity';
import { validatePaginationFilter } from '@lib/utils/helper';

const findAllTrxHead = async (params: IPagination): Promise<TrxJurnalHeader[]> => {
    const { pagination, sort, search, endDate, startDate } = params;

    const getFilter = validatePaginationFilter({
        startDate: startDate,
        endDate: endDate,
        column: 'tjh.date',
    });

    const getQuery = `
        SELECT tjh.id, TO_CHAR(tjh.date, 'YYYY-MM-DD') as date, tjh.trx_no, ma.account, ma.description as account_name, mg.description as group, tjh.total_amount, u.name as created_by 
        FROM trx_jurnal_header as tjh
            JOIN trx_jurnal_detail as tjd ON(tjh.id = tjd.trx_jurnal_header_id)
            JOIN master_account as ma ON(ma.id = tjh.account_id)
            JOIN master_group as mg ON(mg.id = ma.group_id)
            LEFT JOIN users as u ON(u.id = tjh.created_by)
        WHERE
            tjh.status = 1 AND tjh.is_deleted = 0 AND
            ma.description ILIKE '%${search}%' ${getFilter}
        GROUP BY 
            tjh.id, ma.account, ma.description, mg.description, u.name
        ORDER BY 
            tjh.date ${sort}
        ${pagination}
    `;

    return await baseQuery(getQuery, []);
};

const countTrxHead = async (params: IPagination): Promise<number> => {
    const { search, startDate, endDate } = params;

    const getFilter = validatePaginationFilter({
        startDate: startDate,
        endDate: endDate,
        column: 'tjh.date',
    });

    const getQuery = `
        SELECT COUNT(1) as count FROM trx_jurnal_header as tjh, master_account as ma 
        WHERE 
            tjh.account_id = ma.id AND tjh.status = 1 AND tjh.is_deleted = 0 AND ma.description ILIKE '%${search}%' ${getFilter}
    `;
    const [getCount] = await baseQuery(getQuery, []);

    return +getCount.count;
};

// Define Create Trx Head
const createTrxHead = async (params: CreateTrxHead): Promise<QueryResultRow> => {
    const getQuery = `
        INSERT INTO trx_jurnal_header (date, trx_no, currency_id, account_id, trx_type, description, kurs, amount, total_amount, notes, created_by)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING id
    `;

    return await baseQuery(getQuery, [
        params.date,
        params.trxNo,
        params.currencyId,
        params.accountId,
        params.trxType,
        params.description,
        params.kurs,
        params.amount,
        params.totalAmount,
        params.notes,
        params.createdBy,
    ]);
};

// Assign All Query Trx Jurnal
const exported = {
    findAllTrxHead,
    countTrxHead,
    createTrxHead,
};

// Export Query Trx Jurnal
export default exported;

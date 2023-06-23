// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Entities
import { MasterCurrency } from '../entities';

// Define Find All Master Currency
const findAllMasterCurrency = async (): Promise<MasterCurrency[]> => {
    const getQuery = `
        SELECT id, CONCAT(currency_name, CONCAT('(', currency_format, ')')) as name, currency_format FROM master_currency WHERE status = 1
    `;

    return await baseQuery<MasterCurrency[]>(getQuery, []);
};

// Assign All Query Master Currency
const exported = {
    findAllMasterCurrency,
};

// Export Query Master Currency
export default exported;

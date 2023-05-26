// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Entities
import { MasterAccount } from '../entities';

// Define Find All Master Account
const findAllMasterAccount = async (): Promise<MasterAccount[]> => {
    return await baseQuery<MasterAccount[]>('SELECT id, account FROM master_account WHERE status = 1', []);
};

// Assign All Query Master Account
const exported = {
    findAllMasterAccount,
};

// Export Query Master Account
export default exported;

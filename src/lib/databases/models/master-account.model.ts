// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Interfaces
import { FindOneMasterAccount } from '@lib/databases/models/interfaces';

// Import Entities
import { MasterAccount } from '../entities';

// Define Find One Master Account
const findOneMasterAccount = async (params: FindOneMasterAccount): Promise<MasterAccount> => {
    const [result] = await baseQuery<MasterAccount>('SELECT account FROM master_account WHERE id = $1 AND status = 1', [params.id]);
    return result;
};

// Define Find All Master Account
const findAllMasterAccount = async (): Promise<MasterAccount[]> => {
    return await baseQuery<MasterAccount[]>(
        "SELECT id, CONCAT(account, ' - ', description) as account FROM master_account WHERE status = 1",
        [],
    );
};

// Assign All Query Master Account
const exported = {
    findOneMasterAccount,
    findAllMasterAccount,
};

// Export Query Master Account
export default exported;

// Import Base Query
import { baseQuery } from '@lib/databases';

// Define Start Transaction
const startTransaction = async () => {
    return await baseQuery('START TRANSACTION', []);
};

// Define Commit Transaction
const commitTransaction = async () => {
    return await baseQuery('COMMIT', []);
};

// Define Rollback Transaction
const rollbackTransaction = async () => {
    return await baseQuery('ROLLBACK', []);
};

// Assign All Query Base Model
const exported = {
    startTransaction,
    commitTransaction,
    rollbackTransaction,
};

// Export Query Base Model
export default exported;

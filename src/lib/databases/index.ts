// Import Modules
import { createPool } from 'mysql2';

// Import Constants
import {
    SERVICE_DATABASE_HOST,
    SERVICE_DATABASE_NAME,
    SERVICE_DATABASE_PASS,
    SERVICE_DATABASE_PORT,
    SERVICE_DATABASE_USER,
} from '../constants';

// Define Database
const database = createPool({
    host: SERVICE_DATABASE_HOST,
    port: SERVICE_DATABASE_PORT,
    user: SERVICE_DATABASE_USER,
    password: SERVICE_DATABASE_PASS,
    database: SERVICE_DATABASE_NAME,
    enableKeepAlive: true,
    waitForConnections: true,
});

// Define Base Query
const baseQuery = async (query: string, params: (string | number)[]): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            database.query(query, params, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        } catch (error) {
            reject(error);
        }
    });
};

// Export Query
export { baseQuery };

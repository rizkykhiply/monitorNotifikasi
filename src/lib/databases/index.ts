// Import Modules
import { Pool } from 'pg';

// Import Constants
import {
    SERVICE_DATABASE_HOST,
    SERVICE_DATABASE_NAME,
    SERVICE_DATABASE_PASS,
    SERVICE_DATABASE_PORT,
    SERVICE_DATABASE_USER,
} from '../constants';

// Define Database
const database = new Pool({
    host: SERVICE_DATABASE_HOST,
    port: SERVICE_DATABASE_PORT,
    user: SERVICE_DATABASE_USER,
    password: SERVICE_DATABASE_PASS,
    database: SERVICE_DATABASE_NAME,
});

// Define Base Query
const baseQuery = async <T>(query: string, params: (string | number)[]): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await database.connect();
            const result = await connection.query<T[] & T>(query, params);
            connection.release();
            resolve(result.rows);
        } catch (error) {
            reject(error);
        }
    });
};

// Export Query
export { baseQuery };

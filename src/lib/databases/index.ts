// Import Modules
import mysql from 'serverless-mysql';

// Import Constants
import {
    SERVICE_DATABASE_HOST,
    SERVICE_DATABASE_NAME,
    SERVICE_DATABASE_PASS,
    SERVICE_DATABASE_PORT,
    SERVICE_DATABASE_USER,
} from '../constants';

// Define Database
const database = mysql({
    config: {
        host: SERVICE_DATABASE_HOST,
        port: SERVICE_DATABASE_PORT,
        user: SERVICE_DATABASE_USER,
        password: SERVICE_DATABASE_PASS,
        database: SERVICE_DATABASE_NAME,
    },
    library: require('mysql2'),
});

// Define Base Query
const baseQuery = async <T>(query: string, params: (string | number)[]): Promise<T[] & T> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await database.query<T[] & T>(query, params);
            await database.end();
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
};

// Export Query
export { baseQuery };

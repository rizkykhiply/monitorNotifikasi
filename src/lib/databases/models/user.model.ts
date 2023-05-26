// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Interfaces
import { CreateUser, FindOneUser, FindOneUserAccess, UpdateUserLogin } from '@interfaces/lib/models';

// Import Entities
import { User } from '../entities';

// Define Query Find One User Access
const findOneUserAccess = async (params: FindOneUserAccess): Promise<User> => {
    const getQuery = `
        SELECT u.id, u.username, u.password, u.name, a.role FROM users as u 
            JOIN access as a ON(u.access_id = a.id) 
        WHERE u.username = $1 AND u.status = 1`;

    const [result] = await baseQuery<User>(getQuery, [params.username]);
    return result;
};

// Define Query Find One User
const fineOneUserLogin = async (params: FindOneUser): Promise<User> => {
    const [result] = await baseQuery<User>('SELECT username, email FROM users WHERE username = $1', [params.username]);
    return result;
};

// Define Query Create User
const createUser = async (params: CreateUser): Promise<unknown> => {
    return await baseQuery('INSERT INTO users (access_id, name, username, email, password) VALUES (1, $1, $2, $3, $4)', [
        params.name,
        params.username,
        params.email,
        params.password,
    ]);
};

const updateUserLogin = async (params: UpdateUserLogin): Promise<unknown> => {
    return await baseQuery('UPDATE users SET login_at = NOW() WHERE username = $1', [params.username]);
};

// Assign All Query User
const exported = {
    findOneUserAccess,
    fineOneUserLogin,
    createUser,
    updateUserLogin,
};

// Export Query Auth User
export default exported;

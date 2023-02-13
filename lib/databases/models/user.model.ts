// Import Base Query
import { baseQuery } from '@/lib/databases';

// Import Entities
import { User } from '../entities';

// Define Query Create User
const create = async (name: string, email: string, pass: string): Promise<User> => {
    return await baseQuery<User>('INSERT INTO users (name, email, pass) VALUES (?, ?, ?)', [name, email, pass]);
};

// Define Query Find One User
const findOne = async (username: string): Promise<User> => {
    const [findUser] = await baseQuery<User>('SELECT * FROM users WHERE username = ? AND status = 1', [username]);
    return findUser;
};

// Define Query Find All User
const findAll = async (): Promise<User[]> => {
    return await baseQuery<User[]>('SELECT * FROM users', []);
};

// Define Query Update User
const update = async (name: string, id: number): Promise<User> => {
    return await baseQuery<User>('UPDATE users SET name = ? where id = ?', [name, id]);
};

// Define Query Delete User
const deleted = async (id: number): Promise<User> => {
    return await baseQuery<User>('DELETE FROM users WHERE id = ?', [id]);
};

// Assign All Query Users
const exported = {
    create,
    findOne,
    findAll,
    update,
    deleted,
};

// Export Query Users
export default exported;

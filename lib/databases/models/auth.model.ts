// Import Base Query
import { baseQuery } from '@/lib/databases';

// Import Entities
import { User } from '../entities';

const findOne = async (username: string): Promise<User> => {
    const getQuery = `
        SELECT u.username, u.password, u.name, a.role FROM users as u 
            JOIN access as a ON(u.access_id = a.id) 
        WHERE u.username = ? AND u.status = 1`;

    const [findOneUser] = await baseQuery<User>(getQuery, [username]);
    return findOneUser;
};

// Assign All Query Auth
const exported = {
    findOne,
};

export default exported;

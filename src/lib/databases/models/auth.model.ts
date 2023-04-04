// Import Base Query
import { baseQuery } from '@lib/databases';

// Import Interfaces
import { AuthFindOneByUsername } from '@interfaces/models';

// Import Entities
import { User } from '../entities';

// Define Query Find One Auth User
const findOneByUsername = async (params: AuthFindOneByUsername): Promise<User> => {
    const getQuery = `
        SELECT u.username, u.password, u.name, a.role FROM users as u 
            JOIN access as a ON(u.access_id = a.id) 
        WHERE u.username = ? AND u.status = 1`;

    const [findOneUser] = await baseQuery<User>(getQuery, [params.username]);
    return findOneUser;
};

// Assign All Query Auth User
const exported = {
    findOneByUsername,
};

// Export Query Auth User
export default exported;

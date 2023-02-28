// Import Modules
import { NextApiResponse } from 'next';

// Define Constants Exceptions Variables
const API_OK = <T>(res: NextApiResponse, data: T) => res.status(200).json({ statusCode: 200, data });
const API_CREATED = (res: NextApiResponse) => res.status(201).json({ statusCode: 201, message: 'Created' });
const API_BAD_REQUEST = (res: NextApiResponse) => res.status(400).json({ statusCode: 400, message: 'Bad Request' });
const API_UNAUTHORIZED = (res: NextApiResponse) => res.status(401).json({ statusCode: 401, message: 'Unauthorized' });
const API_FORBIDDEN = (res: NextApiResponse) => res.status(403).json({ statusCode: 403, message: 'Forbidden' });
const API_NOT_FOUND = (res: NextApiResponse) => res.status(404).json({ statusCode: 404, message: 'Not Found' });
const API_METHOD_NOT_ALLOWED = (res: NextApiResponse) => res.status(405).json({ statusCode: 405, message: 'Method Not Allowed' });
const API_INTERNAL_SERVER_ERROR = (res: NextApiResponse) => res.status(500).json({ statusCode: 500, message: 'Internal Server Error' });

// Export Variables
export {
    API_OK,
    API_CREATED,
    API_BAD_REQUEST,
    API_UNAUTHORIZED,
    API_FORBIDDEN,
    API_NOT_FOUND,
    API_METHOD_NOT_ALLOWED,
    API_INTERNAL_SERVER_ERROR,
};

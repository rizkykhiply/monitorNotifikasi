// Import Modules
import { NextApiResponse } from 'next';

// Define Constants Exceptions Variables
const API_OK = <T>(res: NextApiResponse, data: T) => res.status(200).json({ statusCode: 200, message: 'Success', data });
const API_CREATED = (res: NextApiResponse, message?: string) =>
    res.status(201).json({ statusCode: 201, message: 'Created', detail: message || '' });
const API_BAD_REQUEST = (res: NextApiResponse, params: string[], message?: string) =>
    res.status(400).json({ statusCode: 400, message: 'Bad Request', params: params, detail: message || '' });
const API_UNAUTHORIZED = (res: NextApiResponse, message?: string) =>
    res.status(401).json({ statusCode: 401, message: 'Unauthorized', detail: message || '' });
const API_FORBIDDEN = (res: NextApiResponse, message?: string) =>
    res.status(403).json({ statusCode: 403, message: 'Forbidden', detail: message || '' });
const API_NOT_FOUND = (res: NextApiResponse, params: string[], message?: string) =>
    res.status(404).json({ statusCode: 404, message: 'Not Found', params: params, detail: message || '' });
const API_METHOD_NOT_ALLOWED = (res: NextApiResponse, message?: string) =>
    res.status(405).json({ statusCode: 405, message: 'Method Not Allowed', detail: message || '' });
const API_INTERNAL_SERVER_ERROR = (res: NextApiResponse, message?: string) =>
    res.status(500).json({ statusCode: 500, message: 'Internal Server Error', detail: message || '' });

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

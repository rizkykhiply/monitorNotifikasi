// Define Constants Service Variables
const SERVICE_NODE_ENV = process.env.NODE_ENV;
const SERVICE_NAME = process.env.SERVICE_NAME;
const SERVICE_BASE_URL = process.env.SERVICE_BASE_URL;
const SERVICE_PUBLIC_URL = process.env.SERVICE_PUBLIC_URL;
const SERVICE_KODEPOS = process.env.SERVICE_KODEPOS || '';

// Define Constants Service DB Variables
const SERVICE_DATABASE_HOST = process.env.SERVICE_DATABASE_HOST;
const SERVICE_DATABASE_PORT = Number(process.env.SERVICE_DATABASE_PORT);
const SERVICE_DATABASE_USER = process.env.SERVICE_DATABASE_USER;
const SERVICE_DATABASE_PASS = process.env.SERVICE_DATABASE_PASS;
const SERVICE_DATABASE_NAME = process.env.SERVICE_DATABASE_NAME;

// Define Constants Service Crypto Variables
const SERVICE_CRYPTO_ALGORITHM = process.env.SERVICE_CRYPTO_ALGORITHM || '';
const SERVICE_CRYPTO_SECRET_KEY = process.env.SERVICE_CRYPTO_SECRET_KEY || '';

// Export Variables
export {
    SERVICE_NODE_ENV,
    SERVICE_NAME,
    SERVICE_BASE_URL,
    SERVICE_PUBLIC_URL,
    SERVICE_KODEPOS,
    SERVICE_DATABASE_HOST,
    SERVICE_DATABASE_PORT,
    SERVICE_DATABASE_USER,
    SERVICE_DATABASE_PASS,
    SERVICE_DATABASE_NAME,
    SERVICE_CRYPTO_ALGORITHM,
    SERVICE_CRYPTO_SECRET_KEY,
};

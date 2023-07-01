// Define Constants Service Variables
const SERVICE_NODE_ENV = process.env.NODE_ENV;
const SERVICE_NAME = process.env.SERVICE_NAME;
const SERVICE_BASE_URL = process.env.SERVICE_BASE_URL;
const SERVICE_PUBLIC_URL = process.env.SERVICE_PUBLIC_URL;

// Define Constants Service Crypto Variables
const SERVICE_CRYPTO_ALGORITHM = process.env.SERVICE_CRYPTO_ALGORITHM || '';
const SERVICE_CRYPTO_SECRET_KEY = process.env.SERVICE_CRYPTO_SECRET_KEY || '';

// Export Variables
export { SERVICE_NODE_ENV, SERVICE_NAME, SERVICE_BASE_URL, SERVICE_PUBLIC_URL, SERVICE_CRYPTO_ALGORITHM, SERVICE_CRYPTO_SECRET_KEY };

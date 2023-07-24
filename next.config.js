/** @type {import('next').NextConfig} */

// Define Security Headers
const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
    },
];

// Define Next Config
const nextConfig = {
    reactStrictMode: true,
    devIndicators: {
        buildActivity: false,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/monitoring/1',
                permanent: false,
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: securityHeaders,
            },
        ];
    },
};

module.exports = nextConfig;

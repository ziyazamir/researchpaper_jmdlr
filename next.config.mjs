/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;

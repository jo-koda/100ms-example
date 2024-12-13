import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en',
                permanent: true,
            },
        ]
    },
      
    reactStrictMode: true,
    experimental: {
      turboMode: false,
    },
};

export default withNextIntl(nextConfig);    
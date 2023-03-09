/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['reqres.in'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'reqres.in',
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['default', 'en', 'bn'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'unispaces.sgp1.digitaloceanspaces.com',
      },
    ],
  },
};

module.exports = nextConfig;

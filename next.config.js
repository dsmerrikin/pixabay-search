/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        port: '',
      },

    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desactiva Turbopack completamente
  experimental: {
    turbo: false,
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;

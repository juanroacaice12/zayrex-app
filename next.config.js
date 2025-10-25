/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // Desactiva Turbopack por completo
  },
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    return config;
  },
  experimental: {
    turbo: false, // Desactiva Turbopack completamente
  },
  output: 'standalone', // 🧠 Hace que Render ejecute correctamente Next
};

module.exports = nextConfig;

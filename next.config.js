/** @type {import('next').NextConfig} */
const nextConfig = {
  // Desactiva Turbopack forzando a usar Webpack clásico
  webpack: (config) => {
    return config;
  },
  experimental: {
    turboMode: false, // 👈 Esta es la clave correcta en Next.js 16
  },
};

module.exports = nextConfig;

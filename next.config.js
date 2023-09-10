/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
    remotePatterns: [{
      hostname: 'pnghd.pics',
      protocol: 'https',
    }],
    unoptimized: true,
  },
  env: {
    RUNTIME_MODE: process.env.RUNTIME_MODE || 'experimental-edge',
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    // GOOGLE_ID: process.env.GOOGLE_ID || 'google-id',
    // GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'google-secret',
  },
}

module.exports = nextConfig

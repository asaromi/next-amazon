/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
    remotePatterns: [{
      hostname: 'pnghd.pics',
      protocol: 'https',
    }],
  },
  env: {
    RUNTIME_MODE: process.env.RUNTIME_MODE,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    GOOGLE_ID: process.env.GOOGLE_ID || 'google-id',
    GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'google-secret',
    SECRET: process.env.SECRET || undefined,
  },
}

module.exports = nextConfig

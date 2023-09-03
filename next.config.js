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
    RUNTIME: process.env.RUNTIME || 'edge',
  }
}

module.exports = nextConfig

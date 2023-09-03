/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com'],
    remotePatterns: [{
      hostname: 'pnghd.pics',
      protocol: 'https',
    }]
  },
}

module.exports = nextConfig

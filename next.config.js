/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'fakestoreapi.com', 'res.cloudinary.com'],
    remotePatterns: [{
      hostname: 'pnghd.pics',
      protocol: 'https',
    }],
    loader: 'custom',
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000/api',
    SECRET: process.env.SECRET || undefined,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY || 'stripe-public-key',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'stripe-secret-key',
    STRIPE_SHIPPING_RATE: process.env.STRIPE_SHIPPING_RATE || 'stripe-shipping-rate',
    BASE_URL: process.env.HOST || 'http://localhost:3000',
    FIREBASE_CONFIG: {
      apiKey: process.env.FIREBASE_API_KEY || null,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN || null,
      projectId: process.env.FIREBASE_PROJECT_ID || null,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET || null,
      messagingSenderId: process.env.FIREBASE_MESSAGING_ID || null,
      appId: process.env.FIREBASE_APP_ID || null,
    },
  },
  output: 'export',
  transpilePackages: ["next-image-export-optimizer"]
}

module.exports = nextConfig

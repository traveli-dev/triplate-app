const withPWA = require('next-pwa')({ dest: 'public' })

const isDev = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  webpack: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300
    }
    return config
  },
  // signInWithRedirectを動かす
  rewrites: async () => [
    {
      source: '/__/auth/:path*',
      destination: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com/__/auth/:path*`,
    }
  ],
  images: {
    domains: [isDev ? 'localhost' : 'firebasestorage.googleapis.com', 'lh3.googleusercontent.com']
  }
}

module.exports = process.env.NODE_ENV === 'development' ? nextConfig : withPWA(nextConfig)

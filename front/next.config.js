const path = require('path')
const withPWA = require('next-pwa')({ dest: 'public' })


/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: false,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')]
  },
  webpack: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300
    }
    return config
  }
})

module.exports = nextConfig

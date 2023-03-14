const path = require('path')
const withPWA = require('next-pwa')({ dest: 'public' })


/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, './src/styles')]
  },
})

module.exports = nextConfig

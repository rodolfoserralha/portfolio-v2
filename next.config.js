/** @type {import('next').NextConfig} */

const withImages = require('next-images')

const nextConfig = withImages({
  reactStrictMode: true
})

module.exports = nextConfig

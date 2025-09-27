/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add your image domains here
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig

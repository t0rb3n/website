/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
        'i.scdn.co' // spotify
    ]
  },
  experimental: {
    outputStandalone: true,
  },
}

module.exports = nextConfig

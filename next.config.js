/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["user-images.githubusercontent.com", "camo.githubusercontent.com", "raw.githubusercontent.com", "github.com"],
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'], // Add the GitHub domain for external images
  },
}

module.exports = nextConfig;

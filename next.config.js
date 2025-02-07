/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['use.fontawesome.com', 'fonts.googleapis.com'],
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
}

module.exports = nextConfig

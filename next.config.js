/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  env: {
    CUSTOM_KEY: 'LA_SKIN_ELITE_PLATFORM',
  },
  trailingSlash: false,
  swcMinify: true,
}

module.exports = nextConfig 
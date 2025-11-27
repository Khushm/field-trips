/** @type {import('next').NextConfig} */
// CommonJS copy of the config to avoid ESM parsing issues in some CI environments
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = basePath || ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

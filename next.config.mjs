/** @type {import('next').NextConfig} */
// Allow configuring a base path / asset prefix for static hosting (e.g. GitHub Pages)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = basePath || ''

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

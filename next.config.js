/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: '', // Akan diisi dengan nama repository
    assetPrefix: '', // Akan diisi dengan nama repository
  }
  
  
  module.exports = nextConfig
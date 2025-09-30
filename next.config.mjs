/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180,
  images: { unoptimized: true },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false, // Enable optimization for better performance
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Removed experimental CSS optimization due to missing 'critters' dependency
  // experimental: {
  //   optimizeCss: true,
  // },
  // Exclude large video files from build processing
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4|avi)$/,
      type: "asset/resource",
      generator: {
        emit: false,
      },
    });
    return config;
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   unoptimized: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

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
    ],
  },
};

export default nextConfig;

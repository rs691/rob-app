import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/rob-app',
  assetPrefix: '/rob-app/',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
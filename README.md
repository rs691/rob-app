## Notes
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
     output: 'export',
  basePath: '/rob-app',
  assetPrefix: '/rob-app/',
  reactStrictMode: true,
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


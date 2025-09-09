import createMDX from '@next/mdx';
import { type NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // Only apply basePath and assetPrefix for GitHub Pages
  ...(isProd && isGitHubPages && {
    basePath: '/rob-app',
    assetPrefix: '/rob-app/',
  }),
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // GitHub Pages serves static files, so we need unoptimized images
    unoptimized: true,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
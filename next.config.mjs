import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rob-app/app',
  assetPrefix: '/rob-app/app/',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};


const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);

// export default nextConfig;

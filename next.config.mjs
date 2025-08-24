
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/',
  assetPrefix: '/',
  images: {
    unoptimized: true // Disable image optimization
  },
//   reactStrictMode: true,
//   pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
// };
};
// const withMDX = createMDX({
//   extension: /\.mdx?$/,
// });

// export default withMDX(nextConfig);

export default nextConfig;

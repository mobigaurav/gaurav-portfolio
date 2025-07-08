// next.config.ts ✅
import withMDX from '@next/mdx';
/** @type {import('next').NextConfig} */

const withMDXPlugin = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
   typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // other settings here
};

export default withMDXPlugin(nextConfig);


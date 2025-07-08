// next.config.ts ✅
import withMDX from '@next/mdx';

const withMDXPlugin = withMDX({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  // other settings here
};

export default withMDXPlugin(nextConfig);


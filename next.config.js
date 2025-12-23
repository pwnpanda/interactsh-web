/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: ['./src'],
  },
  // Turbopack configuration for Next.js 16
  turbopack: {
    resolveAlias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer/',
    },
  },
};

module.exports = nextConfig;

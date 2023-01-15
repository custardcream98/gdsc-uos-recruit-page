/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@gdsc-uos-recruit-page/hooks',
  'gdsc-uos-design-system',
  '@gdsc-uos-recruit-page/eslint-config-custom',
  '@gdsc-uos-recruit-page/tsconfig-custom',
]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = withTM(nextConfig);


const withPWA = require("next-pwa");
const runtimeCaching = require('next-pwa/cache');

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  reactStrictMode: false,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: !isProduction,
    runtimeCaching
  },
})

module.exports = nextConfig

module.exports = {
  optimizeFonts: false,
}
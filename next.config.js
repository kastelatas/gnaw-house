require('dotenv').config()
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
  },
})

module.exports = nextConfig

module.exports = {
  optimizeFonts: false,
  env: {
    API_HOST: process.env.API_HOST,
    API_NP_URL: process.env.API_NP_URL,
    API_NP_KEY: process.env.API_NP_KEY,
  }
}

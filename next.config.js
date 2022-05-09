/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";
console.log({ debug });
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/nextjs-materialize/" : "",
};

module.exports = nextConfig;

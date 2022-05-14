/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withLess = require("@zeit/next-less");
module.exports = withLess({
  /* config options here */
});

module.exports = {
  nextConfig,
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "secret",
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/public",
  },
};

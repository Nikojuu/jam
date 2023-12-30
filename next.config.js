/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;

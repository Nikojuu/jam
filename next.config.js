/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CONTENTFUL_SPACE_ID: "c0hxcgu96hfc",
    CONTENTFUL_ACCESS_KEY: "SJicQmdPdhZd2PuLmxaQmd14O2jqV-2_9VavmyGYmqI",
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ADMIN_SECRET: process.env.ADMIN_SECRET,
    HASURA_URL: process.env.HASURA_URL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;

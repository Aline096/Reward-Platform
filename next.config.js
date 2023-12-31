/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"],
    },
    env: {
        ADMIN_SECRET: process.env.ADMIN_SECRET,
        HASURA_URL: process.env.HASURA_URL
    },
}

module.exports = nextConfig;

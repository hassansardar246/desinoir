/** @type {import('next').NextConfig} */
const nextConfig = {


    reactStrictMode: true,
    images: {
        domains: ['http://localhost', 'https://localhost', 'localhost', 'www.course-api.com'], // Add both http and https
    },
}

module.exports = nextConfig

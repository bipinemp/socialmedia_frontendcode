/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    JWT_SECRET: "secret123",
    BASE_URL: "https://socialmediabackend-code.vercel.app",
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/bipinbhandari/**",
      },
    ],
  },
};

module.exports = nextConfig;

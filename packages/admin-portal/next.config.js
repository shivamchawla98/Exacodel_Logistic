/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_googleMapsApiKey: "AIzaSyCFigvs7RwemDJcfluki8CNX4uTUzua5Lo",
  },
  /* ...Your other config rules */
};

module.exports = nextConfig;

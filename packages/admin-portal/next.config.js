/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_googleMapsApiKey: "AIzaSyCFigvs7RwemDJcfluki8CNX4uTUzua5Lo",
    customKey: "my-value",
    NEXT_PUBLIC_AWS_ACCESS_KEY_ID: "AKIA5FWQZ5L4KOCCTT73",
    NEXT_PUBLIC_SECRET_ACCESS_KEY: "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",
    NEXT_PUBLIC_BUCKET_NAME: "globextrade",
    NEXT_PUBLIC_REGION: "ap-south-1",
    NEXT_PUBLIC_googleMapsApiKey: "AIzaSyCFigvs7RwemDJcfluki8CNX4uTUzua5Lo",
  },
  /* ...Your other config rules */
};

module.exports = nextConfig;

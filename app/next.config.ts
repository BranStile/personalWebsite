import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: process.env.DEV_ALLOWED_ORIGIN
      ? [process.env.DEV_ALLOWED_ORIGIN]
      : [],
};

export default nextConfig;
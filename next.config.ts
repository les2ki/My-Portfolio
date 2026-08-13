import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iad.microlink.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.microlink.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

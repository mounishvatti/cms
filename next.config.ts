import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amzn-s3-my-blog-images.s3.ap-south-1.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["img.freepik.com"],
    },
    async redirects() {
        return [
        {
            source: "/old-path",
            destination: "/new-path",
            permanent: true,
        },
        ];
    },
};

export default nextConfig;

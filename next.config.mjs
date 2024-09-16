/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental',
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'wy2srma65txfnvdh.public.blob.vercel-storage.com',
            port: '',
          },
          {
            protocol: "http",
            hostname: "localhost",
            port: "3000",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;

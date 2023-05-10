/** @type {import('next').NextConfig} */

const env = {
  CMS_URL: process.env.CMS_URL,
  API_URL: process.env.API_URL,
  APP_URL: process.env.APP_URL,
};

const nextConfig = {
  reactStrictMode: true,
  env,
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

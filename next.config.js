//** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["localhost"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: "",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

//in terminal it shows - ⚠ The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead. -this warning so i applied the new code

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",  // Use "http" if your localhost is running without SSL
        hostname: "localhost",
        port: "",  // Add the port if your local server runs on a specific port, e.g., "3000"
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");

// const nextConfig = {
//   images: {
//     domains: ["upmarks-bucket.s3.ap-south-1.amazonaws.com"],
//   },
// };

// module.exports = withPlugins([[withImages]], nextConfig);

// const withStyles = require("@webdeb/next-styles");

// module.exports = withStyles({
//   sass: true,
//   modules: true,
//   images: {
//     domains: ["upmarks-bucket.s3.ap-south-1.amazonaws.com"],
//   },
// });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
module.exports = {
  images: {
    domains: ["upmarks-bucket.s3.ap-south-1.amazonaws.com"],
  },
};

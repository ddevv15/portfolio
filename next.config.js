// CHANGED: minimal static export; no basePath/assetPrefix for shahdev.com
/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

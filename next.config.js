import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "1",
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === "production") {
  Object.assign(nextConfig, {
    compiler: { removeConsole: { exclude: ["error"] } },
  });
}

export default withBundleAnalyzer(nextConfig);

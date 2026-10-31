import type { NextConfig } from "next";

const isStatic = process.env.DEPLOY_TARGET === "github-pages" || process.env.BUILD_TARGET === "mobile";
const repoName = process.env.GITHUB_REPOSITORY_NAME || "";

const nextConfig: NextConfig = {
  ...(isStatic && {
    output: "export",
    basePath: repoName ? `/${repoName}` : "",
    assetPrefix: repoName ? `/${repoName}/` : "",
    images: {
      unoptimized: true,
    },
  }),
  reactStrictMode: true,
};

export default nextConfig;

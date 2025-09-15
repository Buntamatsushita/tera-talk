import type { NextConfig } from "next";

// GitHub Pages でホストする場合、ルートが "/<repo>" になるため basePath/assetPrefix を設定
const isProd = process.env.NODE_ENV === "production";
const repoName = "tera-talk"; // リポジトリ名

const nextConfig: NextConfig = {
  output: "export",
  // 開発はルート"/"、本番(GitHub Pages)は"/<repo>" 配下
  basePath: isProd ? `/${repoName}` : undefined,
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
  // next/image を静的エクスポートで使うための設定
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

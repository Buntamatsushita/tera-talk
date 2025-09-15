import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const prefix = `${base || ""}${basePath || ""}`;

  const now = new Date().toISOString();

  const staticPaths = [
    "/",
    "/chat",
    "/learn",
    "/sects",
    "/india",
    "/privacy",
    "/terms",
    "/favorites",
    "/contact",
    "/search",
    "/sitemap",
  ];

  // chat/[monk] 動的ルート
  const monkSlugs = ["shaka", "kukai", "dogen"];
  const monkPages = monkSlugs.flatMap((slug) => [
    `/chat/${slug}`,
    `/chat/${slug}/summary`,
  ]);

  return [...staticPaths, ...monkPages].map((path): MetadataRoute.Sitemap[0] => ({
    url: `${prefix}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6,
  }));
}



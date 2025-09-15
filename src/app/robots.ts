import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const host = base || undefined;
  const sitemapUrl = host
    ? `${host}${basePath || ""}/sitemap.xml`
    : `${basePath || ""}/sitemap.xml`;

  return {
    rules: [{ userAgent: "*" }],
    host,
    sitemap: sitemapUrl,
  };
}



export const dynamic = "force-static";
export const revalidate = 86400; // 24h

export function GET() {
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

  const monkSlugs = ["shaka", "kukai", "dogen"];
  const monkPages = monkSlugs.flatMap((slug) => [
    `/chat/${slug}`,
    `/chat/${slug}/summary`,
  ]);

  const urls = [...staticPaths, ...monkPages];

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map((path) => {
        const loc = `${prefix}${path}`;
        const priority = path === "/" ? "1.0" : "0.6";
        return `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
      })
      .join("") +
    `\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

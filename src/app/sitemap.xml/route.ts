import { SITEMAP_PAGES, XML_HEADERS, absoluteUrl, escapeXml } from "@/lib/sitemapData";

/** Canonical URL sitemap at /sitemap.xml (listed in robots.txt). */
export function GET() {
  const urls = SITEMAP_PAGES.map((page) => {
    const loc = absoluteUrl(page.path);
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(page.lastmod)}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-US" href="${escapeXml(loc)}" />
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(loc)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(loc)}" />
  </url>`;
  }).join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(body, { headers: XML_HEADERS });
}

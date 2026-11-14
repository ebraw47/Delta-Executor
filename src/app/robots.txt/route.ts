import { SITE_ORIGIN } from "@/lib/siteConfig";

export function GET() {
  // Primary sitemap is sitemap-index.xml; child sitemaps listed for crawlers too.
  const body = `User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
Sitemap: ${SITE_ORIGIN}/index.xml
Sitemap: ${SITE_ORIGIN}/image-sitemap.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}

import {
  ARTICLES,
  BRAND,
  IMAGES,
  IOS_PERFORMANCE_STEPS,
  KEY_SYSTEM_STEPS,
  ROUTES,
  SITE_ORIGIN,
  WINDOWS_SECURITY_STEPS,
} from "./siteConfig";

export type SitemapPage = {
  path: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

export type SitemapImage = {
  path: string;
  pagePath: string;
  title: string;
  caption: string;
};

const TODAY = "2026-11-14";

export const SITEMAP_PAGES: SitemapPage[] = [
  { path: ROUTES.home, lastmod: TODAY, changefreq: "daily", priority: 1.0 },
  { path: ROUTES.blog, lastmod: TODAY, changefreq: "weekly", priority: 0.85 },
  ...ARTICLES.map((a) => ({
    path: `/${a.slug}`,
    lastmod: a.date,
    changefreq: "weekly" as const,
    priority: 0.8,
  })),
  { path: ROUTES.about, lastmod: TODAY, changefreq: "monthly", priority: 0.6 },
  { path: ROUTES.contact, lastmod: TODAY, changefreq: "monthly", priority: 0.55 },
  { path: ROUTES.privacy, lastmod: TODAY, changefreq: "yearly", priority: 0.35 },
  { path: ROUTES.disclaimer, lastmod: TODAY, changefreq: "yearly", priority: 0.35 },
];

export const SITEMAP_IMAGES: SitemapImage[] = [
  {
    path: IMAGES.logo,
    pagePath: "/",
    title: `${BRAND.name} logo`,
    caption: "Delta Executor — download guides for Android, iOS, Windows, Mac, and VNG",
  },
  {
    path: IMAGES.og,
    pagePath: "/",
    title: `${BRAND.name} open graph image`,
    caption: BRAND.description,
  },
  {
    path: IMAGES.ogSquare,
    pagePath: "/",
    title: `${BRAND.name} square image`,
    caption: BRAND.description,
  },
  {
    path: IMAGES.twitter,
    pagePath: "/",
    title: `${BRAND.name} Twitter card`,
    caption: BRAND.description,
  },
  ...ARTICLES.map((a) => ({
    path: a.image,
    pagePath: `/${a.slug}`,
    title: a.title,
    caption: a.description,
  })),
  ...IOS_PERFORMANCE_STEPS.map((step) => ({
    path: step.src,
    pagePath: "/delta-executor-ios-performance",
    title: step.caption,
    caption: step.alt,
  })),
  ...WINDOWS_SECURITY_STEPS.map((step) => ({
    path: step.src,
    pagePath: "/delta-executor-windows-security",
    title: step.caption,
    caption: step.alt,
  })),
  ...KEY_SYSTEM_STEPS.map((step) => ({
    path: step.src,
    pagePath: "/delta-executor-key-steps",
    title: step.caption,
    caption: step.alt,
  })),
];

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
};

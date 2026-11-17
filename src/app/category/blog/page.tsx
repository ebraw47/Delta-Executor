import Link from "next/link";
import type { Metadata } from "next";
import { PageBannerPattern } from "@/components/BoxPattern";
import { ARTICLES, BRAND, ROUTES, SITE_ORIGIN } from "@/lib/siteConfig";

const PAGE_URL = `${SITE_ORIGIN}${ROUTES.blog}`;
const PAGE_TITLE = "Delta Executor Rehberleri — Android, iOS, Windows, Mac, Anahtar, VNG";
const PAGE_DESCRIPTION =
  "Delta Executor rehberleri: Android APK, iOS Direkt Kurulum, Windows PC, Mac DMG, anahtar sistemi ve VNG Vietnam indirmeleri.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: BRAND.name,
    type: "website",
  },
};

export default function BlogCategoryPage() {
  return (
    <div className="text-ink">
      <header className="page-banner relative overflow-hidden border-b border-white/10">
        <PageBannerPattern opacity={0.15} />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Platform rehberleri
          </p>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Delta Executor Rehberleri
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {PAGE_DESCRIPTION}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <article
              key={a.slug}
              className="group rounded-2xl border border-white/10 bg-navy-800/70 shadow-sm backdrop-blur-sm transition hover:border-brand/40 hover:shadow-soft"
            >
              <Link href={`/${a.slug}`} className="block p-5">
                <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                  {a.label}
                </span>
                <time
                  className="mt-3 block text-xs font-semibold uppercase tracking-wide text-brand"
                  dateTime={a.date}
                >
                  {new Date(a.date).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <h2 className="mt-2 font-display text-xl font-bold text-white group-hover:text-brand line-clamp-2">
                  {a.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-mute line-clamp-3">
                  {a.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Devamını oku
                  <span aria-hidden className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { PageBannerPattern } from "@/components/BoxPattern";
import DownloadButton from "@/components/DownloadButton";
import MarkdownContent from "@/components/MarkdownContent";
import { getMarkdown, stripLeadingH1 } from "@/lib/content";
import { ARTICLES, BRAND, IMAGES, PLATFORMS, SITE_ORIGIN } from "@/lib/siteConfig";

type ArticleMeta = (typeof ARTICLES)[number];

export function articleMetadata(article: ArticleMeta): Metadata {
  const url = `${SITE_ORIGIN}/${article.slug}`;
  const metaTitle = article.metaTitle;
  return {
    title: { absolute: metaTitle },
    description: article.description,
    alternates: {
      canonical: url,
      languages: {
        tr: url,
        "tr-TR": url,
        "x-default": url,
      },
    },
    openGraph: {
      title: metaTitle,
      description: article.description,
      url,
      siteName: BRAND.name,
      locale: "tr_TR",
      type: "article",
      publishedTime: article.date,
      images: [{ url: `${SITE_ORIGIN}${article.image}`, width: 1280, height: 720, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: article.description,
      images: [`${SITE_ORIGIN}${article.image}`],
    },
  };
}

export default function ArticlePage({
  article,
  contentSlug,
}: {
  article: ArticleMeta;
  contentSlug?: string;
}) {
  const raw = getMarkdown(contentSlug || article.slug);
  const content = stripLeadingH1(raw);
  const url = `${SITE_ORIGIN}/${article.slug}`;
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const downloadPlatform = PLATFORMS.find(
    (p) => p.file && p.name.toLowerCase() === article.label.toLowerCase()
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "tr",
    image: [`${SITE_ORIGIN}${article.image}`],
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: BRAND.name, url: SITE_ORIGIN },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}${IMAGES.logo}` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Rehberler", item: `${SITE_ORIGIN}/category/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <Script id={`article-schema-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id={`breadcrumb-${article.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <article className="text-ink">
        <header className="page-banner relative overflow-hidden border-b border-white/10">
          <PageBannerPattern opacity={0.15} />
          <div className="relative mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
            <nav className="mb-5 text-sm text-ink-mute" aria-label="Gezinti">
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link href="/" className="hover:text-brand">
                    Ana Sayfa
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/category/blog" className="hover:text-brand">
                    Rehberler
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="line-clamp-1 text-white">{article.title}</li>
              </ol>
            </nav>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
              {article.label} rehberi
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl md:leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-sm text-ink-mute">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="mx-2">·</span>
              <span>{BRAND.name}</span>
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
          {downloadPlatform ? (
            <div className="mb-10 flex flex-wrap items-center gap-3">
              <DownloadButton platformId={downloadPlatform.id} />
              <p className="text-sm text-ink-mute">
                Doğrudan {BRAND.domain} üzerinden indirin — dış bağlantı yok.
              </p>
            </div>
          ) : null}
          <MarkdownContent content={content} />
        </div>

        {related.length > 0 && (
          <aside className="section-glass border-t border-white/10 py-12 md:py-14">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="section-kicker">Okumaya devam</p>
              <h2 className="font-display text-2xl font-bold text-white">İlgili rehberler</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/${a.slug}`}
                    className="group block rounded-2xl border border-white/10 bg-navy-800/70 p-4 backdrop-blur-sm transition hover:border-brand/40 hover:shadow-soft"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">
                      {a.label}
                    </span>
                    <h3 className="mt-2 font-display text-base font-semibold text-white group-hover:text-brand line-clamp-2">
                      {a.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        )}
      </article>
    </>
  );
}

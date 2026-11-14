"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ARTICLES } from "@/lib/siteConfig";

export default function HomeGuides() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-white/10 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="section-kicker">{t.home.guidesKicker}</p>
          <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
            {t.home.guidesTitle}
          </h2>
          <p className="mt-2 text-ink-mute">{t.home.guidesText}</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <Link
              key={a.slug}
              href={`/${a.slug}`}
              className="group block rounded-2xl border border-white/10 bg-navy-800/70 p-5 shadow-sm backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft"
            >
              <span className="inline-flex rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                {a.label}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white group-hover:text-brand line-clamp-2">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-mute line-clamp-2">
                {a.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                {t.home.readGuide}
                <span aria-hidden className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

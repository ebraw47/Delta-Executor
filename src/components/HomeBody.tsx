"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { FeatureCards, StepCards } from "@/components/FeatureCards";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { BRAND, ROUTES } from "@/lib/siteConfig";

export default function HomeBody({
  beforeStepsContent,
  afterStepsContent,
}: {
  beforeStepsContent: ReactNode;
  afterStepsContent?: ReactNode;
}) {
  const { t, locale } = useLanguage();

  return (
    <>
      <section className="section-glass border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="section-kicker">{t.home.whyKicker}</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            {t.home.whyTitle}
          </h2>
          <p className="mt-2 max-w-2xl text-ink-mute">{t.home.whyText}</p>
          <div className="mt-10">
            <FeatureCards />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 py-14 md:py-16">
        <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="section-kicker">{t.home.hubKicker}</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              {t.home.hubTitle}
            </h2>
            <p className="mt-3 max-w-md text-ink-mute">{t.home.hubText}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="section-kicker">{t.home.serpKicker}</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              {t.home.serpTitle}
            </h2>
            <ul className="mt-4 space-y-3 text-[1.05rem] leading-relaxed text-ink-soft">
              <li>
                Android · iOS · Windows · {t.nav.mac} · {t.nav.key} · {t.nav.vng}
              </li>
              <li>{t.nav.direct}</li>
              <li>{BRAND.domain}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-glass py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              {locale === "en" ? (
                beforeStepsContent
              ) : (
                <div className="prose-track space-y-4">
                  {/* Keep a single H2 in the right column (stepsTitle) — avoid duplicate headings for SEO */}
                  <p className="prose-p">{t.hero.subtitle}</p>
                  <p className="prose-p">{t.home.hubText}</p>
                  <p className="prose-p">{t.home.tipText}</p>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <p className="section-kicker">{t.home.stepsKicker}</p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                {t.home.stepsTitle}
              </h2>
              <div className="mt-8">
                <StepCards className="grid gap-y-10" />
              </div>
              <a
                href="#download"
                className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-brand-gradient px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 transition hover:opacity-90 focus-ring"
              >
                {t.home.openHub}
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-10">
            <div className="mx-auto max-w-3xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-12 lg:gap-12">
              {afterStepsContent && locale === "en" ? (
                <div className="lg:col-span-7">{afterStepsContent}</div>
              ) : null}
              <div
                className={`mt-8 space-y-6 lg:mt-0 ${
                  afterStepsContent && locale === "en" ? "lg:col-span-5" : "lg:col-span-7"
                }`}
              >
                <div className="rounded-2xl border border-white/10 bg-navy-800/80 p-6 shadow-soft backdrop-blur-sm md:p-7">
                  <p className="section-kicker">{t.home.tipKicker}</p>
                  <h3 className="font-display text-xl font-bold text-white">{t.home.tipTitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">{t.home.tipText}</p>
                  <Link
                    href="/delta-executor-key"
                    className="mt-5 inline-flex text-sm font-semibold text-brand transition hover:text-white"
                  >
                    {t.home.tipLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="section-kicker">{t.home.whoKicker}</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
              {t.home.whoTitle}
            </h2>
            <p className="mt-3 text-ink-mute">{t.home.whoText}</p>
            <Link
              href={ROUTES.blog}
              className="mt-6 inline-flex text-sm font-semibold text-brand transition hover:text-white"
            >
              {t.home.browseGuides}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-glass border-t border-white/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-2xl rounded-2xl border border-white/10 bg-navy-800/80 p-6 shadow-soft md:p-8">
            <p className="section-kicker">{t.home.ctaKicker}</p>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-3 text-ink-mute">{t.home.ctaText}</p>
            <a
              href="#download"
              className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-brand-gradient px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 transition hover:opacity-90 focus-ring"
            >
              {t.home.ctaButton}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

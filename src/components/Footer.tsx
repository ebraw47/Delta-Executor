"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { ARTICLES, BRAND, ROUTES } from "@/lib/siteConfig";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-20 border-t border-white/10 bg-navy-950/90 text-ink-soft backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 inline-block" aria-label={`${BRAND.name} home`}>
              <span className="font-display text-xl font-bold text-gradient">{BRAND.name}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-mute">
              {t.footer.blurb} {BRAND.domain}.
            </p>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </p>
            <ul className="space-y-2.5 text-sm text-ink-mute">
              <li>
                <Link href={ROUTES.home} className="transition-colors hover:text-brand">
                  {t.nav.download}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.blog} className="transition-colors hover:text-brand">
                  {t.nav.guides}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.about} className="transition-colors hover:text-brand">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.contact} className="transition-colors hover:text-brand">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.privacy} className="transition-colors hover:text-brand">
                  {t.nav.privacy}
                </Link>
              </li>
              <li>
                <Link href={ROUTES.disclaimer} className="transition-colors hover:text-brand">
                  {t.nav.disclaimer}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.platformGuides}
            </p>
            <ul className="space-y-2.5 text-sm text-ink-mute">
              {ARTICLES.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/${a.slug}`}
                    className="line-clamp-1 transition-colors hover:text-brand"
                  >
                    {a.label}: {a.title}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-mute">
              <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-brand">
                {BRAND.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-ink-mute">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. {t.footer.rights} |{" "}
            <Link href="/" className="transition-colors hover:text-brand">
              {BRAND.domain}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

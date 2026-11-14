"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** Client nav controls only — logo lives in SiteHeader (server). */
export default function Header() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const topNav = [
    { href: "/delta-executor-key", label: t.nav.key },
    { href: "/delta-executor-windows", label: t.nav.pc },
    { href: "/delta-executor-vng", label: t.nav.vng },
    { href: "/delta-executor-mac", label: t.nav.mac },
    {
      href: "/downloads/Delta-Executor-Direct-Install.ipa",
      label: t.nav.direct,
      download: true as const,
    },
  ];

  const moreNav = [
    { href: "/", label: t.nav.download },
    { href: "/category/blog", label: t.nav.guides },
    { href: "/about-us", label: t.nav.about },
    { href: "/contact-us", label: t.nav.contact },
    { href: "/privacy-policy", label: t.nav.privacy },
    { href: "/disclaimer", label: t.nav.disclaimer },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="flex items-center gap-2">
        <nav className="hidden items-center gap-3 xl:flex xl:gap-4" aria-label="Platform">
          {topNav.map((item) =>
            item.download ? (
              <a
                key={item.href}
                href={item.href}
                download
                className="whitespace-nowrap text-sm font-semibold text-white/90 transition hover:text-brand"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-semibold text-white/90 transition hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <LanguageSwitcher />

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white hover:bg-white/5 xl:hidden focus-ring"
          aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <nav
          className="absolute left-0 right-0 top-full z-50 flex flex-col gap-1 border-b border-white/10 bg-[#05070f] px-3 pb-3 pt-2 sm:px-4 md:px-6 xl:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
            {[...topNav, ...moreNav].map((item) => {
              const className =
                "inline-flex min-h-11 items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-ink-soft hover:bg-white/5 hover:text-white";
              if ("download" in item && item.download) {
                return (
                  <a key={`m-${item.href}`} href={item.href} download className={className}>
                    {item.label}
                  </a>
                );
              }
              return (
                <Link key={`m-${item.href}`} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </>
  );
}

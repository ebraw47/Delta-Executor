"use client";

import Link from "next/link";
import { PLATFORM_ICONS } from "@/components/PlatformIcons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { PLATFORMS } from "@/lib/siteConfig";

const HERO_PLATFORM_IDS = ["android", "ios", "vng", "windows", "mac", "key"] as const;

/** Glass platform cards — labels/CTAs follow selected language. */
export default function HeroPlatformCards() {
  const { t } = useLanguage();
  const platforms = HERO_PLATFORM_IDS.map(
    (id) => PLATFORMS.find((p) => p.id === id)!
  ).filter(Boolean);

  const labelFor = (id: string, fallback: string) => {
    if (id === "key") return t.nav.key;
    if (id === "mac") return t.nav.mac;
    if (id === "vng") return t.nav.vng;
    return fallback;
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6 md:gap-3">
        {platforms.map((p) => {
          const cta = p.file ? t.hero.platformDownload : t.hero.platformGetKey;
          const className =
            "hero-platform-card flex min-h-[8.25rem] flex-col items-center justify-center px-2.5 py-4 text-center focus-ring sm:min-h-[9rem]";

          const inner = (
            <>
              <span className="mb-2.5 flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12 [&>svg]:h-10 [&>svg]:w-10 sm:[&>svg]:h-11 sm:[&>svg]:w-11">
                {PLATFORM_ICONS[p.id]}
              </span>
              <span className="block font-display text-sm font-bold tracking-wide text-white sm:text-[0.95rem]">
                {labelFor(p.id, p.name)}
              </span>
              <span className="mt-1.5 text-xs font-semibold text-[#5CE1FF] sm:text-[0.8rem]">{cta}</span>
            </>
          );

          if (p.file && p.filename) {
            return (
              <a
                key={p.id}
                href={p.file}
                download={p.filename}
                className={className}
              >
                {inner}
              </a>
            );
          }

          return (
            <Link key={p.id} href={p.guide} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

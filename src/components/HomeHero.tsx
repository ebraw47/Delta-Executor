"use client";

import HeroPlatformCards from "@/components/HeroPlatformCards";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** Hero — content over neon background; all copy follows selected language. */
export default function HomeHero() {
  const { t } = useLanguage();

  return (
    <section
      className="hero-neon relative overflow-hidden"
      style={{
        backgroundImage: "url('/feature/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-bg-shade pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[min(92vw,640px)] max-w-[1180px] flex-col justify-between px-4 pb-6 pt-8 sm:min-h-[520px] sm:px-6 sm:pb-8 sm:pt-10 md:min-h-[560px] lg:min-h-[620px] lg:pb-9 lg:pt-12">
        <div className="max-w-xl text-center md:max-w-[48%] md:text-left lg:max-w-[42%]">
          <h1 className="font-display text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-[3.25rem]">
            <span className="block">{t.hero.titlePrefix}</span>
            <span className="hero-neon-title block">
              {" "}
              {t.hero.titleBrand}
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)] sm:mt-4 sm:text-lg md:mx-0">
            {t.hero.subtitle}
          </p>

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-[0.9rem] font-semibold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] md:justify-start md:gap-x-6">
            <li className="inline-flex items-center gap-2">
              <svg className="h-[1.15rem] w-[1.15rem] text-[#5CE1FF]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M13 2 4.5 13.2c-.35.46-.02 1.1.55 1.1H11l-1 7.7c-.08.6.7.95 1.1.48L19.6 10.7c.37-.45.05-1.1-.55-1.1H13l1-7.12c.1-.6-.68-.97-1.1-.48Z" />
              </svg>
              {t.hero.bulletFast}
            </li>
            <li className="inline-flex items-center gap-2">
              <svg className="h-[1.15rem] w-[1.15rem] text-[#5CE1FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v5c0 4.4 2.9 7.6 7 9 4.1 0 4.1-4.6 7-9V6l-7-3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.2 12 1.9 1.9 3.7-3.8" />
              </svg>
              {t.hero.bulletSafe}
            </li>
            <li className="inline-flex items-center gap-2">
              <svg className="h-[1.15rem] w-[1.15rem] text-[#5CE1FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12H4s.55-3.03 2-4c1.62-1.08 4 0 4 0" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-4 0-4" />
              </svg>
              {t.hero.bulletEasy}
            </li>
          </ul>

          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-7 md:items-start">
            <a
              href="#platforms"
              className="hero-download-cta inline-flex min-h-[3.05rem] items-center gap-2.5 rounded-full px-8 py-3.5 text-[0.95rem] font-bold text-white focus-ring"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.35" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v11m0 0 4-4m-4 4-4-4" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 18h14" />
              </svg>
              {t.hero.ctaPrimary}
              <span aria-hidden className="text-lg leading-none">
                →
              </span>
            </a>
            <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3DFF8A] drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
              <span
                className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#3DFF8A] text-[10px] font-black text-navy-950"
                aria-hidden
              >
                ✓
              </span>
              {t.hero.trustLine}
            </p>
            <a
              href="#platforms"
              className="hero-popular-badge mt-1 inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold sm:text-xs"
            >
              <span aria-hidden>🔥</span> {t.hero.popularDownloads}
            </a>
          </div>
        </div>

        <div id="platforms" className="scroll-mt-28 relative z-10 mt-8 w-full sm:mt-10">
          <HeroPlatformCards />
        </div>
      </div>
    </section>
  );
}

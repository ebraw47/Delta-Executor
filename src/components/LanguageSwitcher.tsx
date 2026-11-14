"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** Compact dropdown — only the current language flag is shown until opened */
export default function LanguageSwitcher() {
  const { locale, setLocale, locales, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = locales.find((l) => l.code === locale) ?? locales[0];

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-2 text-sm font-semibold text-white transition hover:border-brand/40 hover:bg-white/10 focus-ring"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.language}: ${current.native}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden className="text-base leading-none">
          {current.flag}
        </span>
        <span className="hidden max-w-[5.5rem] truncate sm:inline">{current.native}</span>
        <svg
          className={`h-3.5 w-3.5 text-ink-mute transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M5.25 7.5 10 12.25 14.75 7.5" />
        </svg>
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute end-0 z-[60] mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-white/15 bg-navy-900 py-1 shadow-lift"
        >
          {locales.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === locale}>
              <button
                type="button"
                className={`flex min-h-11 w-full items-center gap-2.5 px-3 py-2.5 text-left text-sm font-semibold transition ${
                  l.code === locale
                    ? "bg-brand/15 text-brand"
                    : "text-ink-soft hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
              >
                <span aria-hidden className="text-base leading-none">
                  {l.flag}
                </span>
                <span>{l.native}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

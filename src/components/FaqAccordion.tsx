"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: readonly Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        const num = String(i + 1).padStart(2, "0");

        return (
          <div
            key={faq.q}
            className={`overflow-hidden rounded-2xl border transition duration-200 ${
              isOpen
                ? "border-brand/40 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 shadow-soft"
                : "border-white/10 bg-navy-800/60 hover:border-brand/30 hover:bg-navy-800/80"
            }`}
          >
            <button
              type="button"
              className="flex w-full items-start gap-3.5 px-4 py-4 text-left focus-ring sm:gap-4 sm:px-5 sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-display text-xs font-bold tracking-wide transition sm:h-10 sm:w-10 sm:text-sm ${
                  isOpen
                    ? "bg-brand text-navy-950 shadow-soft"
                    : "bg-navy-950 text-brand ring-1 ring-brand/25"
                }`}
                aria-hidden
              >
                {num}
              </span>
              <span className="min-w-0 flex-1 pt-1.5 font-display text-base font-semibold leading-snug text-white sm:pt-2 sm:text-lg">
                {faq.q}
              </span>
              <span className="mt-2 shrink-0 text-brand" aria-hidden>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {isOpen ? (
                    <path strokeLinecap="round" d="M5 12h14" />
                  ) : (
                    <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                  )}
                </svg>
              </span>
            </button>
            {isOpen ? (
              <p className="border-t border-white/10 px-4 pb-5 pt-0 text-sm leading-relaxed text-ink-soft sm:px-5 sm:pl-[4.25rem] sm:text-base">
                {faq.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

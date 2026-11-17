"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type CardItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

const FEATURE_ICONS = {
  phone: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  bolt: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  key: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="15" r="4" />
      <path d="m11.5 12.5 8-8M17 5l2 2" />
    </svg>
  ),
  shield: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
    </svg>
  ),
  globe: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  refresh: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
      <path d="M21 3v6h-6" />
    </svg>
  ),
  download: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  ),
  spark: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  ),
  check: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
};

const FEATURE_ICON_LIST = [
  FEATURE_ICONS.phone,
  FEATURE_ICONS.bolt,
  FEATURE_ICONS.key,
  FEATURE_ICONS.shield,
  FEATURE_ICONS.globe,
  FEATURE_ICONS.refresh,
] as const;

const STEP_ICON_LIST = [FEATURE_ICONS.download, FEATURE_ICONS.spark, FEATURE_ICONS.check] as const;

function IconCard({ item }: { item: CardItem }) {
  return (
    <article className="group relative rounded-2xl border border-white/10 bg-navy-800/70 px-5 pb-6 pt-10 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand/40 hover:shadow-soft">
      <div
        className="absolute -top-6 left-5 flex h-12 w-12 items-center justify-center rounded-full border border-brand/40 bg-gradient-to-br from-navy-700 to-navy-900 text-brand shadow-glow transition duration-200 group-hover:scale-105"
        aria-hidden
      >
        {item.icon}
      </div>
      <h3 className="font-display text-lg font-bold tracking-tight text-white md:text-[1.15rem]">
        {item.title}
      </h3>
      <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-mute">{item.description}</p>
    </article>
  );
}

export function FeatureCards() {
  const { t } = useLanguage();
  const items = t.features.map((f, i) => ({
    ...f,
    icon: FEATURE_ICON_LIST[i] ?? FEATURE_ICONS.phone,
  }));

  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <IconCard key={item.title} item={item} />
      ))}
    </div>
  );
}

export function StepCards({
  className = "grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
}: {
  className?: string;
}) {
  const { t } = useLanguage();
  const items = t.steps.map((s, i) => ({
    ...s,
    icon: STEP_ICON_LIST[i] ?? FEATURE_ICONS.check,
  }));

  return (
    <div className={className}>
      {items.map((item) => (
        <IconCard key={item.title} item={item} />
      ))}
    </div>
  );
}

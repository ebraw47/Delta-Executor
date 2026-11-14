import type { ReactNode } from "react";

type CardItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconClass = "h-7 w-7";

export const FEATURE_ICONS = {
  phone: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </svg>
  ),
  bolt: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
  key: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="15" r="4" />
      <path d="m11.5 12.5 8-8M17 5l2 2" />
    </svg>
  ),
  shield: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
    </svg>
  ),
  globe: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  refresh: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12a9 9 0 1 1-2.6-6.3" />
      <path d="M21 3v6h-6" />
    </svg>
  ),
  download: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  ),
  spark: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    </svg>
  ),
  check: (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
};

export const HOME_FEATURES: CardItem[] = [
  {
    title: "All Major Platforms",
    description: "Android APK, iOS Direct Install, VNG for Vietnam, Windows via emulator, and native Mac DMG support.",
    icon: FEATURE_ICONS.phone,
  },
  {
    title: "Built for Script Players",
    description: "Built for Roblox enthusiasts who want a responsive executor UI and steady script compatibility.",
    icon: FEATURE_ICONS.bolt,
  },
  {
    title: "Clear Key System Help",
    description: "Step-by-step Receive Key flow so free users can unlock Delta for ~24 hours without scams.",
    icon: FEATURE_ICONS.key,
  },
  {
    title: "Fake Site Warnings",
    description: "We call out mirror spam so you stay on trusted guides instead of phishing download pages.",
    icon: FEATURE_ICONS.shield,
  },
  {
    title: "VNG vs Global Clarity",
    description: "Separate guidance for Roblox Vietnam (VNG) vs global Roblox so you pick the correct build.",
    icon: FEATURE_ICONS.globe,
  },
  {
    title: "Update After Patches",
    description: "When Roblox upgrades break old builds, return here for refreshed platform install steps.",
    icon: FEATURE_ICONS.refresh,
  },
];

export const HOME_STEPS: CardItem[] = [
  {
    title: "Choose Your Platform",
    description: "Tap Android, iOS, VNG, Windows, Mac, Key, or Direct Install from the hub above.",
    icon: FEATURE_ICONS.download,
  },
  {
    title: "Install & Trust",
    description: "Follow the guide: APK permissions, iOS profile trust, DMG install, or emulator setup.",
    icon: FEATURE_ICONS.spark,
  },
  {
    title: "Get Key & Execute",
    description: "Complete the daily key checkpoints, paste the key, then run your scripts.",
    icon: FEATURE_ICONS.check,
  },
];

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

export function FeatureCards({ items = HOME_FEATURES }: { items?: CardItem[] }) {
  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <IconCard key={item.title} item={item} />
      ))}
    </div>
  );
}

export function StepCards({
  items = HOME_STEPS,
  className = "grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
}: {
  items?: CardItem[];
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((item) => (
        <IconCard key={item.title} item={item} />
      ))}
    </div>
  );
}

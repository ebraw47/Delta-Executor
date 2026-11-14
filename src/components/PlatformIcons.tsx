import type { ReactNode } from "react";

/** Crisp HD vector marks (viewBox 0 0 48 48) for retina screens */
const box = "h-10 w-10 sm:h-11 sm:w-11";

export const PLATFORM_ICONS: Record<string, ReactNode> = {
  android: (
    <svg className={box} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#3DDC84"
        d="M34.8 29.6a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm-21.6 0a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Zm22.3-11.6 3.7-6.4a.85.85 0 1 0-1.47-.85l-3.75 6.5A19.4 19.4 0 0 0 24 15.4c-3.3 0-6.38.82-9.08 2.25L11.17 11a.85.85 0 1 0-1.47.85l3.7 6.4C7.9 21.4 5.4 26.4 5.4 32.1h37.2c0-5.7-2.5-10.7-7.1-14.1Z"
      />
    </svg>
  ),
  ios: (
    <svg className={box} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFFFFF"
        d="M33.9 36.8c-1.45 2.2-3 4.35-5.4 4.4-2.38.05-3.14-1.4-5.84-1.4-2.72 0-3.55 1.37-5.8 1.46-2.33.09-4.09-2.35-5.58-4.5C7.55 32.4 5.22 24.5 8.35 19.1c1.55-2.7 4.32-4.4 7.32-4.45 2.28-.04 4.44 1.55 5.85 1.55 1.39 0 4.02-1.9 6.78-1.62 1.16.05 4.39.46 6.47 3.52-.16.1-3.86 2.27-3.82 6.77.05 5.37 4.71 7.17 4.76 7.18-.05.12-.75 2.56-2.45 5.03Zm-10.1-28.4c1.3-1.48 3.45-2.6 5.23-2.67.23 2.08-.6 4.18-1.85 5.67-1.23 1.51-3.25 2.68-5.24 2.52-.27-2.04.73-4.18 1.86-5.52Z"
      />
    </svg>
  ),
  mac: (
    <svg className={box} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#A2AAAD"
        d="M33.9 36.8c-1.45 2.2-3 4.35-5.4 4.4-2.38.05-3.14-1.4-5.84-1.4-2.72 0-3.55 1.37-5.8 1.46-2.33.09-4.09-2.35-5.58-4.5C7.55 32.4 5.22 24.5 8.35 19.1c1.55-2.7 4.32-4.4 7.32-4.45 2.28-.04 4.44 1.55 5.85 1.55 1.39 0 4.02-1.9 6.78-1.62 1.16.05 4.39.46 6.47 3.52-.16.1-3.86 2.27-3.82 6.77.05 5.37 4.71 7.17 4.76 7.18-.05.12-.75 2.56-2.45 5.03Zm-10.1-28.4c1.3-1.48 3.45-2.6 5.23-2.67.23 2.08-.6 4.18-1.85 5.67-1.23 1.51-3.25 2.68-5.24 2.52-.27-2.04.73-4.18 1.86-5.52Z"
      />
    </svg>
  ),
  windows: (
    <svg className={box} viewBox="0 0 48 48" aria-hidden>
      <path fill="#00A4EF" d="M6 10.2 21.2 8v14.2H6V10.2Zm17.2-2.4L42 6v16.2H23.2V7.8ZM6 25.2h15.2V39.6L6 37.4V25.2Zm17.2 0H42V42l-18.8-2.6V25.2Z" />
    </svg>
  ),
  vng: (
    <svg className={box} viewBox="0 0 48 48" aria-hidden>
      <rect x="4" y="6" width="40" height="36" rx="6" fill="#DA251D" />
      <path
        fill="#FFEA00"
        d="M24 12.4 26.6 20l7.9.2-6.3 4.7 2.3 7.5L24 27.8l-6.5 4.6 2.3-7.5-6.3-4.7 7.9-.2L24 12.4Z"
      />
    </svg>
  ),
  direct: (
    <svg className={box} viewBox="0 0 48 48" aria-hidden>
      <defs>
        <linearGradient id="di" x1="8" y1="4" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <rect x="14" y="4" width="20" height="40" rx="4.5" fill="url(#di)" />
      <rect x="16.5" y="8" width="15" height="26" rx="1.5" fill="#050814" />
      <path
        d="M24 15v11m0 0 4-4m-4 4-4-4"
        fill="none"
        stroke="#00E5FF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="38.5" r="1.6" fill="#050814" />
    </svg>
  ),
  key: (
    <svg className={box} viewBox="0 0 48 48" aria-hidden fill="none">
      <circle cx="17" cy="28" r="8" stroke="#C084FC" strokeWidth="3" />
      <path
        d="M23.5 22.5 38 8m0 0 5 5M38 8l-4 4"
        stroke="#C084FC"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="28" r="2.6" fill="#C084FC" />
    </svg>
  ),
  discord: (
    <svg className={box} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#5865F2"
        d="M36.6 12.2A33 33 0 0 0 28.7 9l-.4.8a30 30 0 0 1 5.5 2.1 27 27 0 0 0-22.6 0A30 30 0 0 1 16.7 9l-.4-.8a33 33 0 0 0-7.9 3.2C4.2 20.2 3 27.9 3.5 35.5a33.4 33.4 0 0 0 10.1 5.1l1.3-2.1a21.6 21.6 0 0 1-3.2-1.6l.8-.6c6.1 2.9 12.8 2.9 18.9 0l.8.6c-1 .6-2.1 1.2-3.2 1.6l1.3 2.1a33.3 33.3 0 0 0 10.1-5.1c.6-8.7-1-16.3-5-23.3ZM17.8 30.6c-1.9 0-3.4-1.8-3.4-3.9s1.5-3.9 3.4-3.9 3.5 1.8 3.4 3.9-1.5 3.9-3.4 3.9Zm12.4 0c-1.9 0-3.4-1.8-3.4-3.9s1.5-3.9 3.4-3.9 3.5 1.8 3.4 3.9-1.5 3.9-3.4 3.9Z"
      />
    </svg>
  ),
};

export function PlatformIcon({ id, className = "" }: { id: string; className?: string }) {
  return (
    <span
      className={`mb-2 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-navy-950/80 shadow-soft sm:h-16 sm:w-16 ${className}`}
    >
      {PLATFORM_ICONS[id] ?? PLATFORM_ICONS.android}
    </span>
  );
}

/** Central brand / domain config for Delta Executor */
export const SITE_ORIGIN = "https://deltaexecutor.com.tr";

export const BRAND = {
  name: "Delta Executor",
  shortName: "Delta",
  keyword: "Delta Executor",
  domain: "deltaexecutor.com.tr",
  email: "contact@deltaexecutor.com.tr",
  twitter: "@deltaexecutor",
  discord: "https://discord.gg/delta",
  version: "2.745",
  tagline: "Download Delta Executor for Android, iOS, Windows, Mac & VNG",
  /** Primary SERP snippet — written for US English search intent */
  description:
    "Delta Executor is a popular mobile-focused (Android & iOS) third-party tool that runs custom Lua scripts in Roblox to alter gameplay or automate tasks. Free download guides for PC, Mac, and VNG on this site.",
} as const;

export const ROUTES = {
  home: "/",
  about: "/about-us",
  blog: "/category/blog",
  contact: "/contact-us",
  privacy: "/privacy-policy",
  disclaimer: "/disclaimer",
} as const;

export const IMAGES = {
  logo: "/feature/favicon.webp",
  icon: "/feature/favicon.webp",
  favicon: "/favicon.ico",
  brandLogo: "/feature/header-logo-nav.png",
  banner: "/feature/og-image-1200x630.webp",
  headerLogo: "/feature/header-logo-nav.png",
  headerLogoLight: "/feature/header-logo-nav.png",
  og: "/feature/og-image-1200x630.webp",
  ogSquare: "/feature/og-square-1200x1200.webp",
  twitter: "/feature/twitter-card-1200x600.webp",
  website: "/feature/og-image-1200x630.webp",
  tool: "/feature/og-image-1200x630.webp",
  heroAlt: "/feature/og-image-1200x630.webp",
  features: "/feature/og-image-1200x630.webp",
  howItWorks: "/guides/ios-step-1.webp",
  benefits: "/feature/og-square-1200x1200.webp",
  whoCanUse: "/guides/ios-step-2.webp",
  vsSentence: "/feature/twitter-card-1200x600.webp",
  showcase: "/guides/ios-step-3.webp",
} as const;

/** Step galleries — aspect matches each screenshot so frames fit exactly. */
export const IOS_PERFORMANCE_STEPS = [
  {
    src: "/guides/ios-step-1.webp",
    alt: "iPhone Home Screen — tap Settings to open Delta performance settings",
    caption: "Step 1 — Open Settings",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-2.webp",
    alt: "iPhone Settings — open General then Background App Refresh",
    caption: "Step 2 — Background App Refresh",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-3.webp",
    alt: "Background App Refresh screen — turn the setting on for Delta",
    caption: "Step 3 — Turn Background App Refresh on",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-4.webp",
    alt: "Background App Refresh — choose Wi-Fi and Mobile Data",
    caption: "Step 4 — Wi-Fi & Mobile Data",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-5.webp",
    alt: "iPhone Settings — open Battery",
    caption: "Step 5 — Open Battery",
    aspect: "301 / 600",
  },
  {
    src: "/guides/ios-step-6.webp",
    alt: "Battery settings — turn Low Power Mode off for smoother Delta",
    caption: "Step 6 — Turn Low Power Mode off",
    aspect: "301 / 600",
  },
] as const;

export const WINDOWS_SECURITY_STEPS = [
  {
    src: "/guides/windows-step-1.webp",
    alt: "Windows Start search — find and open Windows Security",
    caption: "Step 1 — Open Windows Security",
    aspect: "768 / 714",
  },
  {
    src: "/guides/windows-step-2.webp",
    alt: "Windows Security — Firewall & network protection settings",
    caption: "Step 2 — Firewall & network protection",
    aspect: "1024 / 731",
  },
] as const;

export const KEY_SYSTEM_STEPS = [
  {
    src: "/guides/key-step-1.webp",
    alt: "Delta Android Keysystem — tap Continue to start the key checkpoints",
    caption: "Step 1 — Continue on Keysystem",
    aspect: "469 / 756",
  },
  {
    src: "/guides/key-step-2.webp",
    alt: "Get Delta Key — complete the survey, app, and video checkpoints",
    caption: "Step 2 — Complete checkpoints",
    aspect: "614 / 1024",
  },
  {
    src: "/guides/key-step-3.webp",
    alt: "Successfully whitelisted — copy your free Delta key",
    caption: "Step 3 — Copy your key",
    aspect: "610 / 1024",
  },
  {
    src: "/guides/key-step-4.webp",
    alt: "Delta Welcome back — paste the key into Enter key, then tap Continue",
    caption: "Step 4 — Paste key in Delta",
    aspect: "1024 / 455",
  },
  {
    src: "/guides/key-step-5.webp",
    alt: "Roblox — open your experience (for example Jujutsu Infinite) and tap Play",
    caption: "Step 5 — Open Roblox and Play",
    aspect: "455 / 1024",
  },
] as const;

/**
 * Guides + step posts. Card covers use real webp assets from /public.
 */
export const ARTICLES = [
  {
    slug: "delta-executor-android",
    title: "Delta Executor Android Download — Install APK Guide",
    metaTitle: "Delta Executor Android Download (USA) | Free APK Guide",
    description:
      "Download Delta Executor APK for Android in the US. Enable unknown sources, install, get your key, and run Roblox scripts safely.",
    date: "2026-11-11",
    image: "/feature/og-image-1200x630.webp",
    label: "Android",
  },
  {
    slug: "delta-executor-ios",
    title: "Delta Executor iOS Download — Direct Install & Sideload",
    metaTitle: "Delta Executor iOS Direct Install (USA) | Free Guide",
    description:
      "Install Delta Executor on iPhone and iPad in the US with Direct Install or sideloading. Trust the profile, restart, and play.",
    date: "2026-11-11",
    image: "/guides/ios-step-1.webp",
    label: "iOS",
  },
  {
    slug: "delta-executor-ios-performance",
    title: "Delta Executor iOS Performance — Step-by-Step Guide",
    metaTitle: "Delta iOS Performance Steps (USA) | Settings Guide",
    description:
      "Step-by-step iPhone settings: Background App Refresh, Wi-Fi & Mobile Data, and turn Low Power Mode off for smoother Delta.",
    date: "2026-11-12",
    image: "/guides/ios-step-2.webp",
    label: "iOS Steps",
  },
  {
    slug: "delta-executor-direct-install",
    title: "Delta Executor Direct Install — iOS Guide",
    metaTitle: "Delta Executor Direct Install (USA) | iOS IPA Guide",
    description:
      "Install Delta Executor on iPhone or iPad with Direct Install. Trust the enterprise profile, restart, and skip sideloading apps.",
    date: "2026-11-11",
    image: "/guides/ios-step-3.webp",
    label: "Direct Install",
  },
  {
    slug: "delta-executor-windows",
    title: "Delta Executor for PC / Windows — Emulator & Setup",
    metaTitle: "Delta Executor for PC Windows Download (USA) | Free",
    description:
      "Download Delta Executor for Windows PC in the USA. Emulator setup (MuMu/LDPlayer), antivirus tips, and key activation.",
    date: "2026-11-10",
    image: "/feature/og-square-1200x1200.webp",
    label: "Windows",
  },
  {
    slug: "delta-executor-windows-security",
    title: "Delta Executor Windows Security — Step-by-Step",
    metaTitle: "Delta Windows Security Steps | Firewall Guide",
    description:
      "Step-by-step Windows Security: open Windows Security, Firewall & network protection, then install Delta safely.",
    date: "2026-11-12",
    image: "/guides/windows-step-1.webp",
    label: "PC Steps",
  },
  {
    slug: "delta-executor-mac",
    title: "Delta Executor for Mac — DMG Install Guide",
    metaTitle: "Delta Executor Mac Download (USA) | DMG Guide",
    description:
      "Download Delta Executor for Mac in the US. Install the DMG, drag to Applications, and run on Intel or Apple Silicon.",
    date: "2026-11-10",
    image: "/feature/og-image-1200x630.webp",
    label: "Mac",
  },
  {
    slug: "delta-executor-key",
    title: "How to Get Delta Executor Key (24-Hour Key System)",
    metaTitle: "Delta Executor Key Guide (USA) | 24-Hour Key System",
    description:
      "How the Delta Executor key system works for US players. Receive Key, finish checkpoints, create your key, unlock for 24 hours.",
    date: "2026-11-09",
    image: "/guides/ios-step-4.webp",
    label: "Key",
  },
  {
    slug: "delta-executor-key-steps",
    title: "Delta Executor Key — Step-by-Step",
    metaTitle: "Delta Key Steps (USA) | Receive Key Guide",
    description:
      "Step-by-step Delta key system: Continue, complete checkpoints, copy the key, paste into Delta, then open Roblox and Play.",
    date: "2026-11-14",
    image: "/guides/key-step-4.webp",
    label: "Key Steps",
  },
  {
    slug: "delta-executor-vng",
    title: "Delta Executor VNG Download for Vietnam (Roblox VN)",
    metaTitle: "Delta Executor VNG Download | Vietnam Roblox APK",
    description:
      "Download Delta Executor VNG for Roblox Vietnam. Who should use VNG, who should avoid it, and how to install the VN APK safely.",
    date: "2026-11-09",
    image: "/feature/og-square-1200x1200.webp",
    label: "VNG",
  },
  {
    slug: "delta-executor-premium",
    title: "Delta Executor Premium — iOS & Key Explained",
    metaTitle: "Delta Executor Premium (USA) | iOS & Daily Key",
    description:
      "What Delta Premium covers for US players: skipping the daily key and more stable iOS installs when free Direct Install revokes.",
    date: "2026-11-11",
    image: "/guides/ios-step-6.webp",
    label: "Premium",
  },
  {
    slug: "delta-executor-not-compatible",
    title: "Fix: Delta Executor Isn’t Compatible With My Phone",
    metaTitle: "Delta Executor Not Compatible Fix | 32/64-bit APK",
    description:
      "Fix Delta Executor app isn’t compatible or INSTALL_FAILED_UPDATE_INCOMPATIBLE by matching arm32 vs arm64 Android builds.",
    date: "2026-11-11",
    image: "/feature/twitter-card-1200x600.webp",
    label: "Fix",
  },
  {
    slug: "delta-executor-faq",
    title: "Delta Executor FAQ — Downloads, Key, Premium, PC & VNG",
    metaTitle: "Delta Executor FAQ (USA) | Download & Key Answers",
    description:
      "FAQ for Delta Executor downloads, Direct Install, keys, Premium, Windows, Mac, VNG, and Roblox upgrade errors — all on this site.",
    date: "2026-11-11",
    image: "/feature/og-image-1200x630.webp",
    label: "FAQ",
  },
] as const;

/**
 * One-click downloads from /public/downloads on this domain.
 */
export const PLATFORMS = [
  {
    id: "android",
    name: "Android",
    blurb: "APK · tap to download",
    file: "/downloads/Delta-Executor-Android.apk",
    filename: "Delta-Executor-Android.apk",
    guide: "/delta-executor-android",
  },
  {
    id: "ios",
    name: "iOS",
    blurb: "IPA · tap to download",
    file: "/downloads/Delta-Executor-iOS.ipa",
    filename: "Delta-Executor-iOS.ipa",
    guide: "/delta-executor-ios",
  },
  {
    id: "vng",
    name: "VNG",
    blurb: "VN APK · tap to download",
    file: "/downloads/Delta-Executor-VNG.apk",
    filename: "Delta-Executor-VNG.apk",
    guide: "/delta-executor-vng",
  },
  {
    id: "windows",
    name: "Windows",
    blurb: "EXE · tap to download",
    file: "/downloads/Delta-Executor-Windows.exe",
    filename: "Delta-Executor-Windows.exe",
    guide: "/delta-executor-windows",
  },
  {
    id: "mac",
    name: "Mac",
    blurb: "DMG · tap to download",
    file: "/downloads/Delta-Executor-Mac.dmg",
    filename: "Delta-Executor-Mac.dmg",
    guide: "/delta-executor-mac",
  },
  {
    id: "direct",
    name: "Direct Install",
    blurb: "iOS · tap to download",
    file: "/downloads/Delta-Executor-Direct-Install.ipa",
    filename: "Delta-Executor-Direct-Install.ipa",
    guide: "/delta-executor-direct-install",
  },
  {
    id: "key",
    name: "Delta Key",
    blurb: "How to get your key",
    file: null,
    filename: null,
    guide: "/delta-executor-key",
  },
] as const;

export const HOME_FAQS = [
  {
    q: "What is Delta Executor?",
    a: "Delta Executor is a popular, predominantly mobile-focused (Android & iOS) third-party tool designed to run custom Lua scripts within Roblox games to alter gameplay or automate tasks. It injects scripts into the Roblox app so users can unlock features or gain advantages—similar to a mod menu. Windows, Mac, and VNG builds also exist.",
  },
  {
    q: "How does Delta Executor work?",
    a: "The executor sits as a layer on top of Roblox and injects custom Lua into the game’s process. On Android you install an APK; on iOS you use Direct Install or sideload an IPA. On PC many players run the Android APK in an emulator, or use a Windows build when published. After install you usually complete a key flow, join a game, then paste or load scripts and execute them.",
  },
  {
    q: "Where should I download Delta Executor?",
    a: "Download directly from this site (deltaexecutor.com.tr). Platform buttons start a one-click download of the installer hosted here — no third-party download links.",
  },
  {
    q: "Is Delta Executor free on Android?",
    a: "Yes. The Android build is free. After install you complete the daily key flow (about 24 hours per key) unless you use Delta Premium.",
  },
  {
    q: "How does Direct Install work on iOS?",
    a: "Direct Install lets you install Delta on iPhone or iPad without sideloading apps like ESign or KSign. After install, trust the enterprise profile under Settings → General → VPN & Device Management, then restart. Full steps are on our Direct Install guide.",
  },
  {
    q: "Can I use Delta Executor on PC?",
    a: "Yes. Many players run the Android APK inside an emulator (MuMu Player, LDPlayer, or BlueStacks). Some releases also offer a Windows build — disable conflicting antivirus before opening desktop installers.",
  },
  {
    q: "Does Delta Executor work on Mac?",
    a: "Yes. Since late 2025 Delta has shipped a Mac DMG. Download it, drag to Applications, install, then complete the key system like on mobile.",
  },
  {
    q: "What is Delta Executor VNG?",
    a: "VNG is the Vietnam-specific Delta build for Roblox VN. Use it only if you play Roblox Vietnam. Global Roblox players should stick to the standard Android/iOS builds.",
  },
  {
    q: "How long does the Delta key last?",
    a: "Free keys typically expire every 24 hours. Open Delta, tap Receive Key, finish the on-screen checkpoints, create the key, then paste it back into the app.",
  },
  {
    q: "What is Delta iOS Premium?",
    a: "Delta iOS Premium is a paid plan that makes iOS installs more stable and can reduce free Direct Install revokes. See our Premium guide on this site — avoid random sellers.",
  },
  {
    q: "Why isn’t the app compatible with my phone?",
    a: "Usually a 32-bit vs 64-bit APK mismatch. Check your CPU architecture and re-download the matching Android build from this site’s hub.",
  },
  {
    q: "Why do I get a Roblox upgrade error?",
    a: "Roblox client updates often break older executor builds. Bookmark this site and re-download the latest Delta version for your platform after each Roblox update.",
  },
  {
    q: "Is it spelled Executor or Executer?",
    a: "The correct spelling is Delta Executor. Our site is deltaexecutor.com.tr. Search results that say “Executer” are usually typos or fake mirrors — bookmark this domain.",
  },
  {
    q: "Is using Delta Executor against Roblox rules?",
    a: "Yes. Third-party executors violate the Roblox Terms of Use and can lead to permanent account bans. Roblox also patches detection often, so older builds stop working after client updates. Read our disclaimer before installing.",
  },
  {
    q: "Is Delta Executor safe to install?",
    a: "Sideloading any unofficial APK/IPA carries malware risk—especially from random mirror sites. Download only from this domain, scan files when you can, and never enter Roblox passwords on key checkpoint pages. Executor use can still get accounts banned.",
  },
] as const;

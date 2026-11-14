export type Locale = "en" | "tr" | "es" | "pt" | "ar";

export type Dictionary = {
  brandTag: string;
  playSandbox: string;
  nav: {
    key: string;
    pc: string;
    vng: string;
    mac: string;
    direct: string;
    discord: string;
    guides: string;
    about: string;
    contact: string;
    privacy: string;
    disclaimer: string;
    download: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    titlePrefix: string;
    titleBrand: string;
    subtitle: string;
    bulletFast: string;
    bulletSafe: string;
    bulletEasy: string;
    ctaPrimary: string;
    trustLine: string;
    popularDownloads: string;
    platformDownload: string;
    platformGetKey: string;
  };
  download: {
    latest: string;
    oneClick: string;
    free: string;
    download: string;
    openGuide: string;
    footerNote: string;
    readGuides: string;
    blurbs: {
      android: string;
      ios: string;
      vng: string;
      windows: string;
      mac: string;
      direct: string;
      key: string;
    };
  };
  home: {
    whyKicker: string;
    whyTitle: string;
    whyText: string;
    hubKicker: string;
    hubTitle: string;
    hubText: string;
    serpKicker: string;
    serpTitle: string;
    stepsKicker: string;
    stepsTitle: string;
    openHub: string;
    tipKicker: string;
    tipTitle: string;
    tipText: string;
    tipLink: string;
    whoKicker: string;
    whoTitle: string;
    whoText: string;
    browseGuides: string;
    faqKicker: string;
    faqTitle: string;
    faqText: string;
    ctaKicker: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    guidesKicker: string;
    guidesTitle: string;
    guidesText: string;
    readGuide: string;
  };
  footer: {
    blurb: string;
    quickLinks: string;
    platformGuides: string;
    rights: string;
  };
  language: string;
  share: string;
  faqs: { q: string; a: string }[];
};

export const LOCALES: {
  code: Locale;
  label: string;
  native: string;
  flag: string;
  dir: "ltr" | "rtl";
}[] = [
  { code: "en", label: "English", native: "English", flag: "🇺🇸", dir: "ltr" },
  { code: "tr", label: "Turkish", native: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  { code: "es", label: "Spanish", native: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "pt", label: "Portuguese", native: "Português", flag: "🇧🇷", dir: "ltr" },
  { code: "ar", label: "Arabic", native: "العربية", flag: "🇸🇦", dir: "rtl" },
];

export const DEFAULT_LOCALE: Locale = "en";

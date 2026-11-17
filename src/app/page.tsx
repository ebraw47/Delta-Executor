import Script from "next/script";
import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeBody from "@/components/HomeBody";
import HomeGuides from "@/components/HomeGuides";
import HomeStepGallery from "@/components/HomeStepGallery";
import HomeFaq from "@/components/HomeFaq";
import MarkdownContent from "@/components/MarkdownContent";
import { getMarkdown } from "@/lib/content";
import { BRAND, HOME_FAQS, IMAGES, SITE_ORIGIN } from "@/lib/siteConfig";

const TR_TITLE = "Delta Executor İndir — PC, Android ve iOS | Ücretsiz";

export const metadata: Metadata = {
  title: {
    absolute: TR_TITLE,
  },
  description: BRAND.description,
  keywords: [
    "Delta Executor indir Türkiye",
    "Delta Executor PC Windows",
    "Delta Executor Android APK",
    "Delta Executor iOS Direkt Kurulum",
    "Delta Executor Mac",
    "Delta Executor anahtar",
    "Roblox executor PC",
  ],
  alternates: {
    canonical: SITE_ORIGIN,
    languages: {
      tr: SITE_ORIGIN,
      "tr-TR": SITE_ORIGIN,
      "x-default": SITE_ORIGIN,
    },
  },
  openGraph: {
    title: TR_TITLE,
    description: BRAND.description,
    url: SITE_ORIGIN,
    siteName: BRAND.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.og}`,
        width: 1200,
        height: 630,
        alt: "PC, Android ve iOS için Delta Executor indirme",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TR_TITLE,
    description: BRAND.description,
    images: [`${SITE_ORIGIN}${IMAGES.twitter}`],
  },
};

function prepareHomeContent(raw: string) {
  let md = raw
    .replace(/\n## \*\*Frequently Asked Questions\*\*[\s\S]*$/, "")
    .replace(/\n## Frequently Asked Questions[\s\S]*$/, "")
    .replace(/\n## Sıkça Sorulan Sorular[\s\S]*$/, "")
    .replace(/^#\s+\*?\*?[^\n]+\*?\*?\s*\n+/, "")
    .replace(/\n## Explore Our Guides[\s\S]*?(?=\n## |\s*$)/, "\n")
    .replace(/\n## Stay Updated\n[\s\S]*$/, "\n")
    .trim();

  const stepsMarker = "## Delta Executor’ı adım adım indirme";
  const idx = md.indexOf(stepsMarker);
  if (idx === -1) {
    return { beforeSteps: md, afterSteps: "" };
  }

  const afterHeading = md.slice(idx + stepsMarker.length);
  const nextH2 = afterHeading.search(/\n## /);
  const intro =
    nextH2 === -1 ? afterHeading.trim() : afterHeading.slice(0, nextH2).trim();
  const beforeSteps = `${md.slice(0, idx + stepsMarker.length)}\n\n${intro}`.trim();
  const afterSteps = nextH2 === -1 ? "" : afterHeading.slice(nextH2).trim();

  return { beforeSteps, afterSteps };
}

export default function HomePage() {
  const { beforeSteps, afterSteps } = prepareHomeContent(getMarkdown("home"));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const softSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND.name,
    url: SITE_ORIGIN,
    applicationCategory: "GameApplication",
    operatingSystem: "Android, iOS, Windows, macOS",
    inLanguage: "tr",
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    description: BRAND.description,
    softwareVersion: BRAND.version,
    audience: {
      "@type": "Audience",
      geographicArea: { "@type": "Country", name: "Turkey" },
    },
  };

  return (
    <>
      <div id="download" className="scroll-mt-24">
        <HomeHero />
      </div>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softSchema) }} />
      <HomeBody
        beforeStepsContent={<MarkdownContent content={beforeSteps} />}
        afterStepsContent={afterSteps ? <MarkdownContent content={afterSteps} /> : null}
      />
      <HomeStepGallery />
      <HomeGuides />
      <HomeFaq />
    </>
  );
}

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

const US_TITLE = "Delta Executor Download for PC, Android & iOS (USA) | Free";

export const metadata: Metadata = {
  title: {
    absolute: US_TITLE,
  },
  description: BRAND.description,
  keywords: [
    "Delta Executor download USA",
    "Delta Executor PC Windows",
    "Delta Executor Android APK",
    "Delta Executor iOS Direct Install",
    "Delta Executor Mac",
    "Delta Executor key",
    "Roblox executor for PC",
  ],
  alternates: {
    canonical: SITE_ORIGIN,
    languages: {
      "en-US": SITE_ORIGIN,
      en: SITE_ORIGIN,
      "x-default": SITE_ORIGIN,
    },
  },
  openGraph: {
    title: US_TITLE,
    description: BRAND.description,
    url: SITE_ORIGIN,
    siteName: BRAND.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}${IMAGES.og}`,
        width: 1200,
        height: 630,
        alt: "Delta Executor download for Windows PC, Android, and iOS in the USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: US_TITLE,
    description: BRAND.description,
    images: [`${SITE_ORIGIN}${IMAGES.twitter}`],
  },
};

function prepareHomeContent(raw: string) {
  let md = raw
    .replace(/\n## \*\*Frequently Asked Questions\*\*[\s\S]*$/, "")
    .replace(/\n## Frequently Asked Questions[\s\S]*$/, "")
    .replace(/^#\s+\*?\*?[^\n]+\*?\*?\s*\n+/, "")
    .replace(/\n## Explore Our Guides[\s\S]*?(?=\n## |\s*$)/, "\n")
    .replace(/\n## Stay Updated\n[\s\S]*$/, "\n")
    .trim();

  const stepsMarker = "## How to download Delta Executor step by step";
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
    inLanguage: "en-US",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: BRAND.description,
    softwareVersion: BRAND.version,
    audience: {
      "@type": "Audience",
      geographicArea: { "@type": "Country", name: "United States" },
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

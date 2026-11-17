import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import { BRAND, IMAGES, SITE_ORIGIN } from "@/lib/siteConfig";

const display = Space_Grotesk({
  subsets: ["latin"],
  // Only weights we actually use (Tailwind bold=700). Missing weights → synthetic bold → CLS.
  weight: ["700"],
  // optional: under LH throttling, swap after paint was causing ~0.42 CLS on the footer.
  display: "optional",
  variable: "--font-display",
  preload: true,
  adjustFontFallback: true,
});

const body = DM_Sans({
  subsets: ["latin"],
  // Include 600 — Tailwind `font-semibold` is used widely; missing it causes CLS.
  weight: ["400", "600", "700"],
  display: "optional",
  variable: "--font-body",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#050814",
  viewportFit: "cover",
};

const TR_TITLE = "Delta Executor İndir — PC, Android ve iOS | Ücretsiz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: TR_TITLE,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  keywords: [
    "Delta Executor",
    "Delta Executor indir",
    "Delta Executor PC",
    "Delta Executor Windows",
    "Delta Executor Android",
    "Delta Executor iOS",
    "Delta Executor Mac",
    "Delta Executor anahtar",
    "Delta Executor Türkiye",
    "Roblox executor indir",
    "Delta Direkt Kurulum",
    "Delta Executor VNG",
    "deltaexecutortr.com.tr",
    "Delta Executer",
  ],
  authors: [{ name: BRAND.name }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/feature/favicon.webp", type: "image/webp", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
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
    creator: BRAND.twitter,
    images: [`${SITE_ORIGIN}${IMAGES.twitter}`],
  },
  applicationName: BRAND.name,
  category: "Games",
  classification: "Delta Executor indirme rehberleri (Türkiye)",
  other: {
    "geo.region": "TR",
    "geo.placename": "Türkiye",
    language: "Turkish",
    rating: "general",
    distribution: "global",
    target: "all",
    "revisit-after": "3 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="tr" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="content-language" content="tr" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="alternate" hrefLang="tr" href={SITE_ORIGIN} />
        <link rel="alternate" hrefLang="tr-TR" href={SITE_ORIGIN} />
        <link rel="alternate" hrefLang="x-default" href={SITE_ORIGIN} />
        {adsenseClient && (
          <>
            <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
            <Script
              id="adsense"
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
              crossOrigin="anonymous"
              strategy="lazyOnload"
            />
          </>
        )}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body className={`${body.className} site-canvas antialiased min-h-screen flex flex-col text-ink`} suppressHydrationWarning>
        <Providers>
          <SiteHeader />
          <main className="relative z-[1] flex-1">{children}</main>
          <Footer />
          <ScrollToTopWrapper />
        </Providers>

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND.name,
              url: SITE_ORIGIN,
              logo: `${SITE_ORIGIN}${IMAGES.logo}`,
              email: BRAND.email,
              description: BRAND.description,
              areaServed: { "@type": "Country", name: "Turkey" },
              availableLanguage: ["tr", "en", "es", "pt", "ar"],
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: BRAND.name,
              url: SITE_ORIGIN,
              inLanguage: "tr",
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_ORIGIN}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

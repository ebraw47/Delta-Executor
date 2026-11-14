"use client";

import FaqAccordion from "@/components/FaqAccordion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

/** Homepage FAQ — always rendered last on the page. */
export default function HomeFaq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="scroll-mt-24 section-glass border-t border-white/10 py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <p className="section-kicker">{t.home.faqKicker}</p>
        <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
          {t.home.faqTitle}
        </h2>
        <p className="mt-2 mb-8 text-ink-mute">{t.home.faqText}</p>
        <FaqAccordion faqs={t.faqs} />
      </div>
    </section>
  );
}

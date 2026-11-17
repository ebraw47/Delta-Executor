"use client";

import StepGallery from "@/components/StepGallery";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  IOS_PERFORMANCE_STEPS,
  KEY_SYSTEM_STEPS,
  WINDOWS_SECURITY_STEPS,
} from "@/lib/siteConfig";

/** Homepage step galleries — copy follows selected language. */
export default function HomeStepGallery() {
  const { t } = useLanguage();

  return (
    <>
      <StepGallery
        id="ios-steps"
        kicker={t.galleries.ios.kicker}
        title={t.galleries.ios.title}
        description={t.galleries.ios.description}
        steps={IOS_PERFORMANCE_STEPS}
        href="/delta-executor-ios-performance"
        linkLabel={t.galleries.ios.linkLabel}
        maxWidthClass="max-w-[280px]"
        columnsClass="sm:grid-cols-2 lg:grid-cols-3"
        priorityCount={1}
      />

      <StepGallery
        id="windows-steps"
        kicker={t.galleries.windows.kicker}
        title={t.galleries.windows.title}
        description={t.galleries.windows.description}
        steps={WINDOWS_SECURITY_STEPS}
        href="/delta-executor-windows-security"
        linkLabel={t.galleries.windows.linkLabel}
        maxWidthClass="max-w-full"
        columnsClass="sm:grid-cols-2"
      />

      <StepGallery
        id="key-steps"
        kicker={t.galleries.key.kicker}
        title={t.galleries.key.title}
        description={t.galleries.key.description}
        steps={KEY_SYSTEM_STEPS}
        href="/delta-executor-key-steps"
        linkLabel={t.galleries.key.linkLabel}
        maxWidthClass="max-w-[300px]"
        columnsClass="sm:grid-cols-2 lg:grid-cols-3"
      />
    </>
  );
}

"use client";

import DownloadLink from "@/components/DownloadLink";
import { PLATFORM_ICONS } from "@/components/PlatformIcons";
import { BRAND, PLATFORMS } from "@/lib/siteConfig";

type PlatformId = (typeof PLATFORMS)[number]["id"];

export default function DownloadButton({
  platformId,
  className = "",
  label,
}: {
  platformId: PlatformId;
  className?: string;
  label?: string;
}) {
  const platform = PLATFORMS.find((p) => p.id === platformId);
  if (!platform?.file || !platform.filename) return null;

  return (
    <DownloadLink
      href={platform.file}
      filename={platform.filename}
      className={`inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-bold uppercase tracking-wide text-navy-950 transition hover:opacity-90 focus-ring ${className}`}
      aria-label={`Download ${BRAND.name} for ${platform.name}`}
    >
      <span className="flex h-6 w-6 items-center justify-center [&>svg]:h-5 [&>svg]:w-5">
        {PLATFORM_ICONS[platformId]}
      </span>
      {label || `Download ${platform.name}`}
    </DownloadLink>
  );
}

import Link from "next/link";
import { BRAND, IMAGES } from "@/lib/siteConfig";

/** Server-rendered header logo — stays visible even if Header client hydrates late. */
export default function HeaderLogo() {
  return (
    <Link
      href="/"
      className="flex min-w-0 shrink-0 items-center"
      aria-label={`${BRAND.name} home`}
    >
      <img
        src={IMAGES.headerLogo}
        alt={`${BRAND.name} logo`}
        width={1024}
        height={358}
        decoding="async"
        fetchPriority="high"
        className="h-9 w-auto max-w-[min(200px,58vw)] object-contain object-left sm:h-10 sm:max-w-[240px] md:h-11 md:max-w-[280px] lg:h-12 lg:max-w-[300px]"
      />
    </Link>
  );
}

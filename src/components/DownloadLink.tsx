"use client";

import type { ReactNode } from "react";

type Props = {
  href: string;
  filename: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

/**
 * Native browser download of a same-origin static file.
 * Avoids fetch→blob so large APK/IPA/EXE/DMG files are not loaded into memory.
 */
export default function DownloadLink({
  href,
  filename,
  className = "",
  children,
  "aria-label": ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      download={filename}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

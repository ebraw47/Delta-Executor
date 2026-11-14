"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef<number | null>(null);
  const lastRan = useRef(0);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        const now = Date.now();
        if (now - lastRan.current >= 150) {
          setIsVisible((prev) => {
            const next = scrollY > 300;
            return prev !== next ? next : prev;
          });
          lastRan.current = now;
        }
        rafId.current = null;
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => {
      window.removeEventListener("scroll", handler);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 inline-flex items-center justify-center rounded-full bg-brand p-3 text-navy-950 shadow-glow transition hover:-translate-y-0.5 focus-ring"
      aria-label="Scroll to top"
    >
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

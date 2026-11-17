import Link from "next/link";
import type { Metadata } from "next";
import { BRAND } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `Sayfa Bulunamadı - ${BRAND.name}`,
  description: `Aradığınız sayfa yok. ${BRAND.name} ana sayfasına dönün.`,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-20 text-center">
      <p className="font-display text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-white">Sayfa Bulunamadı</h1>
      <p className="mt-4 text-ink-mute">
        Aradığınız sayfa kaldırılmış, adı değişmiş veya geçici olarak kullanılamıyor olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-brand-gradient px-8 py-3 font-bold text-navy-950 transition hover:opacity-90"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

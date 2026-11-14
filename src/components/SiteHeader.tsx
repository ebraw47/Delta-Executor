import Header from "@/components/Header";
import HeaderLogo from "@/components/HeaderLogo";

/** Server shell so the logo always SSR and cannot be wiped by client Header hydration. */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070f]">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-2.5 sm:px-4 md:px-6">
        <HeaderLogo />
        <Header />
      </div>
    </header>
  );
}

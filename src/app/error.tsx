"use client";

export default function Error({
  reset,
}: {
  error?: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h2 className="mb-4 font-display text-2xl font-bold text-white">Bir şeyler ters gitti!</h2>
      <p className="mb-6 text-center text-ink-mute">
        Rahatsızlık için özür dileriz. Lütfen tekrar deneyin.
      </p>
      <button
        onClick={reset}
        className="rounded-xl bg-brand-gradient px-6 py-3 font-bold text-navy-950 transition hover:opacity-90 focus-ring"
      >
        Tekrar dene
      </button>
    </div>
  );
}

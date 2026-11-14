import Image from "next/image";
import Link from "next/link";

export type GalleryStep = {
  src: string;
  alt: string;
  caption: string;
  /** CSS aspect-ratio value so the frame matches the screenshot exactly */
  aspect: string;
};

type Props = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  steps: readonly GalleryStep[];
  href: string;
  linkLabel: string;
  /** Max width of the screenshot frame */
  maxWidthClass?: string;
  /** Grid columns */
  columnsClass?: string;
  /** How many leading images get priority (keeps LCP light) */
  priorityCount?: number;
};

/** Shared homepage step gallery — outer frame aspect matches each screenshot. */
export default function StepGallery({
  id,
  kicker,
  title,
  description,
  steps,
  href,
  linkLabel,
  maxWidthClass = "max-w-[280px]",
  columnsClass = "sm:grid-cols-2 lg:grid-cols-3",
  priorityCount = 0,
}: Props) {
  return (
    <section id={id} className="scroll-mt-24 border-y border-white/10 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-kicker">{kicker}</p>
          <h2 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-ink-mute">{description}</p>
        </div>

        <ol className={`mt-10 grid list-none gap-8 ${columnsClass}`}>
          {steps.map((step, index) => (
            <li key={step.src} className="flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-900 p-2 shadow-soft sm:p-3">
                <div
                  className={`relative mx-auto w-full overflow-hidden rounded-xl bg-navy-950 ${maxWidthClass}`}
                  style={{ aspectRatio: step.aspect }}
                >
                  <Image
                    src={step.src}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 320px"
                    className="object-contain object-top"
                    loading={index < priorityCount ? "eager" : "lazy"}
                    priority={index < priorityCount}
                  />
                </div>
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-white">
                <span className="text-brand">{String(index + 1).padStart(2, "0")}.</span>{" "}
                {step.caption.replace(/^Step \d+ — /, "")}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-mute">{step.alt}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-center">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center text-sm font-semibold text-brand transition hover:text-white"
          >
            {linkLabel}
          </Link>
        </p>
      </div>
    </section>
  );
}

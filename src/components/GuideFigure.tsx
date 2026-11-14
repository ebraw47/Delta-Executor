import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
};

/** Standalone screenshot figure for guide steps (not tables). */
export default function GuideFigure({ src, alt, caption, priority = false }: Props) {
  const isWindows = src.includes("windows-");
  const width = isWindows ? 1024 : 390;
  const height = isWindows ? 731 : 844;

  return (
    <figure className="my-6 overflow-hidden rounded-2xl border border-white/10 bg-navy-900 p-2 shadow-soft sm:p-3">
      <div
        className={`relative mx-auto w-full overflow-hidden rounded-xl bg-navy-950 ${
          isWindows ? "max-w-3xl" : "max-w-sm"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
          sizes={isWindows ? "(max-width: 768px) 100vw, 768px" : "(max-width: 640px) 100vw, 390px"}
          priority={priority}
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-white/10 px-4 py-3 text-center text-sm text-ink-mute">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

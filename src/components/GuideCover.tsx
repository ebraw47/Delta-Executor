import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
};

/** Card / article hero image — never used inside markdown tables. */
export default function GuideCover({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: Props) {
  return (
    <div
      className={`relative aspect-[16/9] overflow-hidden bg-navy-900 ${className}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top"
        priority={priority}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-navy-950/10" />
      {label ? (
        <span className="absolute bottom-3 left-3 rounded-full border border-brand/35 bg-navy-950/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}

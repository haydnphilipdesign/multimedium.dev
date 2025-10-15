import Image from "next/image";
import { cn } from "@/lib/utils";

type QuoteImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function QuoteImage({ src, alt, priority = false, className, imageClassName }: QuoteImageProps) {
  return (
    <div
      className={cn(
        "group relative flex min-h-[14rem] w-full self-start overflow-hidden rounded-[28px] border border-brand/15 bg-gradient-to-br from-brand/10 via-surface to-surface shadow-soft transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-full w-full p-6">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-contain", imageClassName)}
          sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 100vw"
        />
      </div>
    </div>
  );
}

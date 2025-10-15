import { QuoteImage } from "./quote-image";
import { cn } from "@/lib/utils";

type QuoteGridItem = {
  src: string;
  alt: string;
};

type QuoteGridProps = {
  items: QuoteGridItem[];
  className?: string;
  imageClassName?: string;
};

function getItemClass(index: number, total: number) {
  const base = "min-h-[220px]";

  if (total <= 2) {
    return base;
  }

  if (index === 0) {
    return cn(base, "md:row-span-2 md:self-stretch");
  }

  const isOdd = index % 2 !== 0;
  return cn(base, isOdd ? "md:mt-12 lg:mt-16" : "md:-mt-6 lg:-mt-12");
}

export function QuoteGrid({ items, className, imageClassName }: QuoteGridProps) {
  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "grid content-start gap-6 md:auto-rows-[minmax(14rem,1fr)] md:grid-cols-2 lg:grid-cols-3",
        items.length === 1 && "md:grid-cols-1 lg:grid-cols-1",
        items.length === 2 && "lg:grid-cols-2",
        className
      )}
    >
      {items.map((item, index) => (
        <QuoteImage
          key={item.src}
          src={item.src}
          alt={item.alt}
          className={getItemClass(index, items.length)}
          imageClassName={imageClassName}
        />
      ))}
    </div>
  );
}
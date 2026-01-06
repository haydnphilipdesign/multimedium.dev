"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TocItem = {
  id: string;
  title: string;
  level: number;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((e) => e.isIntersecting);
        if (entry?.target.id) {
          setActiveId(entry.target.id);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 1]
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <aside className="sticky top-24 hidden max-h-[70vh] min-w-[240px] flex-col rounded-3xl border border-surface-muted bg-surface/50 px-5 py-6 text-sm text-ink-subtle shadow-soft backdrop-blur lg:flex">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink">On this page</p>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id} className={cn(item.level === 3 && "pl-4")}> 
            <Link
              href={`#${item.id}`}
              className={cn(
                "transition-colors hover:text-brand",
                activeId === item.id ? "font-semibold text-brand" : "text-ink-subtle"
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

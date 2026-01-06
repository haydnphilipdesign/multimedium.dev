import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buildPrismBackground } from "@/lib/visual";

export function CaseStudyCard({ study, className }: { study: CaseStudy; className?: string }) {
  const heroMetric = study.metrics[0];

  return (
    <Link
      href={`/work/${study.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand/40",
        className
      )}
    >
      <div
        aria-hidden
        className="relative h-44 overflow-hidden border-b border-surface-muted"
        style={{ backgroundImage: buildPrismBackground(study.slug) }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.30))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.55))]" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 pb-5">
          <Badge variant="secondary" className="bg-surface/70">
            {study.industry}
          </Badge>
          {heroMetric ? (
            <span className="font-mono text-xs text-ink-subtle">
              {heroMetric.label}: <span className="text-ink">{heroMetric.value}</span>
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-ink">{study.title}</h3>
          <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-muted bg-surface/60 text-ink-subtle transition group-hover:border-brand/40 group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ink-subtle">{study.summary}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {study.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="rounded-full border border-surface-muted bg-surface/50 px-3 py-1 text-xs text-ink-subtle"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}


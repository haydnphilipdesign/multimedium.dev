import Link from "next/link";
import { CalendarDays, Clock3, ArrowUpRight } from "lucide-react";
import type { BlogPostSummary } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export function BlogCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-surface-muted bg-surface/50 px-6 py-6 shadow-soft transition hover:-translate-y-1 hover:border-brand/40"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary" className="bg-surface/60">
            {post.category}
          </Badge>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-muted bg-surface/50 text-ink-subtle transition group-hover:border-brand/40 group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-xl font-semibold text-ink">{post.title}</h3>
          <p className="text-sm leading-relaxed text-ink-subtle">{post.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 text-xs text-ink-subtle">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
          {post.readingTime}
        </span>
      </div>
    </Link>
  );
}

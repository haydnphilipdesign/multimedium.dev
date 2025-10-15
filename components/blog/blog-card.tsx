import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import type { BlogPostSummary } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function BlogCard({ post }: { post: BlogPostSummary }) {
  return (
    <Card className="flex h-full flex-col justify-between gap-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="space-y-4">
        <Badge variant="secondary">{post.category}</Badge>
        <Link href={`/blog/${post.slug}`} className="block space-y-2">
          <h3 className="font-display text-xl font-semibold text-ink">{post.title}</h3>
          <p className="text-sm text-ink-subtle">{post.description}</p>
        </Link>
      </div>
      <div className="flex items-center justify-between text-xs text-ink-subtle">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
          {post.readingTime}
        </span>
      </div>
    </Card>
  );
}

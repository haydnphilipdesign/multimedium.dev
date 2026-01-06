import Link from "next/link";
import Script from "next/script";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPrismBackground } from "@/lib/visual";
import { getAllPosts } from "@/lib/mdx";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogCard } from "@/components/blog/blog-card";

export const metadata = createMetadata({
  title: "Notes",
  description: `Writing on design, development, conversion, and systems from ${siteConfig.owner} at Multimedium.`,
  path: "/blog"
});

type BlogPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getAllPosts();
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Notes", path: "/blog" }
  ]);

  const uniqueCategories = Array.from(new Set(posts.map((post) => post.category))).sort();
  const categoryParam = typeof searchParams?.category === "string" ? searchParams.category : undefined;
  const activeCategory = uniqueCategories.includes(categoryParam ?? "") ? categoryParam! : "All";
  const filteredPosts = activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);
  const categories = ["All", ...uniqueCategories];

  return (
    <div className="container space-y-12 py-16 md:py-20">
      <Script
        id="breadcrumb-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ backgroundImage: buildPrismBackground("blog") }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

        <div className="relative max-w-3xl space-y-5">
          <Badge variant="secondary" className="w-fit bg-surface/60">
            Notes
          </Badge>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Ideas you can actually ship
          </h1>
          <p className="text-base text-ink-subtle md:text-lg">
            Practical writing on design systems, conversion, performance, and building calmer workflows.
          </p>
          <Button asChild variant="ghost" className="w-fit px-0 text-brand hover:bg-transparent hover:text-ink">
            <Link href="/contact">
              Want help applying this? <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </MotionSection>

      <MotionSection className="flex flex-wrap items-center gap-3" delay={0.12}>
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const href = category === "All" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`;
          return (
            <Button key={category} asChild size="sm" variant={isActive ? "default" : "outline"}>
              <Link href={href}>{category}</Link>
            </Button>
          );
        })}
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" delay={0.16}>
        {filteredPosts.length ? (
          filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)
        ) : (
          <p className="text-sm text-ink-subtle">
            No posts in this category yet. Choose another filter or check back soon.
          </p>
        )}
      </MotionSection>
    </div>
  );
}


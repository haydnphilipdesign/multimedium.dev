import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { HeroParallaxBackground } from "@/components/hero-parallax";

export const metadata = createMetadata({
  title: "Blog & Resources",
  description:
    "Practical insights on web design, SEO, and HOA website strategy from Multimedium.dev. Actionable guidance for small businesses and community associations.",
  path: "/blog"
});

type BlogPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const posts = await getAllPosts();
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" }
  ]);

  const uniqueCategories = Array.from(new Set(posts.map((post) => post.category))).sort();
  const categoryParam = typeof searchParams?.category === "string" ? searchParams.category : undefined;
  const activeCategory = uniqueCategories.includes(categoryParam ?? "") ? categoryParam! : "All";
  const filteredPosts = activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory);
  const categories = ["All", ...uniqueCategories];

  return (
    <div className="container space-y-14 py-20">
      <Script
        id="breadcrumb-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MotionSection className="relative mx-auto flex max-w-3xl flex-col gap-5 text-center">
        <HeroParallaxBackground />
        <Badge variant="secondary">Insights</Badge>
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Guidance for SMBs and community associations
        </h1>
        <p className="text-lg text-ink-subtle">
          Articles, resources, and playbooks from {siteConfig.owner} to help you launch, optimize, and keep your digital presence humming—from board communication templates to small business SEO checklists.
        </p>
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

      <MotionSection className="grid gap-6 md:grid-cols-3" delay={0.15}>
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



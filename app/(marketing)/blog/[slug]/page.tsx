import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { buildPrismBackground } from "@/lib/visual";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";
import { BlogCard } from "@/components/blog/blog-card";
import { MotionSection } from "@/components/motion-section";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return createMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.frontmatter.heroImage ? `${siteConfig.url}${post.frontmatter.heroImage}` : undefined,
    publishedTime: post.frontmatter.date
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Notes", path: "/blog" },
    { name: post.frontmatter.title, path: `/blog/${post.slug}` }
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: siteConfig.owner
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    ...(post.frontmatter.heroImage
      ? {
          image: {
            "@type": "ImageObject",
            url: `${siteConfig.url}${post.frontmatter.heroImage}`
          }
        }
      : {})
  };

  const relatedByCategory = allPosts
    .filter((item) => item.slug !== post.slug && item.category === post.frontmatter.category)
    .slice(0, 3);

  const remainingSlots = 3 - relatedByCategory.length;
  const additionalPosts = allPosts
    .filter((item) => item.slug !== post.slug && item.category !== post.frontmatter.category)
    .slice(0, remainingSlots);

  const relatedPosts = [...relatedByCategory, ...additionalPosts].slice(0, 3);

  return (
    <div className="relative">
      <ReadingProgress />

      <div className="container space-y-10 py-14 md:py-20">
        <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-10 shadow-soft md:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{ backgroundImage: buildPrismBackground(post.slug) }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

          <header className="relative max-w-3xl space-y-4">
            <Badge variant="secondary" className="w-fit bg-surface/60">
              {post.frontmatter.category}
            </Badge>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              {post.frontmatter.title}
            </h1>
            <p className="text-sm text-ink-subtle">
              Published {formatDate(post.frontmatter.date)} • {post.readingTime}
            </p>
          </header>
        </MotionSection>

        <div className="flex flex-col gap-12 lg:flex-row">
          <article className="min-w-0 flex-1">
            <div id="post-content" className="prose prose-slate max-w-none dark:prose-invert">
              {post.content}
            </div>
          </article>

          <TableOfContents items={post.headings} />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-4 rounded-3xl border border-surface-muted bg-surface/50 px-8 py-10 shadow-soft">
            <h2 className="font-display text-2xl font-semibold text-ink">Get new notes in your inbox</h2>
            <p className="text-sm text-ink-subtle">
              Monthly updates on design systems, conversion, and performance. No spam—just ship-ready ideas.
            </p>
            <NewsletterSignup tag={post.frontmatter.category} />
          </section>

          {relatedPosts.length ? (
            <section className="space-y-4 rounded-3xl border border-surface-muted bg-surface/50 px-6 py-8 shadow-soft">
              <h2 className="font-display text-xl font-semibold text-ink">Related</h2>
              <div className="grid gap-4">
                {relatedPosts.map((related) => (
                  <BlogCard key={related.slug} post={related} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>

      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${post.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </div>
  );
}


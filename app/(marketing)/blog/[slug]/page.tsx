import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";
import { BlogCard } from "@/components/blog/blog-card";

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
    return {
      title: "Post not found"
    };
  }

  const metadata = createMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${post.slug}`,
    type: "article",
    image: post.frontmatter.heroImage ? `${siteConfig.url}${post.frontmatter.heroImage}` : undefined,
    publishedTime: post.frontmatter.date
  });

  return metadata;
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
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
      <div className="container flex flex-col gap-12 py-16 lg:flex-row">
        <article className="flex-1">
          <header className="space-y-4">
            <Badge variant="secondary">{post.frontmatter.category}</Badge>
            <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
              {post.frontmatter.title}
            </h1>
            <p className="text-sm text-ink-subtle">
              Published {formatDate(post.frontmatter.date)} · {post.readingTime}
            </p>
          </header>
          <div id="post-content" className="prose prose-slate mt-10 max-w-none dark:prose-invert">
            {post.content}
          </div>
        </article>

        <TableOfContents items={post.headings} />
      </div>

      <div className="container mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <section className="space-y-4 rounded-3xl border border-brand/20 bg-brand/5 px-8 py-10 shadow-soft">
          <h2 className="font-display text-2xl font-semibold text-ink">Get more insights in your inbox</h2>
          <p className="text-sm text-ink-subtle">
            Monthly updates on web design, SEO, and HOA communication—no spam, just practical workflows you can implement.
          </p>
          <NewsletterSignup tag={post.frontmatter.category} />
        </section>
        {relatedPosts.length ? (
          <section className="space-y-4 rounded-3xl border border-surface-muted bg-surface px-6 py-8 shadow-soft">
            <h2 className="font-display text-xl font-semibold text-ink">Related reading</h2>
            <div className="grid gap-4">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </section>
        ) : null}
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

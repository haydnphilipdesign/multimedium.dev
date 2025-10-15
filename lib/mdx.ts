import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import type { ReactElement } from "react";
import readingTime from "reading-time";
import { mdxComponents } from "@/components/mdx-components";
import { slugify } from "./utils";

const BLOG_PATH = path.join(process.cwd(), "content", "blog");

export type PostFrontMatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  heroImage?: string;
};

export type BlogPostSummary = PostFrontMatter & {
  slug: string;
  readingTime: string;
};

export type BlogPost = {
  slug: string;
  frontmatter: PostFrontMatter;
  content: ReactElement;
  readingTime: string;
  headings: Array<{ id: string; title: string; level: number }>;
};

function assertFrontMatter(data: Record<string, unknown>, slug: string): PostFrontMatter {
  const required = ["title", "description", "date", "category"] as const;
  for (const field of required) {
    if (!data[field]) {
      throw new Error(`Missing "${field}" in front matter for ${slug}.mdx`);
    }
  }
  return {
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    category: String(data.category),
    heroImage: data.heroImage ? String(data.heroImage) : undefined
  };
}

function extractHeadings(source: string) {
  const headingRegex = /^(##+)\s+(.*)$/gm;
  const headings: Array<{ id: string; title: string; level: number }> = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(source)) !== null) {
    const hashes = match[1];
    const title = match[2].trim();
    const level = Math.min(6, hashes.length);
    if (level < 2 || level > 3) continue;
    headings.push({
      id: slugify(title),
      title,
      level
    });
  }

  return headings;
}

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  const entries = await fs.readdir(BLOG_PATH);
  const mdxFiles = entries.filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = await fs.readFile(path.join(BLOG_PATH, file), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = assertFrontMatter(data, slug);
      const stats = readingTime(content, { wordsPerMinute: 225 });
      return {
        slug,
        ...frontmatter,
        readingTime: `${Math.max(1, Math.ceil(stats.minutes))} min read`
      };
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { content: body } = matter(raw);
    const headings = extractHeadings(body);
    const stats = readingTime(body, { wordsPerMinute: 225 });

    const { compileMDX } = await import("next-mdx-remote/rsc");
    const remarkGfm = (await import("remark-gfm")).default;
    const rehypeSlug = (await import("rehype-slug")).default;
    const rehypeAutolinkHeadings = (await import("rehype-autolink-headings")).default;

    const { content, frontmatter } = await compileMDX<PostFrontMatter>({
      source: raw,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
                properties: {
                  className: ["no-underline"]
                }
              }
            ]
          ]
        }
      }
    });

    const meta = assertFrontMatter(frontmatter, slug);

    return {
      slug,
      frontmatter: meta,
      content,
      readingTime: `${Math.max(1, Math.ceil(stats.minutes))} min read`,
      headings
    };
  } catch (error) {
    console.error(`Failed to load MDX for slug "${slug}":`, error);
    return null;
  }
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllPosts } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPages = [
    "",
    "/services",
    "/pricing",
    "/work",
    "/about",
    "/blog",
    "/contact",
    "/legal/privacy",
    "/legal/terms"
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now
  }));

  const posts = await getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticPages, ...blogPages];
}

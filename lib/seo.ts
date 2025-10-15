import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.phoneInternational,
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Northeastern Pennsylvania"
    },
    {
      "@type": "AdministrativeArea",
      name: "United States"
    }
  ],
  image: `${siteConfig.url}/opengraph-image`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.country
  },
  sameAs: Object.values(siteConfig.social).filter(Boolean),
  founder: {
    "@type": "Person",
    name: siteConfig.owner
  },
  serviceType: siteConfig.focusAreas
};

type MetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

export function createMetadata({
  title,
  description,
  path,
  type = "website",
  image = `${siteConfig.url}/opengraph-image`,
  publishedTime,
  modifiedTime
}: MetadataOptions): Metadata {
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  const normalizedTitle = title.trim();
  const titleWithBrand = normalizedTitle.includes(siteConfig.name) ? normalizedTitle : `${normalizedTitle} | ${siteConfig.name}`;

  return {
    title: titleWithBrand,
    description,
    openGraph: {
      type,
      url,
      title: titleWithBrand,
      description,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: titleWithBrand
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: titleWithBrand,
      description
    },
    alternates: {
      canonical: url
    }
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`
    }))
  };
}


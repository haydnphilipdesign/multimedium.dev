import Link from "next/link";
import Script from "next/script";
import { ArrowRight, BarChart3, CheckCircle, Megaphone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPrismBackground } from "@/lib/visual";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Small Business Websites",
  description:
    "Conversion-focused websites for small teams that need to look premium, capture leads, and grow with a clean system.",
  path: "/small-business"
});

const outcomes = [
  {
    title: "Look established fast",
    description:
      "Messaging + design sprints that make your offer feel clear, confident, and premium.",
    stat: "Typical timeline: 4–6 weeks"
  },
  {
    title: "Capture every lead",
    description:
      "Strategic CTAs, forms, and follow-ups so inquiries don’t disappear into inbox chaos.",
    stat: "Funnels + tracking included"
  },
  {
    title: "Know what works",
    description:
      "Dashboards and iteration so you can double down on the channels and pages that convert.",
    stat: "Monthly/quarterly sprints available"
  }
];

const pillars = [
  {
    icon: Megaphone,
    title: "Positioning + copy",
    description: "Workshop value props, offers, and proof so visitors feel safe choosing you."
  },
  {
    icon: ShieldCheck,
    title: "Design + build",
    description: "Responsive Next.js builds with accessible UI patterns and fast load times."
  },
  {
    icon: BarChart3,
    title: "Optimization",
    description: "Landing pages, SEO improvements, and conversion experiments that keep improving results."
  }
];

export default function SmallBusinessPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Small Business Websites", path: "/small-business" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Small Business Website Design & Development",
    description:
      "Conversion-focused website design and development for small businesses and service providers.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: [siteConfig.location.region, siteConfig.location.country],
    serviceType: ["Web design", "Web development", "Local SEO", "Conversion optimization"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pricing#plans`
    }
  };

  return (
    <div className="container space-y-14 py-16 md:py-20">
      <Script
        id="breadcrumb-small-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Script
        id="service-schema-small-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ backgroundImage: buildPrismBackground("small-business") }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

        <div className="relative max-w-3xl space-y-5">
          <Badge variant="secondary" className="w-fit bg-surface/60">
            Small Business Websites
          </Badge>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Make your business feel premium—and stay booked
          </h1>
          <p className="text-base text-ink-subtle md:text-lg">
            A conversion-focused website that earns trust fast, loads fast, and makes contacting you feel like the obvious next step.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Start a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/work">
                See examples <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-3" delay={0.1}>
        {outcomes.map((item) => (
          <div key={item.title} className="rounded-3xl border border-surface-muted bg-surface/50 px-7 py-7 shadow-soft">
            <p className="font-display text-xl font-semibold text-ink">{item.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{item.description}</p>
            <p className="mt-5 font-mono text-xs text-ink-subtle">{item.stat}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-6 rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft md:grid-cols-2" delay={0.18}>
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">What you get</h2>
          <p className="text-base text-ink-subtle">
            Built to be edited, extended, and iterated without the site turning into a mess.
          </p>
          <ul className="space-y-3 text-sm text-ink">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
              One partner for strategy, design, and development
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
              A reusable design system + components
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
              Analytics + conversion tracking baked in
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
              SEO foundations + launch checklist
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-surface-muted bg-surface/40 px-7 py-7">
              <div className="flex items-center gap-3">
                <pillar.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                <p className="font-display text-xl font-semibold text-ink">{pillar.title}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{pillar.description}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 text-center shadow-soft" delay={0.26}>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
          Ready to upgrade your site?
        </h2>
        <p className="mt-4 text-base text-ink-subtle">
          Tell me what you&apos;re building—I&apos;ll reply with a plan and timeline within one business day.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">Start the conversation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/pricing#plans">Compare plans</Link>
          </Button>
        </div>
      </MotionSection>
    </div>
  );
}


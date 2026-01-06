import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, BadgeCheck, Layers, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPrismBackground } from "@/lib/visual";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = createMetadata({
  title: `About ${siteConfig.owner}`,
  description:
    "Meet Haydn — a designer-developer building conversion-focused websites, design systems, and portals for teams that need to look premium and ship fast.",
  path: "/about"
});

const values = [
  {
    icon: Layers,
    title: "Design × engineering",
    description:
      "A cohesive system beats a pretty page. Every build connects narrative, UI, and code so the site stays clean as you grow."
  },
  {
    icon: BadgeCheck,
    title: "Performance + accessibility",
    description:
      "Speed and accessibility aren’t “nice-to-haves.” They’re trust signals—and they keep your site usable for everyone."
  },
  {
    icon: Sparkles,
    title: "Momentum over perfectionism",
    description:
      "Ship the right version fast, then iterate what converts. The goal is outcomes, not endless design loops."
  }
];

const toolbox = [
  "Next.js • TypeScript",
  "Tailwind CSS • Component systems",
  "Framer Motion • Micro-interactions",
  "Sanity • Contentful • MDX",
  "Vercel • Supabase",
  "Resend • Postmark • Twilio",
  "Zapier • Make.com • n8n",
  "GA4 • Search Console • Dashboards"
];

export default function AboutPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }
  ]);

  return (
    <div className="container space-y-14 py-16 md:py-20">
      <Script
        id="breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 p-8 shadow-soft md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ backgroundImage: buildPrismBackground("about") }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="bg-surface/60">
                About
              </Badge>
              <span className="inline-flex items-center gap-2 rounded-full border border-surface-muted bg-surface/50 px-4 py-1 text-xs text-ink-subtle">
                <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                {siteConfig.location.city}, {siteConfig.location.region} • Remote friendly
              </span>
            </div>

            <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
              I’m {siteConfig.owner}.
              <br />
              I design and build sites that feel inevitable.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-ink-subtle md:text-lg">
              Multimedium is my solo practice—built around one simple idea: the best work happens when strategy, design, and development live in the same feedback loop. You get fewer meetings, faster decisions, and a site that stays consistent as you ship new pages.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Start a project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/work">
                  See case studies <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-56 w-56 overflow-hidden rounded-[32px] border border-white/10 bg-surface/40 shadow-soft md:h-72 md:w-72">
              <Image
                src="/haydn.jpg"
                alt="Haydn"
                fill
                sizes="(min-width: 768px) 288px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-3" delay={0.12}>
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-3xl border border-surface-muted bg-surface/50 px-7 py-7 shadow-soft"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-surface-muted bg-surface/50 text-brand">
              <value.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-ink">{value.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{value.description}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-10 rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft lg:grid-cols-[1.1fr_0.9fr]" delay={0.2}>
        <div className="space-y-4">
          <Badge className="w-fit">How I work</Badge>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Clear deliverables, no agency fog
          </h2>
          <p className="text-base text-ink-subtle">
            You’ll always know what’s happening, what you need to review, and what comes next. I keep projects moving with weekly checkpoints and simple decision docs—so momentum doesn’t die in Slack threads.
          </p>
          <ul className="grid gap-2 text-sm text-ink-subtle">
            <li>• Short workshop to lock positioning + page plan</li>
            <li>• High-fidelity design with real copy (not lorem ipsum)</li>
            <li>• Component build + CMS / editing workflow</li>
            <li>• Launch checklist, analytics, and next-step roadmap</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold text-ink">Toolbox</h3>
          <p className="text-sm text-ink-subtle">
            Flexible with your stack, opinionated about quality.
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {toolbox.map((item) => (
              <span
                key={item}
                className="rounded-full border border-surface-muted bg-surface/50 px-3 py-1 text-xs text-ink-subtle"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}


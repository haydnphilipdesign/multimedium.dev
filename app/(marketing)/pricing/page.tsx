import Link from "next/link";
import Script from "next/script";
import { ArrowRight, CheckCircle } from "lucide-react";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { buildPrismBackground } from "@/lib/visual";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "Straightforward pricing for website builds, funnels, retainers, and portals. Pick the engagement model that fits your team.",
  path: "/pricing"
});

const plans = [
  {
    name: "Starter",
    build: "$500–$1,000",
    care: "$150–$200/mo",
    summary: "Launch fast with a beautiful small site, hosting, updates, and foundational SEO.",
    features: [
      "Discovery call + content planning",
      "Custom design system with copy support",
      "Uptime monitoring + security patching",
      "Monthly analytics snapshots"
    ]
  },
  {
    name: "Growth",
    build: "$3,000+",
    care: "$199/mo",
    summary: "A full-featured site with blog, lead funnels, and quarterly optimization.",
    features: [
      "Component-driven Next.js build",
      "Blog setup + editorial calendar kickoff",
      "CRM + automation integrations",
      "Quarterly strategy + conversion reviews"
    ],
    badge: "Most popular",
    highlighted: true
  },
  {
    name: "Scale",
    build: "Custom",
    care: "Retainer",
    summary: "Advanced integrations, multi-brand sites, portals, or product-led growth work.",
    features: [
      "Portals, dashboards, or AI concierge",
      "Accessibility + security reviews",
      "Dedicated sprint cadence + roadmap",
      "Documentation, training, and support"
    ]
  }
];

const portalPlan = {
  upfront: "$6,499 one-time",
  hybrid: "$2,499 upfront + $349/mo (24-month lock)",
  inclusions: [
    "Member/resident portal with secure logins",
    "Document library + announcements",
    "Concierge content posting (send it, it’s live)",
    "Support inbox with next-business-day response",
    "Quarterly accessibility + SEO checks"
  ]
};

export default function PricingPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" }
  ]);

  return (
    <div className="container space-y-14 py-16 md:py-20">
      <Script
        id="breadcrumb-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ backgroundImage: buildPrismBackground("pricing") }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

        <div className="relative max-w-3xl space-y-5">
          <Badge variant="secondary" className="w-fit bg-surface/60">
            Pricing
          </Badge>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Clear options, real timelines
          </h1>
          <p className="text-base text-ink-subtle md:text-lg">
            Choose a build model that matches your urgency and internal bandwidth. Every option includes performance, accessibility, and a system you can keep evolving.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Get a tailored quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#plans">
                View plans <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection id="plans" className="grid gap-6 lg:grid-cols-3" delay={0.1}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={[
              "relative rounded-3xl border bg-surface/50 px-7 py-7 shadow-soft",
              plan.highlighted ? "border-brand/40" : "border-surface-muted"
            ].join(" ")}
          >
            {plan.badge ? (
              <span className="absolute right-5 top-5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-brand-foreground">
                {plan.badge}
              </span>
            ) : null}
            <h2 className="font-display text-2xl font-semibold text-ink">{plan.name}</h2>
            <p className="mt-2 text-sm text-ink-subtle">{plan.summary}</p>

            <div className="mt-5 grid gap-2 rounded-2xl border border-surface-muted bg-surface/40 px-4 py-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-ink-subtle">Build</span>
                <span className="font-semibold text-ink">{plan.build}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-subtle">Care</span>
                <span className="font-semibold text-ink">{plan.care}</span>
              </div>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-ink">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button asChild variant={plan.highlighted ? "default" : "outline"} className="w-full">
                <Link href="/contact">Start with {plan.name}</Link>
              </Button>
            </div>
          </div>
        ))}
      </MotionSection>

      <MotionSection id="hoa" className="grid gap-8 rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft lg:grid-cols-[1.15fr_0.85fr]" delay={0.18}>
        <div className="space-y-4">
          <Badge className="w-fit">Portals & Associations</Badge>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Portal build + concierge support
          </h2>
          <p className="text-base text-ink-subtle">
            For associations, communities, and organizations that need secure logins, document libraries, and reliable communication. Includes concierge support so updates don’t fall on volunteers.
          </p>
          <div className="grid gap-3 text-sm">
            <div className="rounded-2xl border border-surface-muted bg-surface/40 px-5 py-4">
              <p className="text-ink-subtle">One-time build</p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">{portalPlan.upfront}</p>
            </div>
            <div className="rounded-2xl border border-surface-muted bg-surface/40 px-5 py-4">
              <p className="text-ink-subtle">Hybrid subscription</p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">{portalPlan.hybrid}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/contact">Discuss a portal</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/hoa">See portal details</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-surface-muted bg-surface/40 px-7 py-7">
          <h3 className="font-display text-2xl font-semibold text-ink">Included</h3>
          <ul className="mt-5 space-y-3 text-sm text-ink">
            {portalPlan.inclusions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft" delay={0.26}>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">FAQ</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-ink">Can you work with our existing content?</h3>
            <p className="mt-2 text-sm text-ink-subtle">
              Yes. I’ll audit what you have, identify gaps, and help reshape the copy so it reads like a premium offer—not a list of features.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink">Do you do WordPress or Webflow?</h3>
            <p className="mt-2 text-sm text-ink-subtle">
              Most builds ship in Next.js, but I’ll recommend the right tool for your team’s editing needs and long-term maintainability.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink">What do you need from us?</h3>
            <p className="mt-2 text-sm text-ink-subtle">
              One main point of contact, quick feedback on weekly checkpoints, and any brand assets/content you already have.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink">What if we need ongoing help?</h3>
            <p className="mt-2 text-sm text-ink-subtle">
              Care plans cover maintenance, updates, and iteration—plus optional growth sprints for SEO and conversion work.
            </p>
          </div>
        </div>
      </MotionSection>

      <CtaBanner />
    </div>
  );
}


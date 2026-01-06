import Link from "next/link";
import Script from "next/script";
import { ArrowRight, Bot, Layout, LineChart, ShieldCheck, Workflow } from "lucide-react";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { buildPrismBackground } from "@/lib/visual";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta-banner";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Strategy-led web design and development, conversion systems, and growth retainers. Built for teams that want to look premium and ship fast.",
  path: "/services"
});

const offers = [
  {
    icon: Layout,
    title: "Website build / redesign",
    description:
      "A premium, conversion-focused website with a reusable design system and a clean Next.js build behind it.",
    bullets: [
      "Positioning workshop + page plan",
      "High-fidelity design with real copy",
      "Next.js build, SEO foundations, analytics"
    ],
    timeline: "Typical timeline: 4–6 weeks",
    cta: { label: "See work", href: "/work" }
  },
  {
    icon: Workflow,
    title: "Landing pages + funnels",
    description:
      "Campaign-ready pages, lead magnets, and contact flows that make taking the next step feel effortless.",
    bullets: [
      "Offer + messaging refinement",
      "Conversion-first layout + copy support",
      "Forms, tracking, and follow-up automation"
    ],
    timeline: "Typical timeline: 1–3 weeks",
    cta: { label: "View pricing", href: "/pricing" }
  },
  {
    icon: LineChart,
    title: "Growth retainers",
    description:
      "SEO, content, and conversion experiments on a predictable cadence—so your site keeps improving after launch.",
    bullets: [
      "Monthly/quarterly experiments + reporting",
      "SEO roadmap + landing pages",
      "Design + dev support as you grow"
    ],
    timeline: "Ideal cadence: monthly or quarterly",
    cta: { label: "Start a conversation", href: "/contact" }
  }
];

const extras = [
  {
    icon: Bot,
    title: "Automation & portals",
    description:
      "Member portals, internal dashboards, AI chat, and workflow automation for teams that need more than marketing pages."
  },
  {
    icon: ShieldCheck,
    title: "Accessibility & performance audits",
    description:
      "If you already have a site, I’ll audit UX, accessibility, and performance—and hand you an actionable punch list."
  }
];

export default function ServicesPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" }
  ]);

  return (
    <div className="container space-y-14 py-16 md:py-20">
      <Script
        id="breadcrumb-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <MotionSection className="relative overflow-hidden rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{ backgroundImage: buildPrismBackground("services") }}
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.10),rgba(0,0,0,0.35))] dark:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.70))]" />

        <div className="relative max-w-3xl space-y-5">
          <Badge variant="secondary" className="w-fit bg-surface/60">
            Services
          </Badge>
          <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-6xl">
            Design, development, and growth—built as one system
          </h1>
          <p className="text-base text-ink-subtle md:text-lg">
            Whether you need a premium marketing site, a conversion funnel, or a portal that simplifies operations, the work is built around momentum: clear deliverables, fast decisions, and a launch you can be proud of.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Start a project</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing">
                View pricing <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 lg:grid-cols-3" delay={0.1}>
        {offers.map((offer) => (
          <div key={offer.title} className="rounded-3xl border border-surface-muted bg-surface/50 px-7 py-7 shadow-soft">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-surface-muted bg-surface/50 text-brand">
              <offer.icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{offer.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{offer.description}</p>
            <ul className="mt-5 space-y-2 text-sm text-ink">
              {offer.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br from-brand via-brand-2 to-brand-3" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-xs text-ink-subtle">{offer.timeline}</p>
            <div className="mt-6">
              <Button asChild variant="outline" className="w-full">
                <Link href={offer.cta.href}>{offer.cta.label}</Link>
              </Button>
            </div>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="grid gap-6 rounded-3xl border border-surface-muted bg-surface/50 px-8 py-10 shadow-soft md:grid-cols-2" delay={0.18}>
        {extras.map((extra) => (
          <div key={extra.title} className="rounded-3xl border border-surface-muted bg-surface/40 px-7 py-7">
            <div className="flex items-center gap-3">
              <extra.icon className="h-5 w-5 text-brand" aria-hidden="true" />
              <p className="font-display text-xl font-semibold text-ink">{extra.title}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{extra.description}</p>
          </div>
        ))}
      </MotionSection>

      <MotionSection className="rounded-3xl border border-surface-muted bg-surface/50 px-8 py-12 shadow-soft" delay={0.26}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <Badge className="w-fit">Every engagement includes</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">A foundation you can build on</h2>
            <p className="text-base text-ink-subtle">
              A polished site is table stakes. The real value is a system you can evolve—pages, components, analytics, and documentation that keep things consistent.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-ink-subtle">
            <li>• Design system + reusable components (no Frankenstein pages)</li>
            <li>• SEO foundation (structure, metadata, schema where it matters)</li>
            <li>• Analytics instrumentation + conversion tracking</li>
            <li>• Performance and accessibility baseline</li>
            <li>• Launch checklist + post-launch next steps</li>
          </ul>
        </div>
      </MotionSection>

      <CtaBanner />
    </div>
  );
}


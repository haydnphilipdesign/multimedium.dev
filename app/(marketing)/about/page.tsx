import Script from "next/script";
import Image from "next/image";
import { GaugeCircle, Layers, Target } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";
import { HeroParallaxBackground } from "@/components/hero-parallax";

export const metadata = createMetadata({
  title: "About Haydn",
  description:
    "Meet Haydn from Multimedium.dev – a designer-developer hybrid delivering web design, development, marketing, and AI automation for SMBs and HOA communities.",
  path: "/about"
});

const values = [
  {
    icon: Layers,
    title: "Design × Engineering",
    description: "Great experiences happen when design and development happen in the same brain. Every engagement blends brand, UX, and code from day one."
  },
  {
    icon: GaugeCircle,
    title: "Accessible & Fast",
    description: "Performance and accessibility are guardrails, not nice-to-haves. Expect Lighthouse ≥90, WCAG 2.2 AA compliance, and modern DX."
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    description: "Projects tie to business or community metrics—bookings, lead volume, resident engagement. Reporting makes impact tangible."
  }
];

const toolStack = [
  "Next.js · TypeScript",
  "Tailwind CSS · shadcn/ui",
  "Framer Motion · Three.js",
  "Sanity · Contentful · Storyblok",
  "Supabase · PlanetScale · Prisma",
  "Resend · Postmark · Twilio",
  "Make.com · Zapier · n8n",
  "HubSpot · Pipedrive · Salesforce"
];

export default function AboutPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }
  ]);

  return (
    <div className="container space-y-16 py-20">
      <Script
        id="breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MotionSection className="relative mx-auto flex max-w-3xl flex-col gap-5 text-center">
        <HeroParallaxBackground />
        <Badge variant="secondary">Meet Haydn</Badge>
        <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
          Designer, developer, and marketing strategist in one partner
        </h1>
        <p className="text-lg text-ink-subtle">
          Multimedium.dev is the solo practice of Haydn—a web designer and engineer who helps businesses and organizations look polished, communicate clearly, and automate the busywork across the Poconos and NEPA.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="relative h-56 w-56 rounded-full bg-gradient-to-tr from-brand/60 via-blue-400/50 to-indigo-400/40 p-1.5 shadow-soft sm:h-64 sm:w-64">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-surface">
              <Image
                src="/haydn.jpg"
                alt="Haydn, founder of Multimedium.dev"
                fill
                sizes="(min-width: 640px) 256px, 224px"
                className="object-cover object-[50%_35%]"
                priority
              />
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="space-y-12" delay={0.15}>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <Badge>Haydn’s Approach</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink">
              Holistic engagements that start with listening
            </h2>
            <p className="text-base text-ink-subtle">
              Projects begin with a workshop—virtual or on-site in the Poconos—to understand your audience, business priorities, and operational realities. From there we co-create a roadmap that balances quick wins with long-term scalability.
            </p>
            <p className="text-base text-ink-subtle">
              With design, development, and marketing under one roof, handoffs disappear. You get thoughtful UX, performant code, and campaigns ready to ship—without assembling a full agency.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-56 w-full max-w-[22rem] overflow-hidden rounded-3xl border border-surface-muted shadow-soft">
              <Image
                src="/quotes/c8f98d10-a96a-4fe5-be57-8c65d3ffc75f.png"
                alt="Business card quote artwork"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center md:order-2">
            <div className="relative h-56 w-full max-w-[22rem] overflow-hidden rounded-3xl border border-surface-muted shadow-soft">
              <Image
                src="/quotes/d14c8d0c-d137-4c84-b66c-dd2794e7c6d0.png"
                alt="Business card quote artwork"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
          <div className="space-y-4 md:order-1">
            <Badge>Experience</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink">
              10+ years of digital strategy
            </h2>
            <p className="text-base text-ink-subtle">
              From hospitality groups rolling out new ordering systems to organizations modernizing member portals, the through-line is pairing real empathy for users with technical execution—and presenting progress in stakeholder-friendly language.
            </p>
            <p className="text-base text-ink-subtle">
              Partnerships extend beyond launch. Clients stick around for marketing retainers, ongoing support services, and AI enablement projects that reduce manual tasks.
            </p>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-3" delay={0.25}>
        {values.map((value) => (
          <Card key={value.title} className="space-y-4 border border-surface-muted bg-surface p-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
              <value.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <CardHeader className="p-0">
              <CardTitle className="text-xl">{value.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 text-sm text-ink-subtle">{value.description}</CardContent>
          </Card>
        ))}
      </MotionSection>

      <MotionSection className="rounded-3xl border border-surface-muted bg-surface px-8 py-10 shadow-soft" delay={0.35}>
        <h2 className="font-display text-2xl font-semibold text-ink">Toolbox</h2>
        <p className="mt-2 max-w-xl text-sm text-ink-subtle">
          Flexible with your stack, opinionated about quality. Here are the platforms and tools used most often with clients.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {toolStack.map((item) => (
            <div key={item} className="rounded-2xl border border-surface-muted bg-surface-muted px-4 py-3 text-sm text-ink">
              {item}
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-brand/20 bg-brand/5 px-8 py-10 shadow-soft" delay={0.45}>
        <h2 className="font-display text-2xl font-semibold text-ink">Let’s build what’s next</h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-subtle">
          Whether you need a fast business launch, a membership portal, or an AI-powered workflow, the next step is a quick consult call with Haydn tailored to your leadership team and goals.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-soft transition hover:bg-[#1d4fd7]" href="/contact">
            Book a Free Consult
          </a>
          <a className="rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-brand-foreground" href={`tel:${siteConfig.phoneInternational}`}>
            Call {siteConfig.phone}
          </a>
        </div>
      </MotionSection>
    </div>
  );
}






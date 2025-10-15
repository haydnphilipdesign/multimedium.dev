import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, CheckCircle, Megaphone, ShieldCheck } from "lucide-react";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Small Business Websites",
  description:
    "High-converting websites for small businesses that need trusted positioning, lead capture, and ongoing marketing support.",
  path: "/small-business"
});

const growthOutcomes = [
  {
    title: "Launch a polished presence fast",
    description:
      "Brand discovery, messaging, and design sprints produce a site that feels established—even if your team is small.",
    stat: "Typical timeline: 4–6 weeks"
  },
  {
    title: "Capture and nurture every lead",
    description:
      "Strategic CTAs, forms, and automations move inquiries into your CRM or inbox with no manual re-entry.",
    stat: "+32% qualified bookings in 90 days for service clients"
  },
  {
    title: "See what’s working",
    description:
      "Analytics dashboards and quarterly reviews show the channels and pages that convert best.",
    stat: "Monthly recap deck + Loom walkthrough"
  }
];

const servicePillars = [
  {
    icon: Megaphone,
    title: "Positioning & copy",
    description: "Workshop your value props, offers, and proof so visitors know you’re the safe choice."
  },
  {
    icon: ShieldCheck,
    title: "Design & build",
    description: "Responsive Next.js sites with accessible UI patterns, fast load times, and schema markup baked in."
  },
  {
    icon: BarChart3,
    title: "Optimization",
    description: "Content updates, landing pages, and SEO improvements that keep you ahead locally and in search."
  }
];

const launchChecklist = [
  "Brand discovery workshop + competitor review",
  "Messaging, sitemap, and wireframes signed off",
  "High-fidelity designs and staged preview",
  "Next.js build with analytics + automations",
  "QA, accessibility, and launch playbook"
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
      "Conversion-focused website design, development, and marketing support for small businesses across the Poconos and Northeastern Pennsylvania.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: [siteConfig.location.region, siteConfig.location.country],
    serviceType: ["Web design", "Web development", "Local SEO", "Marketing automation"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pricing#smb`
    }
  };

  return (
    <div className="container space-y-16 py-20">
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
      <MotionSection className="grid items-start gap-12 rounded-3xl border border-surface-muted bg-surface px-10 py-12 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge variant="secondary">Small Business Websites</Badge>
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Make your local business look established—and stay booked</h1>
          <p className="text-lg text-ink-subtle">
            Multimedium.dev turns service providers, boutiques, and professional firms into trusted brands with conversion-ready websites, SEO foundations, and automations that save time—the same polish HOA boards rely on for resident portals.
          </p>
          <ul className="grid gap-3 text-base text-ink">
            <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
              <span>One partner for discovery, design, development, and marketing support—no agency handoffs.</span>
            </li>
            <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
              <span>Copy, photography guidance, and SEO tuned to how your neighbors search and make decisions.</span>
            </li>
            <li className="group flex items-start gap-3 rounded-xl px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-surface-muted/70">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
              <span>Automations that move inquiries straight into your inbox, CRM, or team chat without manual triage.</span>
            </li>
          </ul>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact?type=smb">Book a strategy call</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/work#small-business">
                See client results
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-5">
          <div className="relative h-80 overflow-hidden rounded-3xl border border-surface-muted shadow-soft">
            <Image
              src="/quotes/c882f2ef-9088-406d-8387-adf56e1babc5.png"
              alt="Business card quote artwork"
              fill
              priority
              className="object-contain object-center"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-surface-muted/70 bg-surface/90 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-ink">Client snapshot</p>
              <p className="text-sm text-ink-subtle">HVAC service refresh → +32% booked consultations within 90 days.</p>
            </div>
          </div>
          <Card className="border border-brand/20 bg-brand/5 px-6 py-5 text-sm text-ink">
            <p className="font-semibold text-brand">Local-first partner</p>
            <p className="mt-2 text-ink-subtle">On-site sessions in the Poconos, Lehigh Valley, and Northern NJ—virtual collaboration nationwide.</p>
          </Card>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 md:grid-cols-3" delay={0.1}>
        {growthOutcomes.map((outcome) => (
          <Card key={outcome.title} className="flex h-full flex-col gap-3 border border-surface-muted bg-surface px-6 py-7 shadow-soft">
            <CardTitle className="text-xl text-ink">{outcome.title}</CardTitle>
            <CardDescription className="text-sm text-ink-subtle leading-relaxed">
              {outcome.description}
            </CardDescription>
            <p className="mt-auto text-xs uppercase tracking-wide text-brand">{outcome.stat}</p>
          </Card>
        ))}
      </MotionSection>

      <MotionSection className="rounded-3xl border border-brand/20 bg-surface px-8 py-12 shadow-soft" delay={0.18}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <h2 className="font-display text-3xl font-semibold text-ink">One partner across strategy, design, and build</h2>
            <p className="text-base text-ink-subtle">
              Skip the agency handoffs. Work directly with Haydn—product designer, developer, and marketer—who stays accountable from kickoff to growth.
            </p>
            <ul className="space-y-2 text-sm text-ink">
              {launchChecklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {servicePillars.map((pillar) => (
              <Card key={pillar.title} className="flex items-start gap-4 border border-surface-muted/70 bg-surface-muted px-6 py-5">
                <pillar.icon className="h-6 w-6 text-brand" aria-hidden="true" />
                <div className="space-y-1.5">
                  <CardTitle className="text-lg text-ink">{pillar.title}</CardTitle>
                  <CardDescription className="text-sm text-ink-subtle">
                    {pillar.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-6 rounded-3xl border border-surface-muted bg-surface px-8 py-12 shadow-soft lg:grid-cols-[1fr_0.9fr]" delay={0.26}>
        <div className="space-y-4">
          <h2 className="font-display text-3xl font-semibold text-ink">Deliverables built to grow with you</h2>
          <p className="text-base text-ink-subtle">
            Every engagement includes a component library, copy deck, documentation, and training session so your team can keep momentum between campaigns.
          </p>
          <div className="grid gap-4 text-sm text-ink md:grid-cols-2">
            <div className="rounded-2xl border border-surface-muted bg-surface-muted px-5 py-4">
              <p className="font-semibold text-ink">Marketing ready</p>
              <p className="mt-2 text-sm text-ink-subtle">Landing page templates, schema markup, and SEO checklists for future launches.</p>
            </div>
            <div className="rounded-2xl border border-surface-muted bg-surface-muted px-5 py-4">
              <p className="font-semibold text-ink">Sales enablement</p>
              <p className="mt-2 text-sm text-ink-subtle">Case-study builder and offer sheets aligned to your buyer journey.</p>
            </div>
            <div className="rounded-2xl border border-surface-muted bg-surface-muted px-5 py-4">
              <p className="font-semibold text-ink">Automation kit</p>
              <p className="mt-2 text-sm text-ink-subtle">Form routing, CRM sync, and notification workflows configured for your stack.</p>
            </div>
            <div className="rounded-2xl border border-surface-muted bg-surface-muted px-5 py-4">
              <p className="font-semibold text-ink">Care plan</p>
              <p className="mt-2 text-sm text-ink-subtle">Monthly or quarterly support options for updates, reporting, and experiments.</p>
            </div>
          </div>
        </div>
        <Card className="flex flex-col gap-5 border border-brand/10 bg-brand/5 px-6 py-7 shadow-soft">
          <CardHeader className="space-y-3">
            <CardTitle className="text-xl text-ink">Popular combinations</CardTitle>
            <CardDescription className="text-sm text-ink">
              Packages small businesses love when they want traction fast.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-ink">
            <div>
              <p className="font-semibold text-ink">Refresh + Local SEO</p>
              <p className="text-ink-subtle">Homepage polish, service pages, Google Business Profile tune-up, and review automation.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">New brand launch</p>
              <p className="text-ink-subtle">Messaging workshop, visual identity, website, and launch campaign assets.</p>
            </div>
            <div>
              <p className="font-semibold text-ink">Booking boost sprint</p>
              <p className="text-ink-subtle">Landing page, lead magnet, email sequence, and dashboard to track conversions.</p>
            </div>
          </CardContent>
          <div className="px-6 pb-6">
            <Button asChild className="w-full">
              <Link href="/pricing#smb">Compare pricing tiers</Link>
            </Button>
          </div>
        </Card>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-brand/10 bg-brand/5 px-8 py-12 text-center shadow-soft" delay={0.34}>
        <h2 className="font-display text-3xl font-semibold text-ink">Ready to make your small business feel enterprise-grade?</h2>
        <p className="mt-4 text-base text-ink-subtle">
          Share your goals and Haydn will respond with a tailored roadmap within one business day.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact?type=smb">Start the conversation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/work">Browse case studies</Link>
          </Button>
        </div>
      </MotionSection>
    </div>
  );
}





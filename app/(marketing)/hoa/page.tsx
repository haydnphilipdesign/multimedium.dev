import Link from "next/link";
import Image from "next/image";
import { AlertTriangle, CalendarCheck, ClipboardCheck, FileText, LineChart, Shield, ArrowRight } from "lucide-react";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { MotionSection } from "@/components/motion-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "HOA Websites & Resident Portals",
  description:
    "Modern HOA websites with resident portals, document libraries, alerts, and concierge support tailored to boards across the Poconos and beyond.",
  path: "/hoa"
});

const portalFeatures = [
  {
    icon: ClipboardCheck,
    title: "Resident accounts",
    description: "Role-based access for boards, committees, and homeowners with audit history on every update."
  },
  {
    icon: FileText,
    title: "Document library",
    description: "Organize minutes, bylaws, forms, and newsletters with search and expiration reminders."
  },
  {
    icon: AlertTriangle,
    title: "Announcements & alerts",
    description: "Pin urgent notices, schedule recurring reminders, and trigger SMS/email alerts when needed."
  },
  {
    icon: CalendarCheck,
    title: "Events & amenities",
    description: "Manage event RSVPs, amenity reservations, and maintenance schedules from one dashboard."
  }
];

const conciergeSupport = [
  {
    title: "Content concierge",
    description: "Send PDFs, photos, or quick notes—Haydn posts and formats everything so community updates go live the same day."
  },
  {
    title: "Resident help desk",
    description: "Support inbox with 24-hour response goals and escalation paths for property management."
  },
  {
    title: "Board meeting prep",
    description: "Monthly adoption reports, agenda talking points, and highlight reels ready for trustees or management partners."
  },
  {
    title: "Compliance checks",
    description: "Quarterly review of ADA, privacy, and records policies so the board stays in good standing."
  },
  {
    title: "Adoption insights",
    description: "Monthly board-ready dashboards with recommendations to keep residents logging in."
  }
];
const onboardingSteps = [
  "Discovery session with board leadership and property management",
  "Resident survey and content inventory with concierge assistance",
  "Design preview with your association-branded portal walkthrough",
  "Next.js build, resident import, permissions, and automated alerts",
  "Launch communications toolkit, training, and office hours",
  "30-day adoption dashboard review with next-quarter priorities"
];
export default function HoaPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "HOA Websites", path: "/hoa" }
  ]);

  const hoaServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "HOA Website & Resident Portal",
    description:
      "Resident portals, document libraries, alerts, and concierge support for homeowner associations and community associations.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    areaServed: ["Pennsylvania", "United States"],
    serviceType: ["HOA website", "Resident portal", "Community communications"],
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/pricing#hoa`
    }
  };

  return (
    <div className="container space-y-20 py-20">
      <Script
        id="breadcrumb-hoa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Script
        id="service-schema-hoa"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hoaServiceSchema) }}
      />
      <MotionSection className="grid items-start gap-12 rounded-3xl border border-surface-muted bg-surface px-10 py-12 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge variant="secondary">HOA Websites & Portals</Badge>
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Modern portals that calm call volume and keep residents confident</h1>
          <div className="space-y-4 text-base text-ink">
            <p className="text-ink-subtle">
              Boards across the Poconos share the same pain: residents can’t find documents, communication is scattered, and volunteers don’t have time to post updates. Multimedium.dev centralizes everything and provides concierge support so bylaws, dues notices, amenities, and emergency alerts stay current.
            </p>
            <div className="rounded-3xl border border-brand/20 bg-brand/5 px-6 py-5">
              <p className="text-sm font-semibold text-brand">Typical outcomes</p>
              <ul className="mt-3 grid gap-2 text-sm text-ink">
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" /> 65% fewer “where is this document?” requests within 60 days of launch.</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" /> 93% resident adoption when concierge support posts updates weekly.</li>
                <li className="flex items-start gap-2"><span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" /> Board receives quarterly analytics deck with resident engagement stats.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact?type=hoa">Request a live demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/pricing#hoa">
                Review HOA pricing
                <LineChart className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="relative h-80 overflow-hidden rounded-3xl border border-surface-muted shadow-soft">
            <Image
              src="/quotes/6e4e3870-19df-4e25-9d63-f8d0fb2210c1.png"
              alt="Business card quote artwork"
              fill
              priority
              className="object-contain object-center"
            />
          </div>
          <Card className="border border-brand/20 bg-brand/5 px-6 py-5 text-sm text-ink">
            <p className="text-brand">“We finally have one source of truth. Residents stopped calling the office for documents within weeks.”</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-ink-subtle">Board Treasurer, Pocono Pines HOA</p>
          </Card>
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-surface-muted bg-surface px-8 py-10 shadow-soft" delay={0.1}>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">How we reduce board workload</p>
            <h2 className="font-display text-3xl font-semibold text-ink">Concierge support that keeps information accurate and timely</h2>
            <p className="text-base text-ink-subtle">
              HOA volunteers have day jobs. Multimedium.dev acts as your digital secretary—publishing updates, routing maintenance tickets, and keeping information easy to find.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-ink md:grid-cols-2">
            {conciergeSupport.map((item) => (
              <Card key={item.title} className="border border-surface-muted bg-surface-muted px-5 py-5 shadow-none">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm text-ink-subtle">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="grid gap-10 rounded-3xl border border-brand/15 bg-brand/5 px-8 py-12 shadow-soft lg:grid-cols-[1.2fr_1fr]" delay={0.18}>
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">How onboarding works</p>
          <h2 className="font-display text-3xl font-semibold text-ink">A six-step launch that keeps residents in the loop</h2>
          <p className="text-base text-ink-subtle">From discovery through launch day communications, the process is documented and transparent so the board always knows what’s next.</p>
          <ol className="space-y-4 text-sm text-ink">
            {onboardingSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-brand/20 text-xs font-semibold text-brand">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <Card className="flex flex-col gap-4 border border-brand/20 bg-surface px-6 py-7 shadow-soft">
          <CardHeader className="space-y-3">
            <CardTitle className="text-lg text-ink">Why boards feel confident</CardTitle>
            <CardDescription className="text-sm text-ink">
              Transparent pricing options, training, and quarterly strategy reviews keep the portal aligned to community goals.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-ink">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
              ADA compliance and privacy policies reviewed quarterly.
            </div>
            <div className="flex items-start gap-3">
              <LineChart className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
              Resident adoption dashboard and monthly concierge recap.
            </div>
            <div className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-colors duration-300 group-hover:text-brand-foreground" aria-hidden="true" />
              Board resource portal with templates, scripts, and governance docs.
            </div>
          </CardContent>
        </Card>
      </MotionSection>

      <MotionSection className="grid gap-6 rounded-3xl border border-surface-muted bg-surface px-8 py-12 shadow-soft md:grid-cols-2" delay={0.26}>
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-semibold text-ink">Portal essentials</h2>
          <p className="text-sm text-ink-subtle">Every build includes the tools residents and staff expect—plus concierge coverage to keep information organized.</p>
        </div>
        <div className="grid gap-4">
          {portalFeatures.map((feature) => (
            <Card key={feature.title} className="flex gap-4 border border-surface-muted bg-surface-muted px-6 py-6 shadow-none">
              <feature.icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <div>
                <CardTitle className="text-lg text-ink">{feature.title}</CardTitle>
                <CardDescription className="text-sm text-ink-subtle">{feature.description}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-brand/10 bg-brand/5 px-8 py-12 shadow-soft" delay={0.34}>
        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">Compare your options</p>
            <h2 className="font-display text-3xl font-semibold text-ink">DIY builders vs. Multimedium.dev concierge</h2>
            <p className="text-base text-ink-subtle">Boards often try to shoehorn HOA needs into generic website platforms. Here’s what changes when you move to a purpose-built portal.</p>
          </div>
          <div className="grid gap-3 text-sm text-ink">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-2xl border border-surface-muted bg-surface px-5 py-4">
              <p className="font-semibold text-ink-subtle">Generic website builder</p>
              <ArrowRight className="h-4 w-4 text-brand" aria-hidden="true" />
              <p className="font-semibold text-ink">Multimedium.dev HOA portal</p>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4 rounded-2xl border border-surface-muted bg-surface-muted px-5 py-4">
              <p className="text-sm text-ink-subtle">No resident logins, difficult to keep documents organized.</p>
              <ArrowRight className="h-4 w-4 text-brand" aria-hidden="true" />
              <p className="text-sm text-ink">Secure resident accounts with permissions, search, and expiration reminders.</p>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4 rounded-2xl border border-surface-muted bg-surface-muted px-5 py-4">
              <p className="text-sm text-ink-subtle">Volunteers must post updates manually.</p>
              <ArrowRight className="h-4 w-4 text-brand" aria-hidden="true" />
              <p className="text-sm text-ink">Concierge posting and escalation paths so the board stays focused on operations.</p>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-4 rounded-2xl border border-surface-muted bg-surface-muted px-5 py-4">
              <p className="text-sm text-ink-subtle">No compliance guidance or analytics.</p>
              <ArrowRight className="h-4 w-4 text-brand" aria-hidden="true" />
              <p className="text-sm text-ink">Quarterly compliance review, adoption dashboard, and resident support stats.</p>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="rounded-3xl border border-brand/10 bg-brand/5 px-8 py-12 text-center shadow-soft" delay={0.4}>
        <h2 className="font-display text-3xl font-semibold text-ink">Give residents one place to stay informed</h2>
        <p className="mt-4 text-base text-ink-subtle">
          Request a walkthrough tailored to your current tools, communication pain points, and budget.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact?type=hoa">Schedule a demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/work#hoa">See HOA case studies</Link>
          </Button>
        </div>
      </MotionSection>
    </div>
  );
}









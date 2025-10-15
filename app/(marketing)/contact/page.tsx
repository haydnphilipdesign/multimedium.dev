import Script from "next/script";
import { Phone, CalendarDays, Clock3 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MotionSection } from "@/components/motion-section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { createMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a website, marketing, or HOA project with Multimedium.dev. Book a consult call with Haydn or request an HOA demo.",
  path: "/contact"
});

const availability = [
  {
    label: "Consultations",
    value: "Monday – Thursday · 9am – 5pm ET"
  },
  {
    label: "Workshops & walkthroughs",
    value: "Evenings by appointment (onsite available across NEPA)"
  },
  {
    label: "Response time",
    value: "Within 1 business day"
  },
  {
    label: "Emergency support",
    value: "Available for active retainers"
  }
];

export default function ContactPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ]);

  return (
    <div className="container grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
      <Script
        id="breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <MotionSection className="space-y-6">
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">Let’s plan your next launch</h1>
          <p className="text-base text-ink-subtle md:text-lg">
            Share your organization, goals, and timeline. Haydn will follow up with a tailored roadmap or schedule an on-site or virtual walkthrough within one business day.
          </p>
        </div>
        <ContactForm />
      </MotionSection>

      <MotionSection className="space-y-6" delay={0.2}>
        <Card className="space-y-4">
          <CardHeader>
            <CardTitle>Talk directly with Haydn</CardTitle>
            <CardDescription>Preferred for quick questions or time-sensitive requests.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-ink">
            {siteConfig.calendar ? (
              <a
                href={siteConfig.calendar}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-brand/40 bg-brand/10 px-4 py-3 font-medium text-brand transition hover:bg-brand/20"
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Schedule a strategy call
              </a>
            ) : null}
            <a href={`tel:${siteConfig.phoneInternational}`} className="flex items-center gap-2 rounded-xl border border-surface-muted bg-surface-muted px-4 py-3 transition hover:border-brand hover:text-brand">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call or text {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 rounded-xl border border-surface-muted bg-surface-muted px-4 py-3 transition hover:border-brand hover:text-brand">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <div className="flex items-start gap-2 rounded-xl border border-surface-muted bg-surface-muted px-4 py-3">
              <CalendarDays className="mt-0.5 h-4 w-4 text-brand" aria-hidden="true" />
              <div>
                <p className="font-medium text-ink">Availability</p>
                <ul className="mt-2 space-y-1 text-xs text-ink-subtle">
                  {availability.map((item) => (
                    <li key={item.label}>
                      <span className="font-medium text-ink">{item.label}:</span> {item.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="space-y-4">
          <CardHeader>
            <CardTitle>Serving the Poconos & remote clients</CardTitle>
            <CardDescription>Based in {siteConfig.location.city}, {siteConfig.location.region}. Available for on-site HOA workshops across NEPA.</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-ink">
            <p>
              From restaurants in Stroudsburg to HOA boards in Bushkill and professional services nationwide—Multimedium.dev delivers sites that clarify your brand and simplify operations.
            </p>
          </CardContent>
        </Card>
      </MotionSection>
    </div>
  );
}














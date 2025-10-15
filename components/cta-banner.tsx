import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-brand/10 bg-gradient-to-r from-brand to-blue-500 px-8 py-12 text-brand-foreground shadow-soft">
      <div aria-hidden className="pointer-events-none absolute -top-20 left-1/4 h-48 w-48 rounded-full bg-white/20 blur-3xl animate-pulse-soft" />      <div aria-hidden className="pointer-events-none absolute -bottom-24 right-[-4rem] h-64 w-64 rounded-full bg-sky-300/25 blur-3xl animate-float-slow" />      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/40 px-3 py-1 text-xs uppercase tracking-wide shadow-[0_0_30px_rgba(255,255,255,0.18)] transition-transform duration-500 hover:-translate-y-1">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Ready when you are
          </div>
          <h3 className="font-display text-2xl font-semibold">
            Give your business a modern, professional web presence that converts.
          </h3>
          <p className="text-sm md:text-base text-brand-foreground/90">
            Hop on a quick consult with Haydn to map out your launch plan—whether you're a service provider, retailer, professional firm, or organization.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="bg-white text-brand hover:bg-white/90">
            <Link href="/contact">Book a Strategy Call</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white text-brand hover:bg-white/90">
            <a href={`tel:${siteConfig.phoneInternational}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call {siteConfig.phone}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/60 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/work">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-muted/50 bg-surface/60 backdrop-blur supports-[backdrop-filter]:bg-surface/40">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand via-brand-2 to-brand-3 text-ink-contrast shadow-soft ring-1 ring-white/10">
            <span className="font-display text-sm font-semibold tracking-tight">MM</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold text-ink">Multimedium</span>
            <span className="font-mono text-[11px] text-ink-subtle">Design + Development</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 transition-colors hover:text-ink",
                pathname === item.href ? "bg-surface-muted text-ink" : "text-ink-subtle hover:bg-surface-muted/70"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm" className="shadow-soft">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-surface-muted/50 bg-surface/70 backdrop-blur md:hidden">
          <nav className="container flex flex-col gap-2 py-5">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-surface-muted text-ink"
                    : "text-ink-subtle hover:bg-surface-muted/70 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid gap-2">
              <Button asChild className="w-full">
                <Link href="/contact">Start a project</Link>
              </Button>
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-surface-muted bg-surface-muted px-5 py-3 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {siteConfig.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

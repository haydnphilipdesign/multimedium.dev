"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-muted/60 bg-surface/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-soft">
            M
          </span>
          <span className="hidden sm:inline">Multimedium.dev</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-brand",
                pathname === item.href ? "text-brand" : "text-ink-subtle"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button asChild>
            <a href={`tel:${siteConfig.phoneInternational}`}>
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call or Text {siteConfig.phone}
            </a>
          </Button>
        </div>
        <div className="flex items-center md:hidden">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-surface-muted/60 bg-surface md:hidden">
          <nav className="container flex flex-col gap-4 py-6 text-base">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-ink-subtle transition-colors hover:text-brand",
                  pathname === item.href && "font-semibold text-brand"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="inline-flex items-center gap-2 rounded-full border border-surface-muted bg-surface-muted px-3 py-2 text-sm font-medium text-ink transition hover:border-brand hover:text-brand"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {siteConfig.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

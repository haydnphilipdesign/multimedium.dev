import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Free Resources",
    template: `%s | ${siteConfig.name}`
  },
  description: "Free guides, checklists, and templates on design, conversion, and website performance."
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-16 md:py-20">
      {children}
    </div>
  );
}

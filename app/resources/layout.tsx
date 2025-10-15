import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Free Resources",
    template: `%s | ${siteConfig.name}`
  },
  description: "Free guides, checklists, and templates for small businesses and HOA boards looking to improve their online presence."
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-20">
      {children}
    </div>
  );
}

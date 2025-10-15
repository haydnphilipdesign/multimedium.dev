"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const article = document.getElementById("post-content");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const start = rect.top + scrollTop;
      const height = article.offsetHeight;
      const total = height + start - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      const current = Math.min(Math.max(scrollTop - start, 0), total - start);
      const percent = (current / (total - start || 1)) * 100;
      setProgress(Math.min(100, Math.max(0, percent)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-40 h-1 bg-brand"
      style={{ transform: `scaleX(${progress / 100})`, transformOrigin: "0 0" }}
    />
  );
}

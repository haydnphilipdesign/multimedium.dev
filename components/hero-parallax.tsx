"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroParallaxBackgroundProps = {
  className?: string;
};

export function HeroParallaxBackground({ className }: HeroParallaxBackgroundProps) {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, 40]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <motion.div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),transparent_52%),_radial-gradient(80%_60%_at_20%_20%,_rgba(37,99,235,0.12),_transparent_70%)]",
        className
      )}
      style={prefersReducedMotion ? undefined : { y, opacity }}
    />
  );
}

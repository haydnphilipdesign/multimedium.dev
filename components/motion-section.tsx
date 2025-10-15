"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type MotionSectionProps = Omit<HTMLMotionProps<"section">, "ref"> & {
  children: ReactNode;
  delay?: number;
};

export function MotionSection({ children, className, delay = 0, ...props }: MotionSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      className={cn(className)}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      animate={isInView || prefersReducedMotion ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay }
        }
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

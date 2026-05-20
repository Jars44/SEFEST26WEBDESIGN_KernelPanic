"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedProgressProps {
  value: number;
  className?: string;
  barClassName?: string;
  delay?: number;
}

export function AnimatedProgress({
  value,
  className = "h-2 bg-[#f2f3f5] rounded-full overflow-hidden",
  barClassName = "h-full bg-emerald-600 rounded-full",
  delay = 0.2,
}: AnimatedProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        className={barClassName}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${value}%` } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

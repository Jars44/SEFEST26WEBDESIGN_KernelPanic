"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseStatValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value, useLocale: false };
  const numStr = match[1];
  const suffix = match[2];
  const useLocale = numStr.includes(".");
  const num = useLocale ? parseInt(numStr.replace(/\./g, ""), 10) : parseFloat(numStr);
  return { num, suffix, useLocale };
}

export function AnimatedCounter({ value, className, duration = 1.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const { num, suffix, useLocale } = parseStatValue(value);
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, num, {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      });
      return controls.stop;
    }
  }, [isInView, num, duration, motionValue]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (v) => {
      const rounded = Math.round(v);
      setDisplay(useLocale ? rounded.toLocaleString("id-ID") : String(rounded));
    });
    return unsubscribe;
  }, [motionValue, useLocale]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      {display}{suffix}
    </motion.span>
  );
}

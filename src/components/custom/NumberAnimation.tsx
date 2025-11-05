"use client";
import { motion, useMotionValue, animate, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

type Props = {
  value: number;
  duration?: number;
  className?: string;
};

export default function AnimatedNumber({ value, duration = 2, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: false }); // 👈 repeat every time it's 50% visible
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView) {
      // Reset to 0 before restarting animation
      count.set(0);
      const animation = animate(count, value, {
        duration,
        ease: "easeOut",
      });
      return () => animation.stop();
    }
  }, [isInView, value, duration, count]);

  useEffect(() => {
    const update = (latest: number) => setDisplay(Math.floor(latest).toLocaleString());
    const unsubscribe =
      (count as any).on?.("change", update) ?? (count as any).onChange?.(update);
    return () => {
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, [count]);

  return (
    <motion.span
      ref={ref}
      className={`text-3xl sm:text-4xl font-bold text-[#0ef0b7] drop-shadow-[0_0_8px_#0ef0b7] ${className}`}
    >
      {display + "+"}
    </motion.span>
  );
}

"use client";

import { motion, useInView, AnimatePresence, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

/* ─── Shared Easing ─── */
const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ═══ FadeUp ═══ */
export function FadeUp({
  children, delay = 0, className = "", duration = 0.7, y = 40,
}: {
  children: ReactNode; delay?: number; className?: string; duration?: number; y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : undefined} transition={{ duration, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══ FadeIn (directional) ═══ */
export function FadeIn({
  children, delay = 0, className = "", direction = "up", duration = 0.7,
}: {
  children: ReactNode; delay?: number; className?: string; direction?: "up" | "down" | "left" | "right"; duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const offsets = { up: { y: 50, x: 0 }, down: { y: -50, x: 0 }, left: { x: 60, y: 0 }, right: { x: -60, y: 0 } };
  return (
    <motion.div ref={ref} initial={{ opacity: 0, ...offsets[direction] }} animate={inView ? { opacity: 1, x: 0, y: 0 } : undefined} transition={{ duration, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══ ScaleIn ═══ */
export function ScaleIn({
  children, delay = 0, className = "",
}: {
  children: ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : undefined} transition={{ duration: 0.7, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══ Stagger Container + Item ═══ */
const staggerContainerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({ transition: { staggerChildren: stagger } }),
};
export function StaggerContainer({
  children, className = "", staggerDelay = 0.08,
}: {
  children: ReactNode; className?: string; staggerDelay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} custom={staggerDelay} variants={staggerContainerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div variants={staggerItemVariants} className={className}>{children}</motion.div>;
}

/* ═══ TextReveal (word-by-word) ═══ */
export function TextReveal({
  text, className = "", delay = 0,
}: {
  text: string; className?: string; delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <span ref={ref} className={`inline ${className}`}>
      {text.split(" ").map((word, i) => (
        <motion.span key={i} className="inline-block mr-[0.25em]" initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : undefined} transition={{ duration: 0.45, delay: delay + i * 0.06, ease }}>
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ═══ HoverCard ═══ */
export function HoverCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ y: -8, transition: { duration: 0.3, ease } }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.div>
  );
}

/* ═══ PageTransition ═══ */
export function PageTransition({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══ Float ═══ */
export function Float({
  children, className = "", amplitude = 10, duration = 3,
}: {
  children: ReactNode; className?: string; amplitude?: number; duration?: number;
}) {
  return (
    <motion.div className={className} animate={{ y: [-amplitude, amplitude, -amplitude] }} transition={{ duration, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

/* ═══ MagneticButton ═══ */
export function MagneticButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.93 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      {children}
    </motion.div>
  );
}

/* ═══ SlideReveal (clip-path) ═══ */
export function SlideReveal({
  children, className = "", delay = 0, direction = "left",
}: {
  children: ReactNode; className?: string; delay?: number; direction?: "left" | "right" | "up" | "down";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const clips = {
    left:  { from: "inset(0 100% 0 0)", to: "inset(0 0% 0 0)" },
    right: { from: "inset(0 0 0 100%)", to: "inset(0 0 0 0%)" },
    up:    { from: "inset(100% 0 0 0)", to: "inset(0% 0 0 0)" },
    down:  { from: "inset(0 0 100% 0)", to: "inset(0 0 0% 0)" },
  };
  return (
    <motion.div ref={ref} initial={{ clipPath: clips[direction].from, opacity: 0 }} animate={inView ? { clipPath: clips[direction].to, opacity: 1 } : undefined} transition={{ duration: 0.9, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══ RotateIn ═══ */
export function RotateIn({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, rotate: -6, scale: 0.9 }} animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : undefined} transition={{ duration: 0.8, delay, ease }} className={className}>
      {children}
    </motion.div>
  );
}

/* ═══ GlowPulse ═══ */
export function GlowPulse({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} animate={{ boxShadow: ["0 0 20px rgba(175,39,0,0.15)", "0 0 40px rgba(175,39,0,0.3)", "0 0 20px rgba(175,39,0,0.15)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
      {children}
    </motion.div>
  );
}

/* re-export for inline use */
export { motion, AnimatePresence };

"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useRef, useMemo, useState } from "react";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = useMemo(() => [
    {
      company: "Yogatutte",
      role: "Full Stack Developer",
      duration: "May 2024 – Present",
      tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
      description: "Developing scalable web apps and APIs for health-tech.",
    },
    {
      company: "Xsav Labs",
      role: "VAPT & EDR Development Intern",
      duration: "Feb 2024 – Apr 2024",
      tech: ["Python", "Burp Suite", "Metasploit"],
      description: "Contributed to EDR tooling and security assessment.",
    },
    {
      company: "SyoloTech Technologies Pvt Ltd",
      role: "Android Developer Intern",
      duration: "Nov 2023 – Jan 2024",
      tech: ["OpenCV", "Django", "TensorFlow"],
      description: "Built Android solution for tomato disease diagnosis.",
    }
  ], []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const total = experiences.length;
    const zone = 1 / total;
    setActiveIndex(Math.min(total - 1, Math.floor(latest / zone)));
  });

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="relative w-full bg-transparent text-white"
      style={{ height: `${100 * experiences.length}vh` }}
    >
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-20 tracking-tight text-white/90"
        >
          Experience
        </motion.h2>
        <div className="relative w-full h-[330px] flex items-center justify-center">
          {/* Timeline horizontally centered */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[75vw] h-[3px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-80 rounded-full shadow-[0_0_25px_2px_rgba(34,211,238,0.3)]"
            layout
          >
            {/* Timeline dots; spaced left-right */}
            <div className="absolute flex justify-between items-center w-full h-full top-0 left-0 px-3">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  className={`w-6 h-6 rounded-full ${i === activeIndex
                    ? "bg-cyan-400 shadow-[0_0_35px_8px_#00ffff]"
                    : "bg-cyan-800/40"} `}
                  animate={{
                    scale: i === activeIndex ? 1.25 : 1,
                    opacity: i === activeIndex ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.4 }}
                />
              ))}
            </div>
          </motion.div>
          {/* Experience Card, perfectly vertical center */}
          <AnimatePresence mode="wait">
            <motion.div
              key={experiences[activeIndex].company}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.97 }}
              transition={{ duration: 0.68, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white/10 border border-cyan-400/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl
                w-[85vw] max-w-[600px] text-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-300 mb-2">
                {experiences[activeIndex].role}
              </h3>
              <p className="text-lg text-white/80 mb-1">
                {experiences[activeIndex].company}
              </p>
              <p className="text-sm text-white/60 italic mb-4">
                {experiences[activeIndex].duration}
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-[16px]">
                {experiences[activeIndex].description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {experiences[activeIndex].tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/30 shadow-[0_0_10px_1px_rgba(0,255,255,.13)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

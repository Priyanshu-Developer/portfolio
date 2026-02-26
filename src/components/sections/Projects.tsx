"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { type MouseEvent, useEffect, useMemo, useRef, useState } from "react";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    setIsMobile(mediaQuery.matches);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return isMobile;
};

type Project = {
  title: string;
  projectUrl: string;
  img: string;
  accent: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export default function Projects() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const cardAreaRef = useRef<HTMLDivElement>(null);

  const projects = useMemo<Project[]>(
    () => [
      {
        title: "Solarax",
        subtitle: "Future of Freelancing",
        description:
          "Blockchain-powered freelancing with AI matching, trustless payouts, and transparent workflows.",
        projectUrl: "https://solarax-beta.vercel.app/",
        img: isMobile ? "/solrax-mobile.png" : "/solarax.png",
        accent: "#00e6cf",
        tags: ["Next.js", "Web3", "Framer Motion"],
      },
      {
        title: "Yogatute",
        subtitle: "Mindful Learning Platform",
        description:
          "A clean digital yoga ecosystem for courses, sessions, and guided wellness journeys.",
        projectUrl: "https://online.yogatute.com/",
        img: isMobile ? "/Yogatute-mobile.png" : "/Yogatute.png",
        accent: "#ffb870",
        tags: ["Responsive UI", "Content Platform", "Brand Design"],
      },
      {
        title: "LMS",
        subtitle: "Developer-First Education Stack",
        description:
          "A modular learning management system focused on speed, scalability, and maintainable architecture.",
        projectUrl: "https://github.com/Priyanshu-Developer/Lms",
        img: isMobile ? "/lms-mobile.png" : "/lms.png",
        accent: "#9fa8ff",
        tags: ["TypeScript", "Architecture", "Open Source"],
      },
      {
        title: "KJR Alliance",
        subtitle: "Deep Space Experience",
        description:
          "An immersive project built with a futuristic visual system, smooth interactions, and high-impact storytelling.",
        projectUrl: "https://kjr-alliance.vercel.app/",
        img: isMobile ? "/deepSpace-mobile.png" : "/deepspace.png",
        accent: "#57d9ff",
        tags: ["Interactive UI", "Visual Design", "Animation"],
      },
    ],
    [isMobile],
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const clamped = Math.max(0, Math.min(value, 0.9999));
    const zone = 1 / projects.length;
    const nextIndex = Math.floor(clamped / zone);
    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
    }
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 18,
    mass: 0.25,
  });
  const smoothY = useSpring(mouseY, {
    stiffness: 150,
    damping: 18,
    mass: 0.25,
  });

  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);
  const rotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const glowX = useTransform(smoothX, [-1, 1], [38, 62]);
  const glowY = useTransform(smoothY, [-1, 1], [32, 68]);
  const glowLeft = useTransform(glowX, (v) => `${v}%`);
  const glowTop = useTransform(glowY, (v) => `${v}%`);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardAreaRef.current) return;
    const rect = cardAreaRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full"
      style={{ height: `${projects.length * 110}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeProject.title}-bg`}
            initial={{ opacity: 0.25, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.25, scale: 1.08 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 20% 20%, ${activeProject.accent}33 0%, transparent 46%), radial-gradient(circle at 80% 70%, ${activeProject.accent}22 0%, transparent 40%), linear-gradient(145deg, #0b0f18 0%, #110f1f 38%, #141329 100%)`,
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute -top-24 -left-16 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: `${activeProject.accent}30` }}
            animate={{ x: [0, 30, -10, 0], y: [0, 20, -15, 0] }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-0 bottom-0 h-80 w-80 rounded-full blur-3xl"
            style={{ backgroundColor: `${activeProject.accent}2a` }}
            animate={{ x: [0, -20, 10, 0], y: [0, -25, 15, 0] }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col px-4 pt-16 pb-10 sm:px-8 sm:pt-20">
          <motion.h2
            className="text-center text-3xl font-bold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Project Cosmos
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70 sm:text-base"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Scroll through flagship builds crafted with motion-rich interfaces
            and production-grade engineering.
          </motion.p>

          <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
            {projects.map((project, index) => (
              <motion.button
                key={project.title}
                onClick={() => setActiveIndex(index)}
                className="group relative h-2 rounded-full bg-white/15 transition-all duration-300"
                style={{ width: activeIndex === index ? 52 : 24 }}
                whileHover={{ scale: 1.06 }}
                aria-label={`Open ${project.title}`}
              >
                <motion.span
                  className="absolute inset-0 rounded-full"
                  animate={{ opacity: activeIndex === index ? 1 : 0.35 }}
                  style={{ backgroundColor: project.accent }}
                />
              </motion.button>
            ))}
          </div>

          <div
            ref={cardAreaRef}
            className="relative mt-6 flex flex-1 items-center justify-center sm:mt-10"
          >
            <motion.div
              className="pointer-events-none absolute h-[420px] w-[420px] rounded-full blur-3xl"
              style={{
                background: `radial-gradient(circle, ${activeProject.accent}44 0%, transparent 70%)`,
                left: glowLeft,
                top: glowTop,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.article
                key={`${activeProject.title}-card`}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.97 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                style={{ rotateX, rotateY, transformPerspective: 1400 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full max-w-[1080px] overflow-hidden rounded-3xl border border-white/20 bg-white/[0.06] shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              >
                <motion.div
                  className="pointer-events-none absolute -inset-[1px] rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.24), rgba(255,255,255,0.04), rgba(255,255,255,0.24))",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10 grid gap-4 p-4 sm:gap-6 sm:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl border border-white/20 bg-black/50"
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                  >
                    <motion.img
                      src={activeProject.img}
                      alt={activeProject.title}
                      className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[470px]"
                      initial={{ scale: 1.08, opacity: 0.7 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-transparent" />
                  </motion.div>

                  <motion.div
                    className="flex flex-col justify-between gap-6 p-2 sm:p-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.14 }}
                  >
                    <div>
                      <motion.span
                        className="inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-wider uppercase"
                        style={{
                          color: activeProject.accent,
                          borderColor: `${activeProject.accent}88`,
                          background: `${activeProject.accent}14`,
                        }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.2 }}
                      >
                        Featured Build
                      </motion.span>

                      <h3 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                        {activeProject.title}
                      </h3>
                      <p className="mt-2 text-lg font-semibold text-white/80">
                        {activeProject.subtitle}
                      </p>
                      <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                        {activeProject.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {activeProject.tags.map((tag, i) => (
                          <motion.span
                            key={tag}
                            className="rounded-full border border-white/20 bg-white/8 px-3 py-1 text-xs text-white/85 sm:text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.2 + i * 0.08,
                              duration: 0.35,
                            }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <motion.button
                        onClick={() =>
                          window.open(
                            activeProject.projectUrl,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        className="rounded-full px-6 py-3 text-sm font-semibold text-[#0b0f18] sm:text-base"
                        style={{
                          background: `linear-gradient(110deg, ${activeProject.accent}, #ffffff)`,
                          boxShadow: `0 10px 30px ${activeProject.accent}55`,
                        }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Launch Project
                      </motion.button>

                      <motion.div
                        className="text-xs tracking-wider uppercase text-white/55 sm:text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        Scroll to discover more
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

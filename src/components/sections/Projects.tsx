"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useVelocity } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

const useIsMobile = (query = "(max-width: 639px)") => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" && window.matchMedia(query).matches
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
  }, [ query]);
  return isMobile;
};


export default function Projects() {
  const isMobile = useIsMobile();
  const screenRef = useRef<HTMLDivElement>(null);

  const projects = useMemo(
    () => [
      {
        title: "Solarax",
        projectUrl: "https://solarax-beta.vercel.app/",
        bgColor: "#2d233a",
        img: isMobile ? "/solrax-mobile.png" : "/solarax.png",
      },
      {
        title: "Yogatute",
        projectUrl: "https://online.yogatute.com/",
        bgColor: "#4a321d",
        img: isMobile ? "/Yogatute-mobile.png" : "/Yogatute.png",
      },
      {
        title: "LMS",
        projectUrl: "https://github.com/Priyanshu-Developer/Lms",
        bgColor: "#494c57",
        img: isMobile ? "/lms-mobile.png" : "/lms.png",
      },
    ],
    [isMobile]
  );

  const { scrollYProgress } = useScroll({
    target: screenRef,
    offset: ["start start", "end end"],
  });

  const velocity = useVelocity(scrollYProgress);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect scroll speed for dynamic animation timing
  useMotionValueEvent(velocity, "change", (v) => {
    setScrollSpeed(Math.min(Math.abs(v) * 10, 1)); // normalized scroll speed
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (typeof latest !== "number") return;

    // Clamp scrollYProgress between 0–1
    const clamped = Math.max(0, Math.min(latest, 1));

    // Divide scroll evenly per project
    const zoneSize = 1 / projects.length;
    const newIndex = Math.min(
      projects.length - 1,
      Math.floor(clamped / zoneSize)
    );

    setActiveIndex(newIndex);
  });

  const activeProject = projects[activeIndex];

  return (
    <motion.section
      ref={screenRef}
      id="projects"
      className="w-full"
      style={{ height: `${100 * projects.length}vh` }}
      animate={{ backgroundColor: activeProject.bgColor }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <h2
          className={`text-3xl font-semibold text-white z-10 text-center ${
            isMobile ? "mt-6" : "mt-8"
          }`}
        >
          My Work
        </h2>

        <div
          className={`relative w-full flex-1 flex items-center justify-center ${
            isMobile ? "-mt-4" : ""
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.title}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -40 }}
              transition={{
                duration: 0.3 + (1 - scrollSpeed) * 0.5, // faster on fast scroll
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 w-[85%] max-w-[1200px] -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <motion.h3
                className={`text-[clamp(2rem,6vw,5rem)] text-white/95 italic font-semibold text-center sm:text-left ${
                  isMobile
                    ? "mb-4"
                    : "mb-6 sm:absolute sm:-top-20 sm:left-[15%]"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2 + (1 - scrollSpeed) * 0.3,
                }}
              
              >
                {activeProject.title}
              </motion.h3>

              <div
                className={`relative w-full overflow-hidden bg-black/30 shadow-2xl rounded-xl h-[62vh] sm:h-[66vh]`}
              >
                <motion.img
                  key={activeProject.img}
                  src={activeProject.img}
                  alt={activeProject.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{
                    duration: 0.3 + (1 - scrollSpeed) * 0.4,
                    ease: "easeOut",
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.button
              key={activeProject.title + "-button"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-10 px-6 py-3 bg-white/90 text-black font-medium rounded-full shadow-lg hover:bg-white z-30"
              onClick={() => window.open(activeProject.projectUrl, "_blank")}
            >
              View Project
            </motion.button>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

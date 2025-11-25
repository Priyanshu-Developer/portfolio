"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useMemo } from "react";

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
    offset: ["start end", "end start"],
  });

  // Parallax effect for cards while scrolling
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="relative w-full bg-linear-to-b from-slate-900 to-slate-800 text-white py-24"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-linear-to-b from-cyan-400/40 to-transparent transform -translate-x-1/2"></div>

          {experiences.map((exp, i) => {
            const cardY = useTransform(scrollYProgress, [0, 1], [50, -50]);

            return (
              <motion.div
                key={exp.company}
                className="relative flex items-center mb-16"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-lg transform -translate-x-1/2 z-10"></div>

                {/* Card */}
                <motion.div
                  style={{ y: cardY }}
                  className="w-full md:w-5/6 lg:w-4/5 mx-auto bg-white/10 backdrop-blur-lg border border-cyan-400/20 rounded-xl p-8 shadow-xl"
                >
                  <h3 className="text-2xl font-bold text-cyan-300 mb-2">{exp.role}</h3>
                  <p className="text-lg text-white/80 mb-1">{exp.company}</p>
                  <p className="text-sm text-white/60 italic mb-4">{exp.duration}</p>
                  <p className="text-white/85 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-cyan-400/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/30 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

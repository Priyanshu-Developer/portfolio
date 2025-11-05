"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiRust,
  SiSolidity,
  SiTailwindcss,
  SiDocker,
  SiLinux,
  SiOwasp,
  SiWireshark,
  SiBurpsuite,
} from "react-icons/si";
import { SiArchlinux } from 'react-icons/si';
import { SiMetasploit } from 'react-icons/si';
import { SiOpenai } from 'react-icons/si';
import { SiCyberdefenders } from 'react-icons/si';

export default function SkillsSection() {
  const skills = useMemo(
  () => [
    // --- Development Stack ---
    { name: "JavaScript", color: "#f0db4f", icon: <SiJavascript /> },
    { name: "TypeScript", color: "#3178c6", icon: <SiTypescript /> },
    { name: "React", color: "#61dafb", icon: <SiReact /> },
    { name: "Next.js", color: "#ffffff", icon: <SiNextdotjs /> },
    { name: "Node.js", color: "#68a063", icon: <SiNodedotjs /> },
    { name: "Python", color: "#306998", icon: <SiPython /> },
    { name: "Rust", color: "#dea584", icon: <SiRust /> },
    { name: "Solidity", color: "#8c8c8c", icon: <SiSolidity /> }, // lighter for dark background
    { name: "Tailwind CSS", color: "#38bdf8", icon: <SiTailwindcss /> },
    { name: "Docker", color: "#0db7ed", icon: <SiDocker /> },
    { name: "Linux", color: "#fcc624", icon: <SiLinux /> },

    // --- Cybersecurity & Blockchain Security ---
    { name: "Arch Linux", color: "#5c7aff", icon: <SiArchlinux /> },
    { name: "Metasploit", color: "#ff3b3b", icon: <SiMetasploit /> }, // closest match, red theme
    { name: "Wireshark", color: "#1679a3", icon: <SiWireshark /> },
    { name: "Burp Suite", color: "#ff6f00", icon: <SiBurpsuite /> },
    { name: "OWASP ZAP", color: "#e34f26", icon: <SiOwasp /> },
    { name: "Blockchain Security", color: "#29b6f6", icon: <SiSolidity /> },
    { name: "Smart Contract Auditing", color: "#b388ff", icon: <SiSolidity /> },
    { name: "Threat Analysis", color: "#ff4081", icon: <SiOpenai /> },
    { name: "Incident Response", color: "#ffab40", icon: <SiCyberdefenders /> },
  ],
  []
);

  return (
    <section
      id="skills"
      className="relative w-full min-h-fit flex flex-col items-center justify-center text-white px-6 py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent">
        My Skills
      </h2>
       <h4 className="text-center text-gray-300 mb-12 max-w-2xl">
        Proficient in a diverse set of technologies spanning full stack development and cybersecurity. Skilled in building robust web applications and securing digital assets through comprehensive security practices.
       </h4>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-5 w-full max-w-5xl"
      >
        {skills.map((skill, i) => (
          <motion.button
            key={i}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            whileHover={{
              scale: 1.08,
              boxShadow: `0 0 20px ${skill.color}, 0 0 60px ${skill.color}88`,
              transition: { duration: 0 }, // ⚡ instant glow
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-3 rounded-xl border text-sm md:text-base font-semibold overflow-hidden group flex items-center gap-2 transition-all duration-200 ease-in-out"
            style={{
              borderColor: skill.color,
              color: skill.color,
            }}
          >
            {/* instant background fill on hover */}
            <motion.span
              className="absolute left-0 top-0 h-full w-0 group-hover:w-full"
              style={{
                backgroundColor: skill.color,
                transition: "width 0.15s ease-out", // fast fill
              }}
            ></motion.span>

            {/* shine (optional, subtle and quick) */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-full group-hover:translate-x-[-100%] transition-transform duration-300 ease-out"></span>

            {/* icon + text */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-150">
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
}

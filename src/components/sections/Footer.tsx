"use client";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {motion } from 'motion/react';

export default function Footer() {
  const socialLinks = [
    { href: "https://www.linkedin.com/in/priyanshu-infosec", label: "LinkedIn", icon: FaLinkedin },
    { href: "https://github.com/Priyanshu-developer", label: "GitHub", icon: FaGithub },
    { href: "https://www.instagram.com/white.devil200214", label: "Instagram", icon: FaInstagram },
  ];
   const glows=[
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-0 w-[500px] h-[500px] opacity-15 blur-[150px] delay-200",
    "top-1/2 left-1/2 w-[220px] h-[220px] opacity-15 blur-[130px] -translate-x-1/2 -translate-y-1/2",
  ]
  return (
    <footer className="w-full h-fit-content py-10  text-white flex items-center justify-center">
      {glows.map((glow, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#1cd8d2] to-[#00bf8f]  animate-pulse ${glow}`}
        />
      ))}
      <div className="z-10 text-center text-gray-300 text-sm">
        <h1 className="text-3xl font-semibold text-white mb-1">
          Priyanshu Kumar Singh
        </h1>
        <p className="text-2xl font-medium">"Success is when preparation meets opportunity."</p>
        <div className="flex justify-center  gap-4 mt-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))" }}
                        whileHover={{
                          scale: 1.3,
                          y: -3,
                          filter:
                            "drop-shadow(0 0 8px rgba(14, 240, 183, 0.7)) drop-shadow(0 0 16px rgba(14, 240, 183, 0.5))",
                        }}
                        whileTap={{
                          scale: 0.95,
                          y: 0,
                          transition: { duration: 0.08 },
                        }}
                        className="text-gray-400 hover:text-[#0ef0b7] transition-colors"
                      >
                        <link.icon size={28} />
                      </motion.a>
                    ))}
        </div>
        <div className="w-48 h-0.5 my-3 mx-auto rounded-full bg-linear-to-r from-[#302b63] via-[#1cd8d2] to-[#00bf8f] opacity-90" />
        © {new Date().getFullYear()} Priyanshu Kumar Singh. All rights reserved.
      </div>
    </footer>
  );
}

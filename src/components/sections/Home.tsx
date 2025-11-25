"use client";
import PasswordCracker from "../custom/PasswordCracker";
import PasswordCrackerAnimation from "../custom/PasswordCrackerAnimation";
import { useMemo } from "react";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub,FaInstagram } from "react-icons/fa";

const socialLinks = [
   { href: "https://www.linkedin.com/in/priyanshu-infosec", label: "LinkedIn", icon: FaLinkedin },
      { href: "https://github.com/Priyanshu-developer", label: "GitHub", icon: FaGithub },
      { href: "https://www.instagram.com/white.devil200214", label: "Instagram", icon: FaInstagram },
];

export default function Home() {
  const skills = useMemo(
    () => ["Software Engineer", "Full Stack Developer", "Cybersecurity Enthusiast"],
    []
  );

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* 🔮 Background Gradient Circles */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-40 h-40 rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-40 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[80vw] h-[50vh] sm:w-[60vw] sm:h-[50vh] md:w-[40vw] md:h-[40vh] max-w-[500px] max-h-[500px] rounded-full bg-linear-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-20 blur-[120px]" />
      </div>

      {/* 🌐 Content Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* 🧍‍♂️ Image Section (on top for mobile) */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
          {/* 🌈 Background Circle */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "min(70vw, 350px)",
              height: "min(70vw, 350px)",
              filter: "blur(30px)",
              opacity: 0.3,
              background:
                "conic-gradient(from 180deg at 50% 50%, #00bf8f, #1cd8d2, #302b63, #00bf8f)",
            }}
          />
          {/* 🖼️ Avatar */}
          <motion.img
            src="/avator.png"
            alt="Avatar"
            className="relative object-contain select-none pointer-events-none w-[60vw] max-w-[350px] sm:max-w-[420px] md:max-w-[500px]"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </div>

        {/* 🧠 Text & Intro Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1">
          {/* 🧠 Animated Role */}
          <div className="flex justify-center lg:justify-start w-full">
            <div className="inline-block overflow-hidden">
              <PasswordCracker
                target={skills}
                speed={10}
                cycles={1}
                showCursor={false}
                className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0ef0b7]"
              />
            </div>
          </div>

          {/* 👋 Introduction */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg">
            Hello, I'm <br />
            <span>
              <PasswordCrackerAnimation
                target="Priyanshu Kumar Singh"
                speed={20}
                cycles={1}
                showCursor={false}
                className="font-extrabold text-2xl sm:text-3xl md:text-4xl whitespace-nowrap"
              />
            </span>
          </h2>

          {/* 📖 About */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-lg md:max-w-xl mx-auto lg:mx-0">
            I'm a passionate Full Stack Developer specializing in building exceptional digital
            experiences. Currently, I'm focused on developing responsive web applications and
            learning new technologies to enhance my skills.
          </p>

          {/* 🎯 Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2.5 text-white bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] font-semibold rounded-md hover:scale-105 transition-transform"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#0ef0b7] text-[#0ef0b7] font-semibold rounded-md hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </div>

          {/* 🌐 Social Icons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
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
        </div>
      </div>
    </section>
  );
}

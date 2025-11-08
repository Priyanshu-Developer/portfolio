"use client";
import  {motion} from "motion/react";
import PasswordCrack from "../custom/PasswordCracker";
import { useMemo } from "react";
import NumberAnimation from "../custom/NumberAnimation";
export default function About() {
  const skills = useMemo(() => ["Software Engineer", "Full Stack Developer", "Cybersecurity Enthusiast"], []);
  const stats = [
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies Explored", value: "15+" },
    { label: "Years of Experience", value: "1 +" },
  ];
  const glows=[
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 right-0 w-[500px] h-[500px] opacity-15 blur-[150px] delay-200",
    "top-1/2 left-1/2 w-[220px] h-[220px] opacity-15 blur-[130px] -translate-x-1/2 -translate-y-1/2",
  ]
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center relative text-white overflow-hidden">
      {glows.map((glow, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-linear-to-r from-[#302b63] via-[#1cd8d2] to-[#00bf8f]  animate-pulse ${glow}`}
        />
      ))}
      <div className="z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-8">
        <motion.div className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{opacity:0, y:24}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6, ease:"easeOut"}}
          viewport={{once:true,amount:0.4}}
        >
          <motion.div className=" relative w-40 h-40 md:w-[200px] md:h-[200px] rounded-2xl overflow-hidden shadow-2xl bg-linear-br from-[#1cd8d2] to-[#302b63]/20 border-[#1cd8d2]/25 border-2">
          <img src="/boy.jpg" alt="Boy" className=" absolute inset-0" />
          </motion.div>
          
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2]">
              Priyanshu Kumar Singh
            </h2>
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <PasswordCrack target={skills} className="mt-2 text-lg sm:text-xl text-white/90 font-semibold leading-relaxed" />
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed text-[14px] max-w-2xl md:max-w-3xl" >
              I'm a dedicated Full Stack Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I strive to build seamless digital experiences. My journey in tech is fueled by continuous learning and a commitment to excellence.
            </p>
            <div className=" mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              {stats.map((stat, index) => (
                <motion.div key={index} className="flex flex-col items-center"
                  initial={{opacity:0, y:10}}
                  animate={{opacity:1, y:0}}
                  transition={{duration:0.4, delay:0.2 + index * 0.2, ease:"easeOut"}}
                  viewport={{once:true,amount:0.3}}
                >
                  <NumberAnimation value={parseInt(stat.value)} className="text-2xl sm:text-3xl"/>
                  <span className="text-sm sm:text-base text-gray-300 mt-1">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-2.5 text-white  border-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] font-semibold rounded-md hover:scale-105 transition-transform"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex p-0.5 rounded-md bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] hover:scale-105 transition-transform"
              >
                <span className="inline-flex w-full items-center justify-center px-6 py-2.5 bg-[#0b1220] text-[#0ef0b7] font-semibold rounded-md">
                  Contact Me
                </span>
              </a>
            </div>
          </div> 
        </motion.div>
        <motion.div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] mb-6 mt-12 text-center md:text-left">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed text-[16px] font-normal max-w-4xl mx-auto md:mx-0">
            With a solid foundation in computer science and hands-on experience in full stack development, I have honed my skills in various programming languages and frameworks. My expertise lies in creating efficient, scalable, and user-friendly web applications that meet client needs and exceed expectations. I am passionate about staying updated with the latest industry trends and continuously improving my skill set to deliver innovative solutions.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
          

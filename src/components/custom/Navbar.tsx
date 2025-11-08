"use client";
import Image from "next/image";
import React from "react";
import { AnimatedHamburger } from "./AnimatedHamburger";
import { IoMdCloudDownload } from "react-icons/io";

const MenuItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },

  { name: "Contact", link: "#contact" },
];

// Desktop Gradient Button
function NavBarButton({ name, link }: { name: string; link: string }) {
  return (
    <a
      href={link}
      onClick={() => window.scrollTo(0, 0)}
      className="
        relative block font-medium text-black dark:text-white
        transition-all duration-300
        hover:text-transparent hover:bg-clip-text
        hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-500
        group
      "
    >
      {name}
      <span
        className="
          absolute left-0 bottom-0 h-0.5
          w-0 bg-linear-to-r from-blue-500 to-purple-500
          transition-all duration-500 ease-out
          group-hover:w-full
        "
      />
    </a>
  );
}




// Simple Mobile Button
function MobileMenuButton({ name, link }: { name: string; link: string }) {
  return (
    <a
      href={link}
      className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
    >
      {name}
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const isMobile = React.useMemo(() => window.innerWidth < 768, []);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 h-16 w-full bg-transparent flex items-center justify-between px-6 z-50 backdrop-blur-md">
      {/* Logo and Name */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-wide font-poppins">
          Priyanshu Kumar Singh
        </span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {MenuItems.map((item) => (
          <li key={item.name}>
            <NavBarButton name={item.name} link={item.link} />
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <AnimatedHamburger isOpen={isOpen} toggle={toggleMenu} />
      </div>

      {/* Simple Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        {MenuItems.map((item) => (
          <MobileMenuButton key={item.name} name={item.name} link={item.link} />
        ))}
        <a
        href="/Priyanshu-infosec.pdf"
        download
        aria-label="Download resume"
        className="inline-block rounded-full p-0.5 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition"
      >
        <span className="block rounded-full bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition sm:text-base">
          Download Resume
        </span>
      </a>
      </div>

      {isMobile == false ?(  
      <a
        href="/Priyanshu-infosec.pdf"
        download
        aria-label="Download resume"
        className="inline-block rounded-full p-0.5 bg-linear-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition"
      >
        <span className="block rounded-full bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition sm:text-base">
          Download Resume
        </span>
      </a>
      ):""}
    </nav>
  );
}

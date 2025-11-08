
import Navbar from "../components/custom/Navbar";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Footer from "../components/sections/Footer";
import Contact from "../components/sections/Contact";
import Experience from "../components/sections/Experience";
import Home from "../components/sections/Home";
import ParticleBackground from "../components/custom/ParticleBackground";
import CustomCursor from "../components/custom/CustomCursor";

export default function Page() {
  return (
    <div className=" text-black bg-gray-900 dark:text-white scroll-smooth w-full" >
      <ParticleBackground />
      <CustomCursor />
      <Navbar />
      <Home/>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

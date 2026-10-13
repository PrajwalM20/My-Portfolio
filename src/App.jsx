import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { profile } from "./data";

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-4 border-t border-line px-5 py-6 md:px-8">
        <a href="#home" className="text-lg font-bold tracking-[-.07em]">Prajwal <span className="text-sand">M</span></a>
        <p className="mr-auto text-xs text-muted">Built with care, curiosity, and code.</p>
        <p className="text-xs text-muted">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
      {showTop && (
        <motion.a
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-lg transition hover:-translate-y-1"
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </div>
  );
}
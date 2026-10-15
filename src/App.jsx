
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
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-clip bg-paper text-ink">
      <Navbar />

      <main className="w-full min-w-0">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center gap-3 border-t border-line px-4 py-6 sm:gap-4 sm:px-6 md:px-8">
        <a
          href="#home"
          className="shrink-0 text-lg font-bold tracking-[-0.07em]"
        >
          Prajwal <span className="text-sand">M</span>
        </a>

        <p className="mr-auto min-w-0 text-xs text-muted">
          Built with care, curiosity, and code.
        </p>

        <p className="w-full text-xs text-muted sm:w-auto">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>

      {showTop && (
        <motion.a
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={reduceMotion ? undefined : { y: -3 }}
          href="#home"
          aria-label="Back to top"
          className="fixed bottom-4 right-4 z-40 grid h-10 w-10 place-items-center rounded-full bg-ink text-white shadow-lg transition sm:bottom-5 sm:right-5 sm:h-11 sm:w-11"
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </div>
  );
}

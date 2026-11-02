
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import { ArrowUp } from "lucide-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Resume from "./sections/Resume";

function AnimatedRoutes() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="min-h-[70vh]"
        initial={
          reduceMotion
            ? false
            : { opacity: 0 }
        }
        animate={{ opacity: 1 }}
        exit={
          reduceMotion
            ? undefined
            : { opacity: 0 }
        }
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {/* Orange curved page reveal */}
        {!reduceMotion && (
          <motion.div
            key={`wipe-${location.pathname}`}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[100] bg-orange"
            initial={{
              clipPath:
                "ellipse(150% 150% at 50% 50%)",
            }}
            animate={{
              clipPath:
                "ellipse(0% 0% at 50% 50%)",
            }}
            transition={{
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        )}

        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  // Scroll to the top whenever the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  // Back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 450);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen w-full overflow-x-clip bg-paper text-ink"
    >
      <Navbar />

      <main className="w-full min-w-0">
        <AnimatedRoutes />
      </main>

      {/* Full-width animated footer */}
      <Footer />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.8,
            }}
            whileHover={{ y: -4 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            aria-label="Back to top"
            className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-orange text-white shadow-xl transition hover:bg-navy"
          >
            <ArrowUp size={19} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

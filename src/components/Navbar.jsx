
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LiquidButton from "./LiquidButton";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links
        .map(([, href]) => document.querySelector(href))
        .filter(Boolean);

      let current = "#home";

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 150) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <motion.div
        animate={{
          y: scrolled ? -2 : 0,
          scale: scrolled ? 0.99 : 1,
        }}
        transition={{ duration: 0.25 }}
        className={`relative mx-auto max-w-[1240px] rounded-2xl border transition-all duration-300 backdrop-blur-2xl ${
          scrolled
            ? "border-white/70 bg-white/75 shadow-[0_8px_32px_rgba(0,0,0,0.09)]"
            : "border-white/60 bg-white/55 shadow-[0_4px_20px_rgba(0,0,0,0.035)]"
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        />

        <div className="flex h-[66px] items-center justify-between gap-3 px-4 sm:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group shrink-0 text-lg font-bold tracking-[-0.07em] text-ink"
          >
            Prajwal
            <span className="text-sand transition-colors group-hover:text-neutral-900">
              {" "}M
            </span>
            <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-sand align-middle" />
          </a>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setActive(href)}
                className={`relative rounded-full px-4 py-2.5 text-xs font-medium transition-colors duration-200 ${
                  active === href
                    ? "text-ink"
                    : "text-neutral-500 hover:text-ink"
                }`}
              >
                {active === href && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full border border-black/[0.07] bg-white/80 shadow-sm"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            ))}
          </nav>

          {/* Liquid-glass desktop CTA */}
          <div className="hidden sm:block">
            <LiquidButton
              href="#contact"
              variant="primary"
              className="min-h-10 px-5 py-2 text-xs"
            >
              Let's connect
              <ArrowUpRight size={15} />
            </LiquidButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white/60 shadow-sm backdrop-blur-xl transition hover:bg-white md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Animated mobile menu */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden border-t border-black/[0.06] md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="p-3">
                {links.map(([label, href], index) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={() => {
                      setActive(href);
                      closeMenu();
                    }}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                    className={`mb-1 flex items-center justify-between rounded-xl px-4 py-3.5 text-sm transition-colors last:mb-0 ${
                      active === href
                        ? "bg-white text-ink shadow-sm"
                        : "text-neutral-600 hover:bg-white/70 hover:text-ink"
                    }`}
                  >
                    {label}
                    {active === href && (
                      <span className="h-1.5 w-1.5 rounded-full bg-sand" />
                    )}
                  </motion.a>
                ))}

                <LiquidButton
                  href="https://wa.me/919353588862"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  onClick={closeMenu}
                  className="mt-3 w-full rounded-xl"
                >
                  Message me on WhatsApp
                  <ArrowUpRight size={16} />
                </LiquidButton>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

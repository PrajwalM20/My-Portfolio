import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="px-3 pb-3 pt-10 sm:px-5">
      <div className="mx-auto max-w-[1500px] overflow-hidden rounded-2xl border border-[#263D79] bg-navy px-5 py-8 text-white sm:px-9 sm:py-12">

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid gap-10 border-t border-white/20 pt-8 md:grid-cols-[1.2fr_1fr_0.8fr]">

            <div>
              <Link to="/" className="text-2xl font-black">
                PRAJWAL<span className="text-orange"> M.</span>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                {profile.intro}
              </p>

              <p className="mt-4 text-xs leading-6 text-white/50">
                Computer Science Engineering
                <br />
                NIE Mysuru, India
              </p>
            </div>

            <div>
              <p className="mb-5 font-mono text-xs tracking-[.2em] text-white/50">
                EXPLORE
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="w-fit text-sm transition hover:text-orange"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 font-mono text-xs tracking-[.2em] text-white/50">
                LET'S CONNECT
              </p>

              <a
                href={profile.email}
                className="break-all text-sm underline decoration-white/30 underline-offset-4 hover:text-orange"
              >
                {profile.email.replace("mailto:", "")}
              </a>

              <div className="mt-5 flex flex-col items-start gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-orange"
                >
                  GitHub ↗
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-orange"
                >
                  LinkedIn ↗
                </a>

                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-orange"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </div>

          {/* Giant animated name */}
          <div className="mt-20 border-y border-white/20 py-8 sm:mt-24 sm:py-12">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center gap-2"
            >
              <motion.h2
                animate={
                  reduceMotion
                    ? undefined
                    : { letterSpacing: ["-0.09em", "-0.055em"] }
                }
                transition={{ duration: 1.2 }}
                className="min-w-0 flex-1 whitespace-nowrap text-center text-[clamp(2.4rem,12.2vw,11.5rem)] font-black leading-none tracking-[-0.07em]"
              >
                PRAJWAL<span className="text-orange"> M.</span>
              </motion.h2>

              <motion.a
                href="#top"
                onClick={(event) => {
                  event.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                whileHover={reduceMotion ? undefined : { x: 7, y: -7 }}
                aria-label="Back to top"
                className="hidden shrink-0 text-orange sm:block"
              >
                <ArrowUpRight size={55} strokeWidth={2.5} />
              </motion.a>
            </motion.div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-6 text-[10px] tracking-wider text-white/50 sm:flex-row">
            <p>© {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED & BUILT WITH PASSION.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

import { motion, useReducedMotion } from "framer-motion";

const pageInfo = {
  "/": { number: "01", name: "HOME" },
  "/about": { number: "02", name: "ABOUT ME" },
  "/projects": { number: "03", name: "PROJECTS" },
  "/skills": { number: "04", name: "MY SKILLS" },
  "/education": { number: "05", name: "EDUCATION" },
  "/resume": { number: "06", name: "MY RESUME" },
  "/contact": { number: "07", name: "CONTACT" },
};

export default function PageTransition({ children, pathname }) {
  const reduceMotion = useReducedMotion();

  const page = pageInfo[pathname] || pageInfo["/"];

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-[70vh] overflow-hidden">

      {/* Page content */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>

      {/* Full-screen transition */}
      <motion.div
        key={pathname}
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-orange"
        initial={{ x: "0%" }}
        animate={{
          x: ["0%", "0%", "-105%"],
        }}
        transition={{
          duration: 1.15,
          times: [0, 0.55, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.85 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [35, 0, 0, -25],
            scale: [0.85, 1, 1, 1.05],
          }}
          transition={{
            duration: 0.85,
            times: [0, 0.2, 0.7, 1],
            ease: "easeOut",
          }}
          className="text-center text-white"
        >
          <p className="font-mono text-sm tracking-[0.4em]">
            {page.number} / 07
          </p>

          <h1 className="mt-4 text-[clamp(3rem,10vw,8rem)] font-black leading-none tracking-[-0.07em]">
            {page.name}
          </h1>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-navy" />
        </motion.div>
      </motion.div>
    </div>
  );
}

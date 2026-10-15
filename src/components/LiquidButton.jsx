
import { motion, useReducedMotion } from "framer-motion";

export default function LiquidButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  download,
  target,
  rel,
  ...props
}) {
  const reduceMotion = useReducedMotion();

  const base =
    "group relative isolate inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur-xl transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "border-white/50 bg-gradient-to-br from-[#8b70ef]/95 via-[#674bd1]/95 to-[#29234f] text-white shadow-[0_8px_28px_rgba(112,83,211,0.25)] hover:shadow-[0_12px_34px_rgba(112,83,211,0.4)]",
    secondary:
      "border-white/80 bg-white/55 text-[#28243b] shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_5px_20px_rgba(107,87,160,0.09)] hover:bg-white/80 hover:shadow-[0_10px_28px_rgba(107,87,160,0.17)]",
    dark:
      "border-white/25 bg-gradient-to-br from-[#343044]/95 to-[#17151f] text-white shadow-lg hover:shadow-xl",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      download={download}
      target={target}
      rel={rel}
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.015 }}
      whileTap={reduceMotion ? undefined : { scale: 0.975 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {/* Glossy light reflection */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-b from-white/30 via-white/[0.06] to-transparent"
      />

      {/* Moving liquid highlight */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-full left-[-60%] -z-10 w-1/2 rotate-[24deg] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={
          reduceMotion
            ? undefined
            : { left: ["-60%", "140%"] }
        }
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />

      {/* Fine inner glass border */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-px -z-10 rounded-full border border-white/20"
      />

      <span className="relative z-10 inline-flex items-center justify-center gap-3">
        {children}
      </span>
    </Component>
  );
}


import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import LiquidButton from "../components/LiquidButton";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { profile } from "../data";
import Reveal from "../components/Reveal";
import AssemblyMachine from "../components/AssemblyMachine";

const roles = [
  "Full-Stack Developer",
  "Computer Science Student",
  "Problem Solver",
  "Technology Enthusiast",
];

const socialLinks = [
  { label: "WhatsApp", href: profile.whatsapp, Icon: MessageCircle },
  { label: "Email", href: profile.email, Icon: Mail },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    Icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: profile.github,
    Icon: Github,
    external: true,
  },
  {
    label: "Location",
    href: profile.location,
    Icon: MapPin,
    external: true,
  },
];

const stats = [
  { title: "Projects", detail: "Learning by building", icon: "↗" },
  { title: "Tech stack", detail: "Full-stack development", icon: "</>" },
  { title: "Mindset", detail: "Always improving", icon: "✳" },
  { title: "Education", detail: "NIE Mysuru", icon: "⌂" },
];

function AnimatedRole({ reduceMotion }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="mt-4 flex min-h-7 items-center gap-2 text-sm text-neutral-600">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b9a17d]" />

      <motion.span
        key={roleIndex}
        initial={reduceMotion ? false : { opacity: 0, y: 7 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {roles[roleIndex]}
      </motion.span>
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-black/5 bg-paper"
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#b9b9ae 0.7px, transparent 0.7px)",
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(to right, black, transparent 85%)",
        }}
      />

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-5 pb-40 pt-16 sm:px-7 md:min-h-[690px] md:grid-cols-[1fr_.95fr] md:gap-10 md:px-8 md:pb-36 md:pt-20 lg:gap-14">
        {/* Left: hero introduction */}
        <div className="relative z-10 max-w-[600px]">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[.18em] text-neutral-600 sm:text-[11px]">
              <span className="h-px w-7 shrink-0 bg-[#b9a17d]" />
              {profile.role}
            </p>
          </Reveal>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-[clamp(3.2rem,7vw,6rem)] leading-[.98] tracking-[-.065em] text-ink"
          >
            Turning Ideas
            <br />
            Into Real
            <br />
            <span className="text-neutral-500">Solutions.</span>
          </motion.h1>

          <Reveal delay={0.12}>
            <AnimatedRole reduceMotion={Boolean(reduceMotion)} />

            <p className="mt-4 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
              {profile.intro}
            </p>
          </Reveal>

          {/* Liquid-glass action buttons */}
          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <LiquidButton href="#projects" variant="primary">
                View my work
                <ArrowRight size={16} />
              </LiquidButton>

              <LiquidButton
                href={profile.resume}
                download
                variant="secondary"
              >
                <Download size={16} />
                Download resume
              </LiquidButton>
            </div>
          </Reveal>

          {/* Social links with matching glass surfaces */}
          <Reveal delay={0.28}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group grid h-10 w-10 place-items-center rounded-full border border-white/80 bg-white/55 text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_4px_16px_rgba(107,87,160,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-100/80 hover:text-violet-800 hover:shadow-[0_8px_24px_rgba(107,87,160,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: Three.js animation card */}
        <Reveal delay={0.1} y={12} className="relative z-0 min-w-0">
          <div className="group relative isolate h-[370px] overflow-hidden rounded-2xl border border-[#ded8ee] bg-gradient-to-br from-white via-[#f8f6ff] to-[#e8e0ff] shadow-[0_20px_65px_rgba(0,0,0,0.09)] sm:h-[440px] lg:h-[500px]">
            <AssemblyMachine reducedMotion={Boolean(reduceMotion)} />

            {/* Soft glass overlay */}
            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-br from-white/10 via-transparent to-[#b8a2f4]/10" />

            {/* Currently building label */}
            <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-xl border border-white/90 bg-white/75 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_5px_20px_rgba(107,87,160,0.08)] backdrop-blur-xl sm:left-5 sm:top-5">
              <p className="font-mono text-[9px] tracking-[.16em] text-neutral-500">
                CURRENTLY BUILDING
              </p>
              <p className="mt-1 text-xs font-semibold text-ink">
                Ideas into reality
              </p>
            </div>

            {/* Floating approach label */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -5, 0], rotate: [0, 1, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute bottom-[76px] right-4 z-10 rounded-xl border border-white/90 bg-white/75 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_5px_20px_rgba(107,87,160,0.08)] backdrop-blur-xl sm:bottom-[82px] sm:right-5"
            >
              <p className="font-mono text-[9px] tracking-widest text-neutral-500">
                APPROACH
              </p>
              <p className="mt-1 text-xs font-medium text-ink">
                Build · Learn · Improve
              </p>
            </motion.div>

            {/* Card footer */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 flex min-h-[48px] items-center justify-between gap-3 bg-black/55 px-4 py-4 text-[9px] tracking-[.13em] text-white backdrop-blur-md sm:px-5">
              <span>DESIGN · CODE · BUILD</span>
              <span className="shrink-0">PORTFOLIO / 2026</span>
            </div>
          </div>

          {/* Location badge */}
          <div className="pointer-events-none absolute -bottom-4 -left-2 z-10 hidden rounded-xl border border-white/80 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-xl sm:block">
            <p className="font-mono text-[9px] tracking-widest text-neutral-500">
              BASED IN
            </p>
            <p className="mt-1 text-xs font-semibold">Mysuru, India</p>
          </div>
        </Reveal>
      </div>

      {/* Bottom statistics strip */}
      <div className="absolute bottom-5 left-5 right-5 mx-auto grid max-w-[1130px] grid-cols-2 overflow-hidden rounded-xl border border-white/80 bg-white/75 shadow-sm backdrop-blur-2xl md:bottom-7 md:left-8 md:right-8 md:grid-cols-4">
        {stats.map(({ title, detail, icon }, i) => (
          <div
            key={title}
            className={`flex min-h-[66px] items-center gap-3 border-black/10 px-3 py-3 sm:px-5 ${
              i % 2 === 0 ? "border-r" : ""
            } ${i < 2 ? "border-b md:border-b-0" : ""} ${
              i === 3 ? "md:border-l" : ""
            }`}
          >
            <span className="font-serif text-2xl text-neutral-500">
              {icon}
            </span>
            <span className="min-w-0">
              <b className="block text-xs">{title}</b>
              <small className="mt-1 block text-[10px] text-muted">
                {detail}
              </small>
            </span>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-[145px] right-8 hidden items-center gap-2 font-mono text-[9px] tracking-[.15em] text-neutral-500 transition-colors hover:text-ink md:flex"
      >
        SCROLL TO EXPLORE
        <ArrowDown size={13} />
      </a>
    </section>
  );
}


import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";
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

const socialLinks = [
  { label: "WhatsApp", href: profile.whatsapp, Icon: MessageCircle },
  { label: "Email", href: profile.email, Icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
  { label: "GitHub", href: profile.github, Icon: Github, external: true },
  { label: "Location", href: profile.location, Icon: MapPin, external: true },
];

const roles = [
  "Full-Stack Developer",
  "Computer Science Student",
  "Problem Solver",
  "Technology Enthusiast",
];

function TechScene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 5, 5]} intensity={2.2} />
      <pointLight position={[-4, -2, 3]} intensity={1.5} color="#d8c7a8" />

      <Float speed={1.3} rotationIntensity={0.22} floatIntensity={0.5}>
        <mesh position={[-0.85, 0.5, 0]} rotation={[0.3, 0.45, 0.15]}>
          <boxGeometry args={[1.05, 1.05, 1.05]} />
          <meshStandardMaterial
            color="#d9d9d3"
            metalness={0.65}
            roughness={0.25}
          />
        </mesh>
      </Float>

      <Float speed={1.7} rotationIntensity={0.3} floatIntensity={0.7}>
        <mesh position={[0.8, -0.25, 0.35]} rotation={[0.25, 0.4, 0.2]}>
          <boxGeometry args={[0.85, 0.85, 0.85]} />
          <meshStandardMaterial
            color="#9c9d99"
            metalness={0.75}
            roughness={0.22}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.8}>
        <mesh position={[0.85, 1.05, -0.6]} rotation={[0.4, 0.6, 0]}>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial
            color="#b9a88e"
            metalness={0.65}
            roughness={0.28}
          />
        </mesh>
      </Float>

      <ContactShadows
        position={[0, -1.5, -0.5]}
        opacity={0.22}
        scale={5}
        blur={2.5}
      />

      <Environment preset="studio" />
    </>
  );
}

function AnimatedRole({ reduceMotion }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <div className="mt-3 flex min-h-7 items-center gap-2 text-sm text-neutral-600">
      <span className="h-1.5 w-1.5 rounded-full bg-[#a58b66]" />

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
      {/* Soft background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#b9b9ae 0.7px, transparent 0.7px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(to right, black, transparent 80%)",
        }}
      />

      <div className="mx-auto grid min-h-[680px] max-w-[1240px] grid-cols-1 items-center gap-12 px-5 pb-44 pt-16 md:grid-cols-[1fr_.95fr] md:px-8 md:pb-36 md:pt-20">
        {/* Left: introduction */}
        <div className="relative z-10 max-w-[600px]">
          <Reveal>
            <p className="mb-5 flex items-center gap-3 font-mono text-[10px] tracking-[.18em] text-neutral-600">
              <span className="h-px w-7 bg-[#b9a17d]" />
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

          <Reveal delay={0.15}>
            <AnimatedRole reduceMotion={reduceMotion} />

            <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center gap-4 rounded-lg bg-ink px-5 text-xs font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-neutral-700 hover:shadow-lg"
              >
                View my work <ArrowRight size={15} />
              </a>

              <a
                href={profile.resume}
                download
                className="inline-flex min-h-11 items-center gap-3 rounded-lg border border-neutral-400 px-4 text-xs font-semibold transition duration-300 hover:-translate-y-1 hover:border-ink hover:bg-white"
              >
                <Download size={15} />
                Download resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  title={label}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="grid h-10 w-10 place-items-center rounded-full border border-neutral-300 bg-white/80 transition duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-white"
                >
                  <Icon size={17} strokeWidth={1.7} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: professional image + interactive 3D scene */}
        <Reveal delay={0.12} y={12} className="relative">
          <div className="group relative min-h-[350px] overflow-hidden rounded-2xl border border-black/10 bg-[#e7e6df] shadow-[0_20px_65px_rgba(0,0,0,0.10)] sm:min-h-[440px]">
            <motion.img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
              alt="Modern professional workspace with desks and computers"
              loading="eager"
              initial={reduceMotion ? false : { scale: 1.08 }}
              animate={reduceMotion ? undefined : { scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="absolute inset-0 h-full w-full object-cover object-center grayscale-[35%] transition duration-700 group-hover:grayscale-0"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-black/35" />

            {/* 3D scene overlay */}
            {!reduceMotion && (
              <div className="absolute inset-0">
                <Canvas
                  camera={{ position: [0, 0, 5], fov: 45 }}
                  dpr={[1, 1.5]}
                  gl={{ alpha: true, antialias: true }}
                >
                  <TechScene />
                </Canvas>
              </div>
            )}

            {/* Glass labels */}
            <div className="absolute left-4 top-4 rounded-xl border border-white/60 bg-white/65 px-4 py-3 shadow-sm backdrop-blur-xl sm:left-5 sm:top-5">
              <p className="font-mono text-[9px] tracking-[.16em] text-neutral-500">
                CURRENTLY BUILDING
              </p>
              <p className="mt-1 text-xs font-semibold text-ink">
                Ideas into reality
              </p>
            </div>

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
              className="absolute bottom-16 right-4 rounded-xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl sm:bottom-20 sm:right-5"
            >
              <p className="font-mono text-[9px] tracking-widest text-neutral-500">
                APPROACH
              </p>
              <p className="mt-1 text-xs font-medium text-ink">
                Build · Learn · Improve
              </p>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 bg-black/55 px-4 py-4 text-[9px] tracking-[.13em] text-white backdrop-blur-md sm:px-5">
              <span>DESIGN · CODE · BUILD</span>
              <span>PORTFOLIO / 2026</span>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-2 hidden rounded-xl border border-white/80 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-xl sm:block">
            <p className="font-mono text-[9px] tracking-widest text-neutral-500">
              BASED IN
            </p>
            <p className="mt-1 text-xs font-semibold">Mysuru, India</p>
          </div>
        </Reveal>
      </div>

      {/* Bottom statistics strip */}
      <div className="absolute bottom-5 left-5 right-5 mx-auto grid max-w-[1130px] grid-cols-2 overflow-hidden rounded-xl border border-black/10 bg-white/80 shadow-sm backdrop-blur-2xl md:bottom-7 md:left-8 md:right-8 md:grid-cols-4">
        {[
          ["Projects", "Practical solutions", "↗"],
          ["Tech stack", "Learning by building", "</>"],
          ["Mindset", "Always improving", "✳"],
          ["Education", "NIE Mysuru", "⌂"],
        ].map(([title, detail, icon], i) => (
          <div
            key={title}
            className={`flex min-h-[64px] items-center gap-3 border-black/10 px-3 py-3 sm:px-5 ${
              i % 2 === 0 ? "border-r" : ""
            } ${i < 2 ? "border-b md:border-b-0" : ""} ${
              i === 3 ? "md:border-l" : ""
            }`}
          >
            <span className="font-serif text-2xl text-neutral-500">
              {icon}
            </span>
            <span>
              <b className="block text-xs">{title}</b>
              <small className="mt-1 block text-[10px] text-muted">
                {detail}
              </small>
            </span>
          </div>
        ))}
      </div>

      <a
        href="#about"
        className="absolute bottom-[145px] right-8 hidden items-center gap-2 font-mono text-[9px] tracking-[.15em] text-neutral-500 md:flex"
      >
        SCROLL TO EXPLORE <ArrowDown size={13} />
      </a>
    </section>
  );
}

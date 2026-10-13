import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Code2, Lightbulb } from "lucide-react";
import { profile } from "../data";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const values = [
  { icon: Lightbulb, title: "Build with purpose", text: "Start with the problem and keep the solution useful." },
  { icon: Code2, title: "Learn by doing", text: "Turn new concepts into working projects." },
  { icon: BookOpen, title: "Improve the details", text: "Care about usability, readability, and reliability." },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
      <SectionHeading eyebrow="01 / ABOUT ME" title={<>Curious by nature.<br /><span className="text-neutral-500">Builder by practice.</span></>} />
      <div className="grid items-center gap-12 md:grid-cols-[.82fr_1.18fr]">
        <Reveal className="relative mx-auto w-full max-w-[380px]">
          <div className="absolute -inset-3 rounded-[28px] border border-[#d9c6a7]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-neutral-200">
            <img
              src={profile.photo}
              alt="Portrait of Prajwal M"
              onError={(event) => {
                event.currentTarget.src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85";
                event.currentTarget.alt = "Temporary profile photo placeholder — replace with your own photo";
              }}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 text-white"><p className="mb-1 font-mono text-[9px] tracking-[.18em]">COMPUTER SCIENCE</p><p className="font-serif text-2xl">Prajwal M.</p></div>
          </div>
          <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-3 top-7 rounded-xl border border-line bg-white p-3 shadow-soft sm:-right-6">
            <p className="font-mono text-[9px] tracking-widest text-muted">CURRENT FOCUS</p><p className="mt-1 text-xs font-semibold">Full-stack development</p>
          </motion.div>
        </Reveal>
        <Reveal delay={.12}>
          <p className="max-w-2xl text-lg leading-8 text-neutral-800">{profile.about}</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">As a CSE student, I’m building my foundation through hands-on projects, learning how the frontend and backend work together, and paying attention to both functionality and user experience.</p>
          <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#eeefea]"><BookOpen size={18} /></span>
            <span><small className="block font-mono text-[9px] tracking-widest text-muted">EDUCATION</small><b className="mt-1 block text-sm">Computer Science & Engineering</b><small className="text-muted">NIE Mysuru</small></span>
          </div>
          <a href="#projects" className="mt-7 inline-flex items-center gap-2 border-b border-neutral-400 pb-1 text-sm font-semibold">Explore my projects <ArrowUpRight size={15} /></a>
        </Reveal>
      </div>
      <div className="mt-16 grid gap-3 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * .08} className="rounded-xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:shadow-soft">
            <Icon size={20} className="text-[#8b7657]" /><h3 className="mt-5 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
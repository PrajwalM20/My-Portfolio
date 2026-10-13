import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Some things I’ve <span className="text-neutral-500">built.</span></>} />
        <p className="mb-10 max-w-sm text-sm leading-7 text-muted">Projects and concepts focused on practical workflows and useful digital experiences.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * .1}>
            <motion.article whileHover={{ y: -5 }} className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-soft">
              <div className="relative h-56 overflow-hidden bg-neutral-100">
                <img src={project.image} alt={`${project.name} project visual`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 font-mono text-[9px] tracking-widest text-neutral-700 backdrop-blur">{project.category}</span>
                <span className="absolute bottom-3 right-4 font-serif text-3xl text-white/90">{project.number}</span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3"><h3 className="font-serif text-2xl tracking-tight">{project.name}</h3><ArrowUpRight size={18} className="mt-1 text-[#8b7657] transition group-hover:-translate-y-1 group-hover:translate-x-1" /></div>
                <p className="mt-3 min-h-[88px] text-sm leading-6 text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.stack.map(item => <span key={item} className="rounded-full border border-line px-2.5 py-1 text-[10px] text-neutral-600">{item}</span>)}</div>
                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-ink px-3.5 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-700"><Github size={14} /> GitHub <ExternalLink size={12} /></a>
                  {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-3.5 py-2.5 text-xs font-semibold transition hover:border-ink"><ExternalLink size={13} /> Live demo</a> : <span className="self-center text-[10px] text-muted">Demo link not configured</span>}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <p className="mt-5 text-xs leading-6 text-muted">Before publishing, replace the profile-level GitHub links in <code className="rounded bg-[#efefeb] px-1.5 py-1">src/data.js</code> with each project's exact repository URL.</p>
    </section>
  );
}
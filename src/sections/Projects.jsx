
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import LiquidButton from "../components/LiquidButton";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title={
            <>
              Some things I’ve{" "}
              <span className="text-neutral-500">built.</span>
            </>
          }
        />

        <p className="mb-10 max-w-sm text-sm leading-7 text-muted">
          Projects and concepts focused on practical workflows and useful
          digital experiences.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.1}>
            <motion.article
              whileHover={{ y: -5 }}
              className="group h-full overflow-hidden rounded-2xl border border-line bg-transparent transition-shadow hover:shadow-soft"
            >
              {/* Project image */}
              <div className="relative h-56 overflow-hidden bg-neutral-100">
                <img
                  src={project.image}
                  alt={`${project.name} project visual`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 font-mono text-[9px] tracking-widest text-neutral-700 backdrop-blur">
                  {project.category}
                </span>

                <span className="absolute bottom-3 right-4 font-serif text-3xl text-white/90">
                  {project.number}
                </span>
              </div>

              {/* Project details */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl tracking-tight">
                    {project.name}
                  </h3>

                  <ArrowUpRight
                    size={18}
                    className="mt-1 text-[#8b7657] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <p className="mt-3 min-h-[88px] text-sm leading-6 text-muted">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-2.5 py-1 text-[10px] text-neutral-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Liquid-glass buttons */}
                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
                  <LiquidButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="min-h-10 rounded-xl px-3.5 py-2 text-xs"
                  >
                    <Github size={14} />
                    GitHub
                    <ExternalLink size={12} />
                  </LiquidButton>

                  {project.demo ? (
                    <LiquidButton
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      className="min-h-10 rounded-xl px-3.5 py-2 text-xs"
                    >
                      <ExternalLink size={13} />
                      Live demo
                    </LiquidButton>
                  ) : (
                    <span className="self-center text-[10px] text-muted">
                      Demo link not configured
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

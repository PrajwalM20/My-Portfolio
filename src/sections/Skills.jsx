import { motion } from "framer-motion";
import { skills } from "../data";
import SkillIcon from "../components/SkillIcon";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-y border-black/5 bg-[#efefeb]">
      <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">
        <SectionHeading eyebrow="02 / TOOLKIT" title={<>Technologies I <span className="text-neutral-500">work with.</span></>} description="A growing toolkit for building useful, maintainable web applications." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={(index % 4) * .06}>
              <motion.article whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="group relative h-full min-h-[155px] rounded-xl border border-line bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,.02)] hover:border-[#c7b69b] hover:shadow-soft">
                <span className="absolute right-4 top-4 font-mono text-[9px] text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#eeefea]"><SkillIcon name={skill.icon} /></div>
                <h3 className="mt-5 text-sm font-semibold">{skill.name}</h3>
                <p className="mt-1 text-xs text-muted">{skill.category}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted">Update this list in <code className="rounded bg-white px-1.5 py-1">src/data.js</code> to match the technologies you actually use.</p>
      </div>
    </section>
  );
}
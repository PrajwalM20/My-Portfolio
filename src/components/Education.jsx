import { motion } from "framer-motion";
import { GraduationCap, BookOpen, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data";

const education = [
  {
    number: "01",
    title: "Bachelor of Engineering",
    course: "Computer Science & Engineering",
    institution: profile.college,
    location: "Mysuru, Karnataka",
    description:
      "Studying computer science, software development, programming, databases and modern computing technologies.",
    status: "Undergraduate",
  },
];

export default function Education() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">

        <SectionHeading
          eyebrow="05 / EDUCATION"
          title={
            <>
              My academic{" "}
              <span className="text-orange">journey.</span>
            </>
          }
          description="The academic foundation behind my development journey."
        />

        <div className="mt-12 space-y-5">
          {education.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.12}>
              <motion.article
                whileHover={{ x: 5 }}
                className="rounded-2xl border border-line bg-white p-6 sm:p-9"
              >
                <div className="flex flex-col justify-between gap-5 sm:flex-row">
                  <div className="flex items-start gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                      <GraduationCap size={27} />
                    </div>

                    <div>
                      <p className="font-mono text-xs tracking-widest text-orange">
                        EDUCATION {item.number}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted">
                        {item.course}
                      </p>
                    </div>
                  </div>

                  <span className="h-fit w-fit rounded-full bg-orange/10 px-4 py-2 text-xs font-semibold text-orange">
                    {item.status}
                  </span>
                </div>

                <div className="mt-7 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-orange" size={19} />
                    <div>
                      <p className="text-xs text-muted">Institution</p>
                      <p className="text-sm font-semibold">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="text-orange" size={19} />
                    <div>
                      <p className="text-xs text-muted">Location</p>
                      <p className="text-sm font-semibold">
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Download, FileText, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data";

export default function Resume() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-[1180px] px-5 py-24 md:px-8 md:py-32">

        <SectionHeading
          eyebrow="06 / MY RESUME"
          title={
            <>
              My professional{" "}
              <span className="text-orange">profile.</span>
            </>
          }
          description="Explore my background, technical skills and projects."
        />

        <Reveal>
          <motion.div
            whileHover={{ y: -5 }}
            className="mt-12 rounded-3xl border border-line bg-white p-6 sm:p-12"
          >
            <div className="flex flex-col items-center text-center">
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-orange/10 text-orange">
                <FileText size={38} />
              </div>

              <h2 className="mt-6 text-3xl font-black">
                PRAJWAL M.
              </h2>

              <p className="mt-2 text-sm text-muted">
                Computer Science Student · Full-Stack Developer
              </p>

              <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
                View my resume to explore my education, skills, projects
                and technical experience.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-ink"
                >
                  <ExternalLink size={16} />
                  View Resume
                </a>

                <a
                  href={profile.resume}
                  download="Prajwal_Resume.pdf"
                  className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-bold transition hover:border-orange hover:text-orange"
                >
                  <Download size={16} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

import { GraduationCap, MapPin, BookOpen } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data";

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

        <Reveal>
          <div className="mt-12 rounded-2xl border border-line bg-white p-7 sm:p-10">

            <div className="flex items-start gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange">
                <GraduationCap size={28} />
              </div>

              <div>
                <span className="font-mono text-xs text-orange">
                  01 / UNDERGRADUATE
                </span>

                <h2 className="mt-2 text-2xl font-bold">
                  Bachelor of Engineering
                </h2>

                <p className="mt-2 text-sm text-muted">
                  Computer Science and Engineering
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <BookOpen className="text-orange" size={20} />
                <div>
                  <p className="text-xs text-muted">Institution</p>
                  <p className="font-semibold">{profile.college}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-orange" size={20} />
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="font-semibold">Mysuru, Karnataka</p>
                </div>
              </div>

            </div>

            <p className="mt-7 text-sm leading-7 text-muted">
              Currently pursuing Computer Science and Engineering,
              focusing on programming, software development,
              databases, and modern technologies.
            </p>

          </div>
        </Reveal>
      </div>
    </section>
  );
}

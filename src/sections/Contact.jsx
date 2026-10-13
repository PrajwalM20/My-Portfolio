import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "../data";
import Reveal from "../components/Reveal";

const contacts = [
  { title: "Message Me", subtitle: "WhatsApp", href: profile.whatsapp, Icon: MessageCircle, external: true, highlight: true },
  { title: "Email Me", subtitle: "Open email", href: profile.email, Icon: Mail },
  { title: "Connect", subtitle: "LinkedIn", href: profile.linkedin, Icon: Linkedin, external: true },
  { title: "Explore", subtitle: "GitHub", href: profile.github, Icon: Github, external: true },
  { title: "Location", subtitle: "Mysuru", href: profile.location, Icon: MapPin, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto mb-16 grid max-w-[1180px] gap-10 rounded-2xl border border-[#e0e1da] bg-[#eeefea] px-5 py-12 md:mb-20 md:grid-cols-[.85fr_1.15fr] md:px-12 md:py-16">
      <Reveal>
        <p className="mb-4 font-mono text-[10px] tracking-[.18em] text-[#8b7657]">04 / GET IN TOUCH</p>
        <h2 className="font-serif text-5xl leading-[1.04] tracking-[-.06em] sm:text-6xl">Have an idea?<br /><span className="text-neutral-500">Let’s talk.</span></h2>
        <p className="mt-5 max-w-sm text-sm leading-7 text-muted">I'm open to discussing projects, learning opportunities, and ideas around useful technology.</p>
      </Reveal>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {contacts.map(({ title, subtitle, href, Icon, external, highlight }, index) => (
          <Reveal key={title} delay={index * .06}>
            <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="flex min-h-[125px] flex-col items-start justify-between rounded-xl border border-[#d8d9d2] bg-white/75 p-4 transition hover:-translate-y-1 hover:border-[#b7a080] hover:bg-white">
              <span className={`grid h-9 w-9 place-items-center rounded-lg ${highlight ? "bg-[#dcebdc] text-[#2f7048]" : "bg-[#e5e6df] text-ink"}`}><Icon size={17} /></span>
              <span><b className="block text-xs">{title}</b><small className="mt-1 block text-[10px] text-muted">{subtitle} ↗</small></span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
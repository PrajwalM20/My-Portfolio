
import {
  Code2,
  Palette,
  Braces,
  Atom,
  Wind,
  Terminal,
  Coffee,
  Server,
  Database,
  GitBranch,
  Github,
} from "lucide-react";

const icons = {
  html: Code2,
  css: Palette,
  javascript: Braces,
  react: Atom,
  tailwind: Wind,
  python: Terminal,
  java: Coffee,
  node: Server,
  express: Server,
  mongodb: Database,
  mysql: Database,
  github: Github,
};

export default function SkillIcon({ name }) {
  const Icon = icons[name] || Code2;

  return (
    <Icon
      aria-hidden="true"
      className="h-6 w-6 text-neutral-700 transition-transform duration-300 group-hover:scale-110 group-hover:text-black"
    />
  );
}

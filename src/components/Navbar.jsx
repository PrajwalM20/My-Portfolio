import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Education", path: "/education" },
  { name: "Resume", path: "/resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-[1400px] rounded-full border border-white/20 bg-paper/90 shadow-lg backdrop-blur-xl">
        <div className="flex min-h-[68px] items-center justify-between gap-3 px-4 sm:px-7">

          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0 text-xl font-black tracking-tight text-ink"
          >
            PRAJWAL<span className="text-orange"> M.</span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-3 py-3 text-xs font-semibold transition ${
                    isActive
                      ? "bg-orange text-white"
                      : "text-ink hover:bg-orange/10 hover:text-orange"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-bold text-white transition hover:bg-orange sm:flex"
          >
            Let's Connect
            <ArrowUpRight size={15} />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full bg-orange text-white xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-ink/10 xl:hidden"
            >
              <div className="space-y-1 p-4">
                {links.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm font-semibold ${
                          isActive
                            ? "bg-orange text-white"
                            : "text-ink hover:bg-orange/10"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-orange px-4 py-3 font-semibold text-white"
                >
                  Let's Connect <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
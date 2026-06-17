import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/expertise", label: "Expertise" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const dark = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : isHome
          ? "bg-transparent"
          : "bg-background/80 backdrop-blur-sm border-b border-border/60"
      }`}
    >
      <div className="container-x mx-auto flex h-20 max-w-[1400px] items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className={`flex h-9 w-9 items-center justify-center border ${dark ? "border-white/50 text-white" : "border-foreground/70 text-foreground"} font-display text-lg leading-none`}>
            R
          </div>
          <div className="leading-tight">
            <div className={`font-display text-xl tracking-wide ${dark ? "text-white" : "text-foreground"}`}>
              Ratnanjali
            </div>
            <div className={`text-[10px] uppercase tracking-[0.28em] ${dark ? "text-white/70" : "text-muted-foreground"}`}>
              Group
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`group relative text-[13px] uppercase tracking-[0.18em] transition-colors ${
                dark ? "text-white/85 hover:text-white" : "text-foreground/75 hover:text-foreground"
              }`}
              activeProps={{ className: dark ? "text-white" : "text-foreground" }}
            >
              {n.label}
              <span className={`pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full`} />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden items-center gap-2 border px-5 py-2.5 text-[12px] uppercase tracking-[0.22em] transition-all hover:bg-foreground hover:text-background lg:inline-flex ${
            dark ? "border-white/70 text-white hover:bg-white hover:text-foreground" : "border-foreground text-foreground"
          }`}
        >
          Enquire
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${dark ? "text-white" : "text-foreground"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden bg-background border-t border-border transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-x mx-auto flex flex-col gap-1 py-6">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="py-3 text-base text-foreground/85 hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-3 inline-flex items-center justify-center border border-foreground px-5 py-3 text-[12px] uppercase tracking-[0.22em]">
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}

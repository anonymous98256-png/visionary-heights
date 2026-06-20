import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

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

  const onLightBg = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : isHome
          ? "bg-gradient-to-b from-foreground/40 to-transparent"
          : "bg-background/90 backdrop-blur-sm border-b border-border/60"
      }`}
    >
      <div
        className={`container-x mx-auto flex max-w-[1400px] items-center justify-between transition-all duration-500 ${
          scrolled ? "h-20" : "h-28"
        }`}
      >
        <Link to="/" className="flex items-center" aria-label="Ratnanjali Group — Home">
          {/* On dark hero, show inverted (white) logo. On light bg, original logo. */}
          {onLightBg ? (
            <Logo
              className={`w-auto transition-all duration-500 ${scrolled ? "h-10 md:h-11" : "h-14 md:h-16"}`}
              variant="dark"
            />
          ) : (
            <Logo
              className={`w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] transition-all duration-500 ${scrolled ? "h-10 md:h-11" : "h-14 md:h-16"}`}
              variant="light"
            />
          )}
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`group relative text-[13px] uppercase tracking-[0.18em] transition-colors ${
                onLightBg ? "text-foreground/75 hover:text-foreground" : "text-white/90 hover:text-white"
              }`}
              activeProps={{ className: onLightBg ? "text-foreground" : "text-white" }}
            >
              {n.label}
              <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden items-center gap-2 border px-5 py-2.5 text-[12px] uppercase tracking-[0.22em] transition-all lg:inline-flex ${
            onLightBg
              ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
              : "border-white/80 text-white hover:bg-white hover:text-foreground"
          }`}
        >
          Enquire
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${onLightBg ? "text-foreground" : "text-white"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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

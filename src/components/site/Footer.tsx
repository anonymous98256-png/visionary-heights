import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { DiamondArrow } from "./DiamondArrow";

/**
 * Premium footer with subtle Indian-inspired ornamentation:
 *  - Toran-style top divider (arched motif in gold)
 *  - Dark charcoal + warm gold palette
 *  - Devanagari accent, mandala watermark
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#141210] text-[#eee5d3]">
      {/* Toran / arched motif top border */}
      <TopToran />

      {/* Mandala watermark */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 opacity-[0.06]"
        width="520"
        height="520"
        viewBox="0 0 200 200"
      >
        <g stroke="#d9b972" strokeWidth="0.4" fill="none">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="72" strokeDasharray="1 3" />
          <circle cx="100" cy="100" r="54" />
          <circle cx="100" cy="100" r="36" strokeDasharray="0.5 2" />
          {Array.from({ length: 32 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 32;
            return (
              <line
                key={i}
                x1={100 + Math.cos(a) * 36}
                y1={100 + Math.sin(a) * 36}
                x2={100 + Math.cos(a) * 90}
                y2={100 + Math.sin(a) * 90}
              />
            );
          })}
        </g>
      </svg>

      <div className="container-x relative mx-auto max-w-[1400px] pb-10 pt-24">
        {/* Top wordmark row */}
        <div className="flex flex-col items-start gap-8 border-b border-[#3a332a] pb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo className="h-16 w-auto brightness-0 invert" />
            <div className="mt-5 flex items-center gap-3 text-[#d9b972]">
              <span className="h-px w-8 bg-[#d9b972]/70" />
              <span
                className="text-lg"
                style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}
              >
                रत्नांजलि
              </span>
              <span className="h-px w-8 bg-[#d9b972]/70" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-[1.75] text-[#c8bfae]">
              Crafting magnificent structures that exude class and luxury across Ahmedabad —
              residences, commercial landmarks, weekend estates and mixed-use developments,
              rooted in the values of trust, artistry and heritage.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-4 border border-[#d9b972]/40 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-[#eee5d3] transition-colors hover:bg-[#d9b972] hover:text-[#141210]"
          >
            Begin a Conversation
            <DiamondArrow direction="up-right" size={14} />
          </Link>
        </div>

        {/* Middle grid */}
        <div className="grid gap-12 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.32em] text-[#d9b972]">Corporate Office</div>
            <address className="mt-5 not-italic text-sm leading-[1.85] text-[#c8bfae]">
              Ratnanjali House, Ratnanjali Square,<br />
              Prernatirth Derasar Road,<br />
              Prahladnagar, Ahmedabad — 380015
            </address>
            <div className="mt-5 space-y-1 text-sm text-[#eee5d3]">
              <div>+91 79907 48656</div>
              <div className="text-[#c8bfae]">info@ratnanjaligroup.com</div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.32em] text-[#d9b972]">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/projects", label: "Projects" },
                { to: "/expertise", label: "Expertise" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-[#c8bfae] transition-colors hover:text-[#d9b972]"
                  >
                    <DiamondArrow
                      direction="right"
                      size={10}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100"
                      style={{ transform: "translateX(-6px)" }}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.32em] text-[#d9b972]">Sectors</div>
            <ul className="mt-5 space-y-3 text-sm text-[#c8bfae]">
              <li>Residential</li>
              <li>Commercial</li>
              <li>Hospitality</li>
              <li>Mixed Use</li>
              <li>Land Estates</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.32em] text-[#d9b972]">Newsletter</div>
            <p className="mt-5 text-sm leading-[1.75] text-[#c8bfae]">
              Occasional dispatches on new launches, private previews and design notes.
            </p>
            <form
              className="mt-5 flex items-center border border-[#3a332a] bg-[#1a1815] focus-within:border-[#d9b972]/60"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="you@address.com"
                className="w-full bg-transparent px-4 py-3 text-sm text-[#eee5d3] placeholder:text-[#7a7264] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center border-l border-[#3a332a] text-[#d9b972] transition-colors hover:bg-[#d9b972] hover:text-[#141210]"
              >
                <DiamondArrow direction="right" size={14} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#3a332a] pt-8 text-xs text-[#8a8272] md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Ratnanjali Group. All rights reserved.</div>
          <div className="flex flex-wrap gap-6">
            <span className="hover:text-[#d9b972]">Privacy</span>
            <span className="hover:text-[#d9b972]">Terms</span>
            <span className="hover:text-[#d9b972]">RERA Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function TopToran() {
  // Repeating arch motif inspired by traditional Indian toran/temple facades
  return (
    <svg
      aria-hidden
      className="block h-6 w-full text-[#d9b972]/60"
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="toran" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 12 Q6 0 12 12" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="6" cy="10.5" r="0.7" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="120" height="12" fill="url(#toran)" />
    </svg>
  );
}

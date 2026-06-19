import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroAsset from "@/assets/projects/hero-main-v2.jpg.asset.json";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-foreground text-background">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroAsset.url}
          alt="Ratnanjali landmark residential tower at golden hour"
          className="ken-burns h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/25 to-foreground/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,transparent,rgba(0,0,0,0.45))]" />
      </div>

      {/* Side rail */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex flex-col items-center gap-6">
          <div className="h-20 w-px bg-white/40" />
          <span className="rotate-180 text-[10px] uppercase tracking-[0.35em] text-white/70 [writing-mode:vertical-rl]">
            Est · MMVII · Ahmedabad
          </span>
          <div className="h-20 w-px bg-white/40" />
        </div>
      </div>

      {/* Content */}
      <div className="container-x relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end pb-24 pt-32 sm:pb-32">
        <div className="max-w-5xl">
          <div className="mb-6 flex items-center gap-4 text-white/85 opacity-0 animate-[fade-in_1s_ease-out_.3s_forwards]">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.32em]">A Ratnanjali Group Presentation</span>
          </div>

          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[0.95] text-white kerning-tight opacity-0 animate-[fade-in_1.2s_ease-out_.5s_forwards]">
            Building <em className="not-italic text-gold-soft">Landmarks.</em>
            <br />
            Creating Value.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg opacity-0 animate-[fade-in_1.2s_ease-out_.8s_forwards]">
            For nearly two decades, Ratnanjali Group has been shaping the skyline of Ahmedabad — crafting residences, commercial avenues, and weekend estates that stand as testimonies to vision, craft and trust.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-5 opacity-0 animate-[fade-in_1.2s_ease-out_1.1s_forwards]">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 bg-white px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-foreground transition-all hover:bg-gold-soft"
            >
              Explore Portfolio
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border border-white/60 px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-white transition-all hover:bg-white hover:text-foreground"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 hidden grid-cols-4 gap-8 border-t border-white/20 pt-8 text-white/85 opacity-0 animate-[fade-in_1.4s_ease-out_1.4s_forwards] md:grid">
          {[
            ["18+", "Years of Craft"],
            ["25+", "Landmark Projects"],
            ["3.2M", "Sq.Ft. Developed"],
            ["4,200+", "Families Served"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl text-gold-soft num">{n}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 opacity-0 animate-[fade-in_1.6s_ease-out_2s_forwards]">
        <ArrowDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}

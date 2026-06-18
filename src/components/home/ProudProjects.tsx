import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/RevealOnScroll";
import { projects } from "@/lib/projects";

const AUTO_MS = 5500;

export function ProudProjects() {
  const list = projects.slice(0, 4);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setIdx((i) => (i + 1) % list.length), AUTO_MS);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [idx, list.length]);

  const go = (dir: 1 | -1) =>
    setIdx((i) => (i + dir + list.length) % list.length);

  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="container-x mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Our Proud Projects</div>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl kerning-tight">
              A portfolio of <em className="not-italic text-foreground/70">considered</em> landmarks.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <Link to="/projects" className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.24em]">
              <span className="gold-underline">View All Projects</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div
            className="group/frame relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* Frame */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-border bg-stone shadow-[0_40px_100px_-40px_rgba(40,30,20,0.45)]">
              {/* Inner gold rule */}
              <div className="pointer-events-none absolute inset-3 z-30 border border-white/15" />

              {/* Track */}
              <div
                className="flex h-full transition-transform duration-[1100ms] ease-[cubic-bezier(.7,0,.2,1)]"
                style={{ width: `${list.length * 100}%`, transform: `translateX(-${(100 / list.length) * idx}%)` }}
              >
                {list.map((p) => (
                  <div key={p.slug} className="relative h-full" style={{ width: `${100 / list.length}%` }}>
                    <img src={p.cover} alt={p.name} className="h-full w-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent" />

                    <div className="absolute inset-0 flex flex-col justify-between p-8 text-white sm:p-12 lg:p-16">
                      <div className="flex items-start justify-between">
                        <div className="bg-background/90 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-foreground backdrop-blur-sm">
                          {p.categoryLabel} · {p.status}
                        </div>
                      </div>

                      <div className="max-w-3xl">
                        <div className="text-[11px] uppercase tracking-[0.28em] text-white/75">{p.location}</div>
                        <h3 className="mt-3 font-display text-4xl leading-[1.02] kerning-tight sm:text-6xl lg:text-7xl">
                          {p.name}
                        </h3>
                        <p className="mt-3 max-w-xl text-base italic text-white/85 sm:text-lg">{p.tagline}</p>
                        <div className="mt-6 h-px w-16 bg-gold" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                aria-label="Previous project"
                onClick={() => go(-1)}
                className={`absolute left-5 top-1/2 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/40 bg-foreground/30 text-white backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-foreground ${
                  hover ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                }`}
              >
                <ArrowLeft size={18} strokeWidth={1.5} />
              </button>
              <button
                aria-label="Next project"
                onClick={() => go(1)}
                className={`absolute right-5 top-1/2 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center border border-white/40 bg-foreground/30 text-white backdrop-blur-md transition-all duration-500 hover:bg-white hover:text-foreground ${
                  hover ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                }`}
              >
                <ArrowRight size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Indicators */}
            <div className="mt-8 flex items-center justify-end">
              <div className="flex gap-3">
                {list.map((p, i) => (
                  <button
                    key={p.slug}
                    onClick={() => setIdx(i)}
                    aria-label={`Go to ${p.name}`}
                    className={`h-px transition-all duration-500 ${i === idx ? "w-16 bg-foreground" : "w-8 bg-foreground/25 hover:bg-foreground/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

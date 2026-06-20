import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface Props {
  num: string;
  title: string;
  subtitle: string;
  items: Project[];
}

export function CategoryRow({ num, title, subtitle, items }: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 32 : el.clientWidth * 0.7;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className="border-t border-border/50 py-20 first:border-t-0 lg:py-28">
      {/* Section header */}
      <div className="container-x mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.2em] text-gold/80 num">{num}</span>
              <span className="inline-block h-px w-10 bg-gold/40" />
            </div>
            <h2 className="mt-5 font-display text-[2.25rem] leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground/90">
              {subtitle}
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-foreground/80 transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-border/80 disabled:hover:bg-transparent disabled:hover:text-foreground/80"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-foreground/80 transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-border/80 disabled:hover:bg-transparent disabled:hover:text-foreground/80"
            >
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll track — generous left padding so first card has breathing room */}
      <div
        ref={trackRef}
        className="mx-auto mt-14 flex max-w-[1400px] gap-8 overflow-x-auto pb-6 pt-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: "x mandatory",
          paddingLeft: "clamp(2rem, 5vw, 4rem)",
          paddingRight: "clamp(2rem, 5vw, 4rem)",
        }}
      >
        {items.map((p) => (
          <Link
            key={p.slug}
            to="/projects"
            data-card
            className="group relative block w-[78vw] shrink-0 overflow-hidden sm:w-[42vw] lg:w-[calc((100%-4rem)/3.1)]"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Image container */}
            <div className="relative aspect-[3/4] overflow-hidden border border-border/30 bg-stone">
              <img
                src={p.cover}
                alt={p.name}
                className="img-zoom h-full w-full object-cover"
                loading="lazy"
              />
              {/* Subtle vignette + hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />

              {/* Category badge */}
              <div className="absolute left-5 top-5">
                <span className="inline-block border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.25em] text-white backdrop-blur-md">
                  {p.categoryLabel}
                </span>
              </div>

              {/* Corner accent on hover */}
              <div className="absolute right-0 top-0 h-12 w-12 translate-x-full -translate-y-full transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0">
                <div className="absolute right-4 top-4 h-6 w-px bg-gold" />
                <div className="absolute right-4 top-4 h-px w-6 bg-gold" />
              </div>
            </div>

            {/* Text area */}
            <div className="mt-6 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70">
                  {p.location}
                </div>
                <h3 className="mt-2 font-display text-[1.375rem] leading-tight tracking-tight sm:text-2xl">
                  {p.name}
                </h3>
                <p className="mt-1.5 text-sm italic text-muted-foreground/80">{p.tagline}</p>
              </div>
              <div className="mt-1 shrink-0 rounded-full border border-border/60 p-2 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold">
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </div>
            </div>

            {/* Bottom gold accent line */}
            <div className="mt-5 h-px w-0 bg-gradient-to-r from-gold/70 to-transparent transition-all duration-700 group-hover:w-1/2" />
          </Link>
        ))}
      </div>
    </section>
  );
}

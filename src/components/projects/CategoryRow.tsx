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
    const w = card ? card.offsetWidth + 28 : el.clientWidth * 0.7;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <section className="border-t border-border/60 py-20 first:border-t-0 lg:py-28">
      <div className="container-x mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="flex items-baseline gap-4">
              <div className="font-display text-sm text-gold num tracking-[0.32em]">{num}</div>
              <div className="h-px w-12 bg-gold/50" />
            </div>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] kerning-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-3 max-w-md text-sm text-muted-foreground sm:text-base">{subtitle}</p>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              aria-label="Scroll left"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
            >
              <ArrowLeft size={15} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-foreground"
            >
              <ArrowRight size={15} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mx-auto mt-12 flex max-w-[1400px] gap-7 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12 xl:px-16 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory", scrollPaddingLeft: "1.25rem" }}
      >
        {items.map((p) => (
          <Link
            key={p.slug}
            to="/projects"
            data-card
            className="group block w-[72vw] shrink-0 sm:w-[40vw] lg:w-[calc((100%-3.5rem)/3.4)]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              <img src={p.cover} alt={p.name} className="img-zoom h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-4 top-4 bg-background/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] backdrop-blur-sm">
                {p.categoryLabel}
              </div>
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{p.location}</div>
                <h3 className="mt-2 font-display text-xl leading-tight sm:text-2xl">{p.name}</h3>
                <p className="mt-1 text-sm italic text-muted-foreground">{p.tagline}</p>
              </div>
              <ArrowUpRight size={18} className="mt-1 shrink-0 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

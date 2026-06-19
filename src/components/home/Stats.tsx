import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/RevealOnScroll";

const stats = [
  { v: 18, suffix: "+", l: "Years of Experience", k: "Crafting since 2007" },
  { v: 25, suffix: "+", l: "Projects Delivered", k: "Across Ahmedabad" },
  { v: 3.2, suffix: "M", l: "Sq.Ft. Developed", k: "Residential & commercial", decimals: 1 },
  { v: 4200, suffix: "+", l: "Families Served", k: "Trusted homeowners" },
];

function useCount(target: number, decimals = 0) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return [val.toFixed(decimals), ref] as const;
}

function Stat({ v, suffix, l, k, decimals = 0, num }: { v: number; suffix: string; l: string; k: string; decimals?: number; num: string }) {
  const [val, ref] = useCount(v, decimals);
  return (
    <div ref={ref} className="group relative flex flex-col gap-3 px-6 py-8 lg:px-8">
      <div className="text-[10px] uppercase tracking-[0.32em] text-gold">{num}</div>
      <div className="font-display text-4xl leading-none text-foreground num sm:text-5xl lg:text-[3.25rem]">
        {val}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="space-y-0.5">
        <div className="font-display text-base text-foreground">{l}</div>
        <div className="text-xs leading-relaxed text-muted-foreground">{k}</div>
      </div>
      <div className="mt-1 h-px w-10 bg-gold/60 transition-all duration-700 group-hover:w-20" />
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative bg-stone-soft py-20 lg:py-28">
      <div className="container-x mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow eyebrow-gold mb-4"><span className="rule" />Impact in Numbers</div>
              <h2 className="font-display text-3xl leading-[1.05] kerning-tight sm:text-4xl lg:text-[2.5rem]">
                Two decades. <em className="not-italic text-foreground/65">Measured in trust.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Every figure represents a family welcomed, a brand homed, and a piece of the city carefully composed.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 divide-y divide-border/70 border-y border-border/70 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {stats.map((s, i) => (
            <Stat key={s.l} {...s} num={`0${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

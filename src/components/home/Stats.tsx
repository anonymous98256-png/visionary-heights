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
    <div ref={ref} className="group relative flex flex-col gap-5 py-12 lg:py-16">
      <div className="text-[10px] uppercase tracking-[0.32em] text-gold">{num}</div>
      <div className="font-display text-6xl leading-none text-foreground num sm:text-7xl lg:text-[6rem] xl:text-[7rem]">
        {val}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-2 space-y-1">
        <div className="font-display text-lg text-foreground sm:text-xl">{l}</div>
        <div className="text-xs leading-relaxed text-muted-foreground">{k}</div>
      </div>
      <div className="mt-2 h-px w-12 bg-gold/60 transition-all duration-700 group-hover:w-24" />
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative bg-stone-soft py-24 lg:py-36">
      <div className="container-x mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Impact in Numbers</div>
            <h2 className="font-display text-4xl leading-[1.02] kerning-tight sm:text-5xl lg:text-[3.5rem]">
              Two decades.<br />
              <em className="not-italic text-foreground/65">Measured in trust.</em>
            </h2>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Every figure represents a family welcomed, a brand homed, and a piece of the city carefully composed.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <div className="grid divide-y divide-border/70 border-y border-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {stats.slice(0, 2).map((s, i) => (
                <Stat key={s.l} {...s} num={`0${i + 1}`} />
              ))}
            </div>
            <div className="grid divide-y divide-border/70 border-b border-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {stats.slice(2, 4).map((s, i) => (
                <Stat key={s.l} {...s} num={`0${i + 3}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

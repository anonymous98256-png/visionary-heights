import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/site/RevealOnScroll";

const stats = [
  { v: 18, suffix: "+", l: "Years of Experience" },
  { v: 25, suffix: "+", l: "Projects Delivered" },
  { v: 3.2, suffix: "M", l: "Sq.Ft. Developed", decimals: 1 },
  { v: 4200, suffix: "+", l: "Happy Families" },
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

function Stat({ v, suffix, l, decimals = 0 }: { v: number; suffix: string; l: string; decimals?: number }) {
  const [val, ref] = useCount(v, decimals);
  return (
    <div ref={ref}>
      <div className="font-display text-6xl text-foreground num sm:text-7xl lg:text-[5.5rem]">
        {val}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{l}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="border-y border-border bg-background py-24 lg:py-32">
      <div className="container-x mx-auto max-w-[1400px]">
        <Reveal>
          <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Impact in Numbers</div>
        </Reveal>
        <div className="mt-8 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((s) => <Stat key={s.l} {...s} />)}
        </div>
      </div>
    </section>
  );
}

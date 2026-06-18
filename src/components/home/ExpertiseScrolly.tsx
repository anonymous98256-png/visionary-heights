import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import hastinapur from "@/assets/projects/hastinapur-night.jpg.asset.json";
import square from "@/assets/projects/square-hero.jpg.asset.json";
import ayodhya from "@/assets/projects/ayodhya-pathway.jpg.asset.json";
import solitaire from "@/assets/projects/solitaire-detail.jpg.asset.json";

interface Chapter {
  num: string;
  title: string;
  desc: string;
  img: string;
}

const chapters: Chapter[] = [
  { num: "01", title: "Residential", desc: "Towering apartments and heritage villas designed around light, air and family.", img: hastinapur.url },
  { num: "02", title: "Commercial", desc: "Showrooms, offices and garden workspaces at the city's most prestigious addresses.", img: square.url },
  { num: "03", title: "Hospitality", desc: "Weekend estates, resorts and lifestyle clubhouses immersed in nature.", img: ayodhya.url },
  { num: "04", title: "Mixed Use", desc: "Integrated destinations that bring living, working and leisure into one canvas.", img: solitaire.url },
];

// Final quadrant positions (matching the original 2×2 grid)
const quadrants = [
  { left: 0, top: 0 },        // TL
  { left: 50, top: 0 },       // TR
  { left: 0, top: 50 },       // BL
  { left: 50, top: 50 },      // BR
] as const;

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

export function ExpertiseScrolly() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const computeTarget = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      target.current = clamp01(-rect.top / total);
    };
    const tick = () => {
      current.current = lerp(current.current, target.current, 0.1);
      if (Math.abs(current.current - target.current) < 0.0005) current.current = target.current;
      setProgress(current.current);
      raf.current = requestAnimationFrame(tick);
    };
    computeTarget();
    current.current = target.current;
    setProgress(target.current);
    raf.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", computeTarget);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", computeTarget);
    };
  }, []);

  // 5 segments of 0.2 each:
  // s0: p1 full | s1: p1→TL, p2 enters full | s2: p2→TR, p3 enters | s3: p3→BL, p4 enters | s4: p4→BR (final grid)
  const computePanel = (i: number) => {
    const enterAt = i * 0.2;
    const enterFull = enterAt + 0.03;
    const lockStart = (i + 1) * 0.2;
    const lockEnd = (i + 2) * 0.2;

    let left = 0, top = 0, width = 100, height = 100, opacity = 0;
    const q = quadrants[i];

    if (progress < enterAt) {
      // Hidden, parked at quadrant for graceful initial paint
      left = q.left; top = q.top; width = 50; height = 50; opacity = 0;
    } else if (progress < enterFull) {
      const t = (progress - enterAt) / (enterFull - enterAt);
      opacity = t;
    } else if (progress < lockStart) {
      opacity = 1;
    } else if (progress < lockEnd) {
      const t = easeInOut((progress - lockStart) / (lockEnd - lockStart));
      left = lerp(0, q.left, t);
      top = lerp(0, q.top, t);
      width = lerp(100, 50, t);
      height = lerp(100, 50, t);
      opacity = 1;
    } else {
      left = q.left; top = q.top; width = 50; height = 50; opacity = 1;
    }

    return {
      style: {
        left: `${left}%`,
        top: `${top}%`,
        width: `${width}%`,
        height: `${height}%`,
        opacity,
        zIndex: i + 1,
      } as React.CSSProperties,
      isFull: width > 75,
    };
  };

  return (
    <section ref={sectionRef} className="relative bg-foreground" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Eyebrow overlay */}
        <div className="pointer-events-none absolute left-1/2 top-8 z-50 -translate-x-1/2 text-center">
          <div className="eyebrow text-white/70"><span className="rule" />Development Expertise</div>
        </div>

        {/* Progress indicator */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-50 -translate-x-1/2">
          <div className="flex items-center gap-3">
            {chapters.map((_, i) => {
              const active = progress >= i * 0.2 && progress < (i + 1) * 0.2 + 0.001;
              const done = progress >= (i + 1) * 0.2;
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className={`text-[10px] tracking-[0.3em] transition-colors ${active || done ? "text-gold-soft" : "text-white/40"}`}>
                    0{i + 1}
                  </span>
                  {i < chapters.length - 1 && <span className={`h-px w-8 transition-colors ${done ? "bg-gold-soft" : "bg-white/20"}`} />}
                </div>
              );
            })}
          </div>
        </div>

        {chapters.map((c, i) => {
          const { style, isFull } = computePanel(i);
          return (
            <div
              key={c.title}
              className="absolute overflow-hidden bg-foreground transition-none"
              style={{ ...style, transitionProperty: "opacity", transitionDuration: "300ms" }}
            >
              <div className="absolute inset-0">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-full w-full object-cover"
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />
              </div>

              {/* Fullscreen content */}
              <div
                className="absolute inset-0 flex items-end p-8 text-white transition-opacity duration-500 sm:p-12 lg:p-20"
                style={{ opacity: isFull ? 1 : 0, pointerEvents: isFull ? "auto" : "none" }}
              >
                <div className="max-w-3xl">
                  <div className="font-display text-2xl text-gold-soft md:text-3xl">{c.num}</div>
                  <h2 className="mt-4 font-display text-5xl leading-[0.95] kerning-tight sm:text-7xl lg:text-8xl xl:text-9xl">
                    {c.title}
                  </h2>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
                    {c.desc}
                  </p>
                  <Link to="/projects" className="mt-10 inline-flex items-center gap-3 border border-white/60 px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] transition-all hover:bg-white hover:text-foreground">
                    Explore {c.title}
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Quadrant (card) content */}
              <div
                className="absolute inset-0 flex flex-col justify-between p-5 text-white transition-opacity duration-500 sm:p-7"
                style={{ opacity: isFull ? 0 : 1, pointerEvents: isFull ? "none" : "auto" }}
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-base text-white/80 sm:text-lg">{c.num}</span>
                  <ArrowUpRight size={18} className="text-white/80" />
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl">{c.title}</h3>
                  <p className="mt-2 hidden max-w-xs text-xs leading-relaxed text-white/80 sm:block sm:text-sm">
                    {c.desc}
                  </p>
                  <div className="mt-4 h-px w-10 bg-gold" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

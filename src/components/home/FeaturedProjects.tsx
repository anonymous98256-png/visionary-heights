import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/RevealOnScroll";
import { projects } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = projects.slice(0, 4);
  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="container-x mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Selected Work</div>
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

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-y-24">
          {featured.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={(i % 2) as 0 | 1}
              className={i % 2 === 1 ? "md:mt-24" : ""}
            >
              <Link to="/projects" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                  <img src={p.cover} alt={p.name} className="img-zoom h-full w-full object-cover" loading="lazy" />
                  <div className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] backdrop-blur-sm">
                    {p.categoryLabel} · {p.status}
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{p.location}</div>
                    <h3 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">{p.name}</h3>
                    <p className="mt-1 text-base italic text-muted-foreground">{p.tagline}</p>
                  </div>
                  <ArrowUpRight size={22} className="mt-3 shrink-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

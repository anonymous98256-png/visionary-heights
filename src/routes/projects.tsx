import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import { projects, type ProjectCategory } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ratnanjali Group" },
      { name: "description", content: "Explore residential, commercial, hospitality and mixed-use developments by Ratnanjali Group across Ahmedabad." },
    ],
  }),
  component: ProjectsPage,
});

const filters: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "hospitality", label: "Hospitality" },
  { key: "mixed-use", label: "Mixed Use" },
];

function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const list = active === "all" ? projects : projects.filter((p) => p.category === active);
  return (
    <PageShell>
      <section className="pb-12 pt-40 lg:pt-48">
        <div className="container-x mx-auto max-w-[1400px]">
          <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Portfolio</div>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl kerning-tight">
            Landmark developments across <em className="text-foreground/70">Ahmedabad.</em>
          </h1>
        </div>
      </section>

      <section className="border-y border-border bg-stone-soft py-6">
        <div className="container-x mx-auto flex max-w-[1400px] flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`border px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-all ${
                active === f.key ? "border-foreground bg-foreground text-background" : "border-border bg-transparent text-foreground/70 hover:border-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}>
              <Link to="/projects" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                  <img src={p.cover} alt={p.name} className="img-zoom h-full w-full object-cover" loading="lazy" />
                  <div className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em]">{p.categoryLabel}</div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">{p.location}</div>
                    <h3 className="mt-2 font-display text-2xl">{p.name}</h3>
                    <p className="mt-1 text-sm italic text-muted-foreground">{p.tagline}</p>
                  </div>
                  <ArrowUpRight size={20} className="mt-2 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

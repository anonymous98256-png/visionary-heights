import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { CategoryRow } from "@/components/projects/CategoryRow";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ratnanjali Group" },
      { name: "description", content: "Explore Exclusive, Residential, Commercial, Hospitality and Mixed-Use developments by Ratnanjali Group across Ahmedabad." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  // "Exclusive" = a curated set of our most defining work.
  const exclusive = projects.slice(0, 4);
  const residential = projects.filter((p) => p.category === "residential");
  const commercial = projects.filter((p) => p.category === "commercial");
  const hospitality = projects.filter((p) => p.category === "hospitality");
  const mixedUse = projects.filter((p) => p.category === "mixed-use");

  return (
    <PageShell>
      {/* Hero header */}
      <section className="relative overflow-hidden pb-16 pt-44 lg:pt-52">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-soft/40 via-transparent to-transparent" />
        <div className="container-x relative mx-auto max-w-[1400px]">
          <div className="flex items-center gap-5 mb-8">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow eyebrow-gold">Portfolio</span>
          </div>
          <h1 className="max-w-5xl font-display text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[5.25rem] kerning-tight">
            Landmark developments
            <br className="hidden sm:block" />
            <span className="text-foreground/60"> across Ahmedabad.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            A chronicle of our work — organised by chapter.
            <br className="hidden sm:block" />
            Move horizontally through each discipline.
          </p>
          <div className="mt-12 h-px w-full max-w-xs bg-gradient-to-r from-border via-border/60 to-transparent" />
        </div>
      </section>

      <div className="space-y-0">
        <CategoryRow num="01" title="Exclusive" subtitle="A curated selection of our most defining work." items={exclusive} />
        <CategoryRow num="02" title="Residential" subtitle="Apartments, villas and homes built around family life." items={residential} />
        <CategoryRow num="03" title="Commercial" subtitle="Headquarters, business avenues and prestige offices." items={commercial} />
        <CategoryRow num="04" title="Hospitality" subtitle="Weekend estates, resorts and clubhouses immersed in landscape." items={hospitality} />
        <CategoryRow num="05" title="Mixed Use" subtitle="Integrated destinations bringing living, working and leisure together." items={mixedUse} />
      </div>
    </PageShell>
  );
}

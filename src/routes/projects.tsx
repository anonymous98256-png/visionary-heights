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
      <section className="pb-12 pt-40 lg:pt-48">
        <div className="container-x mx-auto max-w-[1400px]">
          <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Portfolio</div>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl kerning-tight">
            Landmark developments across <em className="text-foreground/70">Ahmedabad.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A chronicle of our work — organised by chapter. Move horizontally through each discipline.
          </p>
        </div>
      </section>

      <CategoryRow num="01" title="Exclusive" subtitle="A curated selection of our most defining work." items={exclusive} />
      <CategoryRow num="02" title="Residential" subtitle="Apartments, villas and homes built around family life." items={residential} />
      <CategoryRow num="03" title="Commercial" subtitle="Headquarters, business avenues and prestige offices." items={commercial} />
      <CategoryRow num="04" title="Hospitality" subtitle="Weekend estates, resorts and clubhouses immersed in landscape." items={hospitality} />
      <CategoryRow num="05" title="Mixed Use" subtitle="Integrated destinations bringing living, working and leisure together." items={mixedUse} />
    </PageShell>
  );
}

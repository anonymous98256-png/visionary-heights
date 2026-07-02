import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { DiamondArrow } from "@/components/site/DiamondArrow";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.name ?? "Project"} — Ratnanjali Group` },
      { name: "description", content: loaderData?.project.description ?? "" },
    ],
  }),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative h-[86vh] min-h-[560px] w-full overflow-hidden bg-foreground text-background">
        <img
          src={project.cover}
          alt={project.name}
          className="ken-burns absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/25 to-foreground/85" />
        <div className="container-x relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end pb-20 pt-32">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/80 transition-colors hover:text-white"
          >
            <DiamondArrow direction="left" size={12} />
            Back to Projects
          </Link>
          <div className="flex items-center gap-4 text-white/85">
            <span className="h-px w-10 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.32em]">
              {project.categoryLabel} · {project.status}
            </span>
          </div>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[0.98] text-white kerning-tight">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg italic text-white/85">{project.tagline}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-border bg-background py-24 lg:py-32">
        <div className="container-x mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow eyebrow-gold mb-4"><span className="rule" />Overview</div>
            <dl className="mt-6 space-y-6 text-sm">
              <Row label="Location" value={project.location} />
              <Row label="Year" value={project.year} />
              <Row label="Configuration" value={project.configuration} />
              <Row label="Category" value={project.categoryLabel} />
              <Row label="Status" value={project.status[0].toUpperCase() + project.status.slice(1)} />
            </dl>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {project.description}
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-3 border border-border/70 bg-stone-soft/40 p-5"
                >
                  <DiamondArrow direction="right" size={14} className="mt-0.5 text-gold" />
                  <span className="text-[15px] leading-relaxed text-foreground/85">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <section className="bg-stone-soft/50 py-24 lg:py-32">
          <div className="container-x mx-auto max-w-[1400px]">
            <div className="mb-14 flex items-end justify-between">
              <div>
                <div className="eyebrow eyebrow-gold mb-4"><span className="rule" />Gallery</div>
                <h2 className="font-display text-3xl sm:text-4xl">A closer look.</h2>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((src, i) => (
                <div
                  key={src + i}
                  className={`overflow-hidden border border-border/60 bg-stone ${
                    i === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                  }`}
                >
                  <img src={src} alt={`${project.name} — ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-y border-border bg-background py-20">
        <div className="container-x mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="eyebrow eyebrow-gold mb-3"><span className="rule" />Enquire</div>
            <h3 className="font-display text-3xl sm:text-4xl">Interested in {project.name}?</h3>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Schedule a private walkthrough with our sales concierge.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-background transition-colors hover:bg-gold hover:text-foreground"
          >
            Schedule a Visit
            <DiamondArrow direction="up-right" size={14} />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="bg-background py-24">
        <div className="container-x mx-auto max-w-[1400px]">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="eyebrow eyebrow-gold mb-3"><span className="rule" />Also Explore</div>
              <h3 className="font-display text-3xl sm:text-4xl">Other landmarks.</h3>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em]"
            >
              <span className="gold-underline">All Projects</span>
              <DiamondArrow direction="up-right" size={12} />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden border border-border/50 bg-stone">
                  <img src={p.cover} alt={p.name} className="img-zoom h-full w-full object-cover" />
                </div>
                <div className="mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {p.categoryLabel}
                </div>
                <div className="mt-1 font-display text-2xl">{p.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col border-b border-border/60 pb-4">
      <dt className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 text-base text-foreground/90">{value}</dd>
    </div>
  );
}

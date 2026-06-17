import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Our Expertise — Ratnanjali Group" },
      { name: "description", content: "Capabilities across residential, commercial, hospitality, retail and mixed-use development." },
    ],
  }),
  component: ExpertisePage,
});

const capabilities = [
  { n: "01", t: "Residential Development", d: "Towering apartments, heritage villas, plotted communities. Designed around light, air and family rituals." },
  { n: "02", t: "Commercial Development", d: "Headquarters, business avenues and garden offices that elevate enterprise and attract clientele." },
  { n: "03", t: "Hospitality Development", d: "Weekend estates, resort homes and clubhouses immersed in landscape and ritual." },
  { n: "04", t: "Retail Development", d: "High-street showrooms, lifestyle malls and mixed retail formats engineered for footfall." },
  { n: "05", t: "Mixed Use Development", d: "Integrated destinations bringing living, working, leisure and retail into one master plan." },
];

function ExpertisePage() {
  return (
    <PageShell>
      <section className="pb-12 pt-40 lg:pt-48">
        <div className="container-x mx-auto max-w-[1400px]">
          <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Capabilities</div>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl kerning-tight">
            A full-spectrum developer — across every <em className="text-foreground/70">scale and discipline.</em>
          </h1>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="container-x mx-auto max-w-[1400px]">
          <ul className="divide-y divide-border border-y border-border">
            {capabilities.map((c, i) => (
              <Reveal as="li" key={c.n} delay={(i % 3) as 0 | 1 | 2}>
                <div className="group grid grid-cols-[auto_1fr] items-start gap-8 py-10 transition-colors hover:bg-stone-soft md:grid-cols-[120px_1fr_2fr] md:gap-12 md:py-14">
                  <div className="font-display text-4xl text-foreground/30 num md:text-5xl">{c.n}</div>
                  <h2 className="col-span-2 font-display text-3xl md:col-span-1 md:text-4xl">{c.t}</h2>
                  <p className="col-span-2 text-[15px] leading-[1.85] text-foreground/75 md:col-span-1">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

import { Reveal } from "@/components/site/RevealOnScroll";

const steps = [
  { n: "01", t: "Vision", d: "We start with site, story and the city. A project's intent is set before a single line is drawn." },
  { n: "02", t: "Planning", d: "Master plans built around light, wind, vastu and movement — refined with structural and MEP consultants." },
  { n: "03", t: "Design", d: "Named architects shape elevations and amenity programs that age well and feel inevitable." },
  { n: "04", t: "Development", d: "On-site discipline: specified materials, audited grades, in-house quality reviews at every slab." },
  { n: "05", t: "Delivery", d: "Possession on schedule. Handover documents, ongoing maintenance partnerships, and an open line to the developer." },
];

export function Process() {
  return (
    <section className="bg-stone-soft py-28 lg:py-36">
      <div className="container-x mx-auto max-w-[1400px]">
        <Reveal className="max-w-3xl">
          <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Development Process</div>
          <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl kerning-tight">
            From first sketch <em className="text-foreground/70">to handed keys.</em>
          </h2>
        </Reveal>

        <div className="mt-16 overflow-x-auto pb-4">
          <ol className="relative grid min-w-[900px] grid-cols-5 gap-px bg-border lg:min-w-0">
            <div className="absolute left-0 right-0 top-12 h-px bg-gold/50" />
            {steps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={(i % 4) as 0 | 1 | 2 | 3} className="relative bg-stone-soft p-8 pt-0">
                <div className="relative flex flex-col">
                  <div className="z-10 -ml-1 flex h-6 w-6 items-center justify-center rounded-full border border-gold bg-stone-soft">
                    <div className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <div className="mt-8 font-display text-5xl text-foreground/30 num">{s.n}</div>
                  <h3 className="mt-2 font-display text-2xl">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

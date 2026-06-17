import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/RevealOnScroll";
import aboutDetail from "@/assets/projects/about-detail.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ratnanjali Group" },
      { name: "description", content: "Two decades of crafting landmark real estate developments across Ahmedabad." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <section className="pb-20 pt-40 lg:pt-48">
        <div className="container-x mx-auto max-w-[1400px]">
          <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />About Ratnanjali</div>
          <h1 className="max-w-5xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl kerning-tight">
            A real estate house built on <em className="text-foreground/70">craft, candour and quiet ambition.</em>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img src={aboutDetail.url} alt="Architectural detail" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </Reveal>
          <div className="lg:col-span-7 lg:pt-8">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl">Our Story</h2>
              <p className="mt-6 text-[15px] leading-[1.85] text-foreground/75">
                Ratnanjali Group began with a simple conviction: that a building must outlive trends. Over two decades, that conviction has shaped a portfolio of residences, commercial avenues and weekend estates across Ahmedabad — quietly establishing a reputation for considered architecture, honest construction and timely delivery.
              </p>
            </Reveal>
            <Reveal delay={1} className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="eyebrow eyebrow-gold mb-3">Mission</div>
                <p className="text-sm leading-relaxed text-foreground/80">To craft developments that age with grace and earn their place in the city's memory.</p>
              </div>
              <div>
                <div className="eyebrow eyebrow-gold mb-3">Vision</div>
                <p className="text-sm leading-relaxed text-foreground/80">A skyline shaped by buildings that future generations are proud to inherit.</p>
              </div>
            </Reveal>
            <Reveal delay={2} className="mt-12 border-t border-border pt-10">
              <div className="eyebrow eyebrow-gold mb-6">Leadership</div>
              <div className="grid gap-8 sm:grid-cols-2">
                {["Mr. Sanyam Shah — Director", "In-House Design Studio", "Structural Consultancy — Setu Infrastructure", "Architectural Partners — HM, 99 Studio, Misa"].map((n) => (
                  <div key={n} className="border-l-2 border-gold pl-4">
                    <div className="font-display text-lg">{n}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

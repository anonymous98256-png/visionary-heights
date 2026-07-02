import { Link } from "@tanstack/react-router";
import { DiamondArrow } from "@/components/site/DiamondArrow";
import aboutDetail from "@/assets/projects/about-detail.jpg.asset.json";
import { Reveal } from "@/components/site/RevealOnScroll";

export function Overview() {
  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="container-x mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="relative aspect-[4/5] overflow-hidden bg-stone">
              <img src={aboutDetail.url} alt="Architectural detail" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span className="uppercase tracking-[0.24em]">Craft · Material · Light</span>
              <span className="font-display text-base">— Ahmedabad</span>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-12">
          <Reveal>
            <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Who We Are</div>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl kerning-tight">
              A real estate house known for <em className="text-foreground/70">crafting elegant structures that kiss the skies.</em>
            </h2>
          </Reveal>

          <Reveal delay={1} className="mt-10 max-w-2xl space-y-6 text-[15px] leading-[1.85] text-foreground/75">
            <p>
              Ratnanjali Group has spent nearly two decades developing residences, commercial avenues and landmark mixed-use destinations across Ahmedabad — quietly building a reputation for considered architecture, honest construction, and timely delivery.
            </p>
            <p>
              Our work spans intimate weekend villas in Thol to glass-and-greenery business landmarks in Prahladnagar. Every project is anchored by the same principle: a building should outlive trends and earn its place in the city's memory.
            </p>
          </Reveal>

          <Reveal delay={2} className="mt-12 grid max-w-2xl grid-cols-2 gap-x-10 gap-y-8 border-t border-border pt-10">
            {[
              ["Architectural Craft", "In-house design oversight on every elevation."],
              ["Green & Sustainable", "Rainwater harvesting, sewage treatment, low-impact materials."],
              ["Strategic Locations", "Plotted at the most prestigious addresses of the city."],
              ["Timely Delivery", "Possession on schedule — a commitment we honour."],
            ].map(([t, d]) => (
              <div key={t}>
                <div className="font-display text-lg">{t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={3} className="mt-12">
            <Link to="/about" className="group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.24em] text-foreground">
              <span className="gold-underline">Read Our Story</span>
              <DiamondArrow direction="up-right" size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

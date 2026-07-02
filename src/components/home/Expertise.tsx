import { Link } from "@tanstack/react-router";
import { DiamondArrow } from "@/components/site/DiamondArrow";
import { Reveal } from "@/components/site/RevealOnScroll";
import hastinapur from "@/assets/projects/hastinapur-night.jpg.asset.json";
import square from "@/assets/projects/square-hero.jpg.asset.json";
import ayodhya from "@/assets/projects/ayodhya-pathway.jpg.asset.json";
import solitaire from "@/assets/projects/solitaire-detail.jpg.asset.json";

const sectors = [
  { num: "01", title: "Residential", desc: "Towering apartments and heritage villas designed around light, air and family.", img: hastinapur.url, to: "/projects" },
  { num: "02", title: "Commercial", desc: "Showrooms, offices and garden workspaces at the city's most prestigious addresses.", img: square.url, to: "/projects" },
  { num: "03", title: "Hospitality", desc: "Weekend estates, resorts and lifestyle clubhouses immersed in nature.", img: ayodhya.url, to: "/projects" },
  { num: "04", title: "Mixed Use", desc: "Integrated destinations that bring living, working and leisure into one canvas.", img: solitaire.url, to: "/projects" },
];

export function Expertise() {
  return (
    <section className="bg-stone-soft py-28 lg:py-36">
      <div className="container-x mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <div className="eyebrow eyebrow-gold mb-6"><span className="rule" />Development Expertise</div>
            <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl kerning-tight">
              Four disciplines.<br />One standard of craft.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              From signature residences to landmark commercial avenues, our portfolio is shaped by a singular pursuit of permanence.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <Link to={s.to} className="group relative block aspect-[4/3] overflow-hidden bg-foreground/5">
                <img src={s.img} alt={s.title} className="img-zoom h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-xl text-white/80">{s.num}</span>
                    <DiamondArrow direction="up-right" size={22} className="transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold-soft" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl">{s.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">{s.desc}</p>
                    <div className="mt-5 h-px w-12 bg-gold transition-all duration-500 group-hover:w-24" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

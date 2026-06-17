import { Reveal } from "@/components/site/RevealOnScroll";

const reasons = [
  { t: "Architectural Excellence", d: "Every elevation is shaped with named architects and in-house design review — never templated." },
  { t: "Strategic Locations", d: "Every site is hand-selected at addresses that compound in value." },
  { t: "Quality Construction", d: "Specified by structural consultants, executed with audited material grades." },
  { t: "Timely Delivery", d: "Our possession schedules are honoured — a discipline carried across two decades." },
  { t: "Sustainable Development", d: "Rainwater recharge, sewage treatment, low-impact materials — built into every project." },
  { t: "Long-Term Value", d: "We design for the second owner as carefully as the first — built to appreciate." },
];

export function WhyChoose() {
  return (
    <section className="bg-foreground py-28 text-background lg:py-36">
      <div className="container-x mx-auto max-w-[1400px]">
        <Reveal className="max-w-3xl">
          <div className="eyebrow mb-6 text-white/65"><span className="rule" />Why Ratnanjali</div>
          <h2 className="font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl kerning-tight">
            The discipline behind <em className="not-italic text-gold-soft">every Ratnanjali address.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) as 0 | 1 | 2} className="bg-foreground p-10 transition-colors hover:bg-foreground/85">
              <div className="font-display text-5xl text-gold-soft num">0{i + 1}</div>
              <h3 className="mt-6 font-display text-2xl text-white">{r.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{r.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

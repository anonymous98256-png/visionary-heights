import { Link } from "@tanstack/react-router";
import { DiamondArrow } from "@/components/site/DiamondArrow";
import { Reveal } from "@/components/site/RevealOnScroll";
import ctaBg from "@/assets/projects/cta-bg.jpg.asset.json";

export function ContactCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground py-32 text-background lg:py-44">
      <img src={ctaBg.url} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground/95 via-foreground/80 to-foreground/50" />

      <div className="container-x mx-auto max-w-[1400px]">
        <div className="grid items-end gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div className="eyebrow mb-6 text-white/65"><span className="rule" />Begin a Conversation</div>
            <h2 className="font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-[6.5rem] kerning-tight">
              Let's build<br />
              <em className="not-italic text-gold-soft">something worth keeping.</em>
            </h2>
          </Reveal>

          <Reveal delay={1} className="lg:col-span-4">
            <p className="text-base leading-relaxed text-white/80">
              Whether you're a homebuyer, an investor, or a brand looking for a flagship address — we'd be glad to walk you through what's in progress and what's coming next.
            </p>
            <div className="mt-10 flex flex-col gap-3">
              <Link to="/contact" className="group inline-flex w-fit items-center gap-3 bg-white px-8 py-4 text-[12px] uppercase tracking-[0.24em] text-foreground transition-all hover:bg-gold-soft">
                Contact The Team
                <DiamondArrow direction="right" size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="mt-6 space-y-2 text-sm text-white/80">
                <div>+91 79907 48656</div>
                <div>info@ratnanjaligroup.com</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

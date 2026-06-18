import { Reveal } from "@/components/site/RevealOnScroll";
import poster from "@/assets/projects/hero-main.jpg.asset.json";

export function VideoShowcase() {
  return (
    <section className="relative bg-foreground">
      <div className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster.url}
        >
          <source src="/showcase.mp4" type="video/mp4" />
        </video>

        {/* Subtle overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/15 to-foreground/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.35))]" />

        <div className="relative z-10 flex h-full items-end">
          <div className="container-x mx-auto max-w-[1400px] pb-16 lg:pb-24">
            <Reveal className="max-w-2xl text-white">
              <div className="eyebrow text-white/70"><span className="rule" />The Ratnanjali Film</div>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] kerning-tight sm:text-5xl lg:text-6xl">
                Stories built in <em className="not-italic text-gold-soft">stone, light and time.</em>
              </h2>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-stone-soft">
      <div className="container-x mx-auto max-w-[1400px] py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-20 w-auto" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Crafting magnificent structures that exude class and luxury across Ahmedabad — residences, commercial landmarks, weekend estates and mixed-use developments.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">Explore</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/projects" className="text-foreground/80 hover:text-foreground">Projects</Link></li>
              <li><Link to="/expertise" className="text-foreground/80 hover:text-foreground">Expertise</Link></li>
              <li><Link to="/about" className="text-foreground/80 hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="text-foreground/80 hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow mb-5">Sectors</div>
            <ul className="space-y-3 text-sm">
              <li className="text-foreground/80">Residential</li>
              <li className="text-foreground/80">Commercial</li>
              <li className="text-foreground/80">Hospitality</li>
              <li className="text-foreground/80">Mixed Use</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Corporate Office</div>
            <p className="text-sm leading-relaxed text-foreground/80">
              Ratnanjali House, Ratnanjali Square,<br />
              Prernatirth Derasar Road,<br />
              Prahladnagar, Ahmedabad — 380015
            </p>
            <p className="mt-4 text-sm text-foreground/80">+91 79907 48656</p>
            <p className="text-sm text-foreground/80">info@ratnanjaligroup.com</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Ratnanjali Group. All rights reserved.</div>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
            <span>RERA Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

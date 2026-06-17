import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/home/Hero";
import { Overview } from "@/components/home/Overview";
import { Expertise } from "@/components/home/Expertise";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Stats } from "@/components/home/Stats";
import { Process } from "@/components/home/Process";
import { ContactCTA } from "@/components/home/ContactCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ratnanjali Group — Building Landmarks. Creating Value." },
      { name: "description", content: "Ahmedabad-based real estate developer crafting landmark residential, commercial, hospitality and mixed-use developments." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <Hero />
      <Overview />
      <Expertise />
      <FeaturedProjects />
      <WhyChoose />
      <Stats />
      <Process />
      <ContactCTA />
    </PageShell>
  );
}

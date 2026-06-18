import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Hero } from "@/components/home/Hero";
import { Overview } from "@/components/home/Overview";
import { ExpertiseScrolly } from "@/components/home/ExpertiseScrolly";
import { ProudProjects } from "@/components/home/ProudProjects";
import { WhyChoose } from "@/components/home/WhyChoose";
import { Stats } from "@/components/home/Stats";
import { VideoShowcase } from "@/components/home/VideoShowcase";
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
      <ExpertiseScrolly />
      <ProudProjects />
      <WhyChoose />
      <Stats />
      <VideoShowcase />
      <ContactCTA />
    </PageShell>
  );
}

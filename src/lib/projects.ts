// Project data — structured to mirror a future Sanity CMS schema.
// Replace this module with a Sanity client fetch when CMS is connected.

import hastinapurHero from "@/assets/projects/hastinapur-hero.jpg.asset.json";
import hastinapurTowers from "@/assets/projects/hastinapur-towers.jpg.asset.json";
import hastinapurElevation from "@/assets/projects/hastinapur-elevation.jpg.asset.json";
import hastinapurNight from "@/assets/projects/hastinapur-night.jpg.asset.json";
import squareHero from "@/assets/projects/square-hero.jpg.asset.json";
import squareDetail from "@/assets/projects/square-detail.jpg.asset.json";
import solitaireHero from "@/assets/projects/solitaire-hero.jpg.asset.json";
import solitaireDetail from "@/assets/projects/solitaire-detail.jpg.asset.json";
import ayodhyaLake from "@/assets/projects/ayodhya-lake.jpg.asset.json";
import ayodhyaPathway from "@/assets/projects/ayodhya-pathway.jpg.asset.json";
import ratnaruchiHero from "@/assets/projects/ratnaruchi-hero.jpg.asset.json";

export type ProjectCategory =
  | "residential"
  | "commercial"
  | "hospitality"
  | "mixed-use"
  | "land";

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: ProjectStatus;
  location: string;
  year: string;
  configuration: string;
  cover: string;
  gallery: string[];
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "hastinapur",
    name: "Hastinapur",
    tagline: "The Royal Legacy",
    category: "residential",
    categoryLabel: "Residential",
    status: "ongoing",
    location: "Prahladnagar, Ahmedabad",
    year: "2024",
    configuration: "3 & 4 BHK · 5 Towers",
    cover: hastinapurHero.url,
    gallery: [hastinapurHero.url, hastinapurTowers.url, hastinapurElevation.url, hastinapurNight.url],
    description:
      "A maverick residential project featuring five iconic towers, private foyers, and a comprehensive clubhouse — built for the modern royals.",
    highlights: ["5 Iconic Towers", "Private Foyer Per Unit", "60+ Amenities", "2 Cars Per Apartment"],
  },
  {
    slug: "ratnanjali-square",
    name: "Ratnanjali Square",
    tagline: "The New Address of Success",
    category: "commercial",
    categoryLabel: "Commercial",
    status: "completed",
    location: "Prahladnagar, Ahmedabad",
    year: "2022",
    configuration: "Showrooms · Offices · Garden Suites",
    cover: squareHero.url,
    gallery: [squareHero.url, squareDetail.url],
    description:
      "A spectacular glass-and-greenery business landmark in Prahladnagar — high-end showrooms, private garden offices, and a grand foyer that exudes prestige.",
    highlights: ["Glass Façade with Sky Gardens", "Private Garden Offices", "High-End Showrooms", "Grand Entrance Foyer"],
  },
  {
    slug: "ratnanjali-solitaire",
    name: "Ratnanjali Solitaire",
    tagline: "Defining the Enterprises of the Future",
    category: "commercial",
    categoryLabel: "Commercial",
    status: "ongoing",
    location: "Prernatirth Derasar Road, Ahmedabad",
    year: "2025",
    configuration: "Retail · Workspaces · Hanging Offices",
    cover: solitaireHero.url,
    gallery: [solitaireHero.url, solitaireDetail.url],
    description:
      "A swanky new-age business complex at the PDR crossroads — a signature edifice with hanging office spaces, spacious balconies, and green pockets throughout.",
    highlights: ["Hanging Architect Office", "Maximum Visibility", "Strategic PDR Location", "Multi-Format Retail"],
  },
  {
    slug: "ayodhya",
    name: "Ayodhya",
    tagline: "Soil to Soul · Exquisite Weekend Homes",
    category: "mixed-use",
    categoryLabel: "Weekend Estate",
    status: "ongoing",
    location: "Thol — Medha, Ahmedabad",
    year: "2025",
    configuration: "Heritage 2 BHK Pool Villas",
    cover: ayodhyaLake.url,
    gallery: [ayodhyaLake.url, ayodhyaPathway.url],
    description:
      "A one-of-a-kind sustainable weekend estate — heritage pool villas, a 60,000 sq.ft. clubhouse, lake lagoon, Nakshatra Van, and an organic, vehicle-free township.",
    highlights: ["Heritage Pool Villas", "60,000 sq.ft. Clubhouse", "Lake Lagoon & Nakshatra Van", "Vehicle-Free Township"],
  },
  {
    slug: "ratnaruchi-vatika",
    name: "Ratnaruchi Vatika",
    tagline: "Where Life is a Celebration",
    category: "residential",
    categoryLabel: "Residential",
    status: "completed",
    location: "Paldi, Ahmedabad",
    year: "2019",
    configuration: "Riverside 1 & 2 BHK",
    cover: ratnaruchiHero.url,
    gallery: [ratnaruchiHero.url],
    description:
      "Premium riverside apartments in Paldi — modern, spacious and exquisite homes a short walk from the Sabarmati Riverfront.",
    highlights: ["Walk to Riverfront", "Earthquake-Resistant", "Designed Main Gate", "Pollution-Free Zone"],
  },
];

export const getProjectsByCategory = (cat?: ProjectCategory) =>
  cat ? projects.filter((p) => p.category === cat) : projects;

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

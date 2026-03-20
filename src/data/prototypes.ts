export type PrototypeCategory = {
  slug: string;
  title: string;
  description: string;
  pageCount: number;
};

export type PrototypeEntry = {
  slug: string;
  folder: string;
  title: string;
  category: string;
  categoryLabel: string;
  versionLabel: string;
  locale: string;
  viewport: "desktop" | "mobile";
  summary: string;
  tags: string[];
  htmlPath: string;
  screenPath: string;
};

export const categories: PrototypeCategory[] = [
  {
    slug: "landing",
    title: "Landing Pages",
    description: "Desktop landing concepts focused on hero storytelling and brand direction.",
    pageCount: 3
  },
  {
    slug: "landing-mobile",
    title: "Mobile Landing",
    description: "Landing variations adjusted for smaller screens and touch-first spacing.",
    pageCount: 3
  },
  {
    slug: "about",
    title: "About Us",
    description: "Organization profile pages with mission, timeline, and leadership blocks.",
    pageCount: 3
  },
  {
    slug: "activities",
    title: "Activities & Events",
    description: "Event marketing, schedule, and archive layouts for debate activities.",
    pageCount: 2
  },
  {
    slug: "resources",
    title: "Resources & Methodology",
    description: "Learning-resource and methodology pages for debate training content.",
    pageCount: 3
  }
];

export const prototypes: PrototypeEntry[] = [
  {
    slug: "landing-page-1",
    folder: "landing_page_1",
    title: "Landing Page Concept 1",
    category: "landing",
    categoryLabel: "Landing Pages",
    versionLabel: "V1",
    locale: "English",
    viewport: "desktop",
    summary: "Classic editorial homepage with a strong hero image, event cards, and leadership highlights.",
    tags: ["hero", "editorial", "events"],
    htmlPath: "/prototypes/landing_page_1/code.html",
    screenPath: "/prototypes/landing_page_1/screen.png"
  },
  {
    slug: "landing-page-2",
    folder: "landing_page_2",
    title: "Landing Page Concept 2",
    category: "landing",
    categoryLabel: "Landing Pages",
    versionLabel: "V2",
    locale: "Mixed",
    viewport: "desktop",
    summary: "Alternate homepage direction with more ornamental framing and denser feature blocks.",
    tags: ["brand", "homepage", "variant"],
    htmlPath: "/prototypes/landing_page_2/code.html",
    screenPath: "/prototypes/landing_page_2/screen.png"
  },
  {
    slug: "landing-page-3",
    folder: "landing_page_3",
    title: "Landing Page Concept 3",
    category: "landing",
    categoryLabel: "Landing Pages",
    versionLabel: "V3",
    locale: "Mixed",
    viewport: "desktop",
    summary: "A third landing direction for comparing structure, tone, and CTA emphasis.",
    tags: ["homepage", "comparison", "variant"],
    htmlPath: "/prototypes/landing_page_3/code.html",
    screenPath: "/prototypes/landing_page_3/screen.png"
  },
  {
    slug: "landing-mobile-1",
    folder: "landing_page_mobile_optimized_1",
    title: "Mobile Landing Concept 1",
    category: "landing-mobile",
    categoryLabel: "Mobile Landing",
    versionLabel: "Mobile V1",
    locale: "English",
    viewport: "mobile",
    summary: "Mobile-optimized landing page with simplified spacing and responsive hero content.",
    tags: ["mobile", "responsive", "hero"],
    htmlPath: "/prototypes/landing_page_mobile_optimized_1/code.html",
    screenPath: "/prototypes/landing_page_mobile_optimized_1/screen.png"
  },
  {
    slug: "landing-mobile-2",
    folder: "landing_page_mobile_optimized_2",
    title: "Mobile Landing Concept 2",
    category: "landing-mobile",
    categoryLabel: "Mobile Landing",
    versionLabel: "Mobile V2",
    locale: "Mixed",
    viewport: "mobile",
    summary: "Second mobile variant for comparing navigation and compact content patterns.",
    tags: ["mobile", "navigation", "variant"],
    htmlPath: "/prototypes/landing_page_mobile_optimized_2/code.html",
    screenPath: "/prototypes/landing_page_mobile_optimized_2/screen.png"
  },
  {
    slug: "landing-mobile-3",
    folder: "landing_page_mobile_optimized_3",
    title: "Mobile Landing Concept 3",
    category: "landing-mobile",
    categoryLabel: "Mobile Landing",
    versionLabel: "Mobile V3",
    locale: "Mixed",
    viewport: "mobile",
    summary: "Third mobile landing experiment with alternate hierarchy and visual pacing.",
    tags: ["mobile", "comparison", "variant"],
    htmlPath: "/prototypes/landing_page_mobile_optimized_3/code.html",
    screenPath: "/prototypes/landing_page_mobile_optimized_3/screen.png"
  },
  {
    slug: "about-us-1",
    folder: "about_us_1",
    title: "About Us Concept 1",
    category: "about",
    categoryLabel: "About Us",
    versionLabel: "V1",
    locale: "Simplified Chinese",
    viewport: "desktop",
    summary: "Bilingual about page with mission, executive committee, and institutional timeline.",
    tags: ["about", "timeline", "leadership"],
    htmlPath: "/prototypes/about_us_1/code.html",
    screenPath: "/prototypes/about_us_1/screen.png"
  },
  {
    slug: "about-us-2",
    folder: "about_us_2",
    title: "About Us Concept 2",
    category: "about",
    categoryLabel: "About Us",
    versionLabel: "V2",
    locale: "Mixed",
    viewport: "desktop",
    summary: "Alternate about page direction for comparing voice, structure, and component density.",
    tags: ["about", "brand", "variant"],
    htmlPath: "/prototypes/about_us_2/code.html",
    screenPath: "/prototypes/about_us_2/screen.png"
  },
  {
    slug: "about-us-3",
    folder: "about_us_3",
    title: "About Us Concept 3",
    category: "about",
    categoryLabel: "About Us",
    versionLabel: "V3",
    locale: "Traditional Chinese",
    viewport: "desktop",
    summary: "Traditional Chinese about page variant with a similar narrative structure.",
    tags: ["about", "traditional-chinese", "variant"],
    htmlPath: "/prototypes/about_us_3/code.html",
    screenPath: "/prototypes/about_us_3/screen.png"
  },
  {
    slug: "activities-events-1",
    folder: "activities_events_1",
    title: "Activities & Events Concept 1",
    category: "activities",
    categoryLabel: "Activities & Events",
    versionLabel: "V1",
    locale: "English",
    viewport: "desktop",
    summary: "Events page combining countdown, archive cards, schedule, and mentor highlights.",
    tags: ["events", "schedule", "countdown"],
    htmlPath: "/prototypes/activities_events_1/code.html",
    screenPath: "/prototypes/activities_events_1/screen.png"
  },
  {
    slug: "activities-events-2",
    folder: "activities_events_2",
    title: "Activities & Events Concept 2",
    category: "activities",
    categoryLabel: "Activities & Events",
    versionLabel: "V2",
    locale: "Mixed",
    viewport: "desktop",
    summary: "Second events direction for comparing chronology, event cards, and CTA placement.",
    tags: ["events", "archive", "variant"],
    htmlPath: "/prototypes/activities_events_2/code.html",
    screenPath: "/prototypes/activities_events_2/screen.png"
  },
  {
    slug: "resources-methodology-1",
    folder: "resources_methodology_1",
    title: "Resources & Methodology Concept 1",
    category: "resources",
    categoryLabel: "Resources & Methodology",
    versionLabel: "V1",
    locale: "English",
    viewport: "desktop",
    summary: "Resource-focused layout for debate concepts, downloadable materials, and tutorial media.",
    tags: ["resources", "methodology", "media"],
    htmlPath: "/prototypes/resources_methodology_1/code.html",
    screenPath: "/prototypes/resources_methodology_1/screen.png"
  },
  {
    slug: "resources-methodology-2",
    folder: "resources_methodology_2",
    title: "Resources & Methodology Concept 2",
    category: "resources",
    categoryLabel: "Resources & Methodology",
    versionLabel: "V2",
    locale: "Mixed",
    viewport: "desktop",
    summary: "A second resource direction with alternate information hierarchy and learning modules.",
    tags: ["resources", "learning", "variant"],
    htmlPath: "/prototypes/resources_methodology_2/code.html",
    screenPath: "/prototypes/resources_methodology_2/screen.png"
  },
  {
    slug: "resources-methodology-3",
    folder: "resources_methodology_3",
    title: "Resources & Methodology Concept 3",
    category: "resources",
    categoryLabel: "Resources & Methodology",
    versionLabel: "V3",
    locale: "Mixed",
    viewport: "desktop",
    summary: "Third methodology concept for comparing content grouping and visual emphasis.",
    tags: ["resources", "comparison", "variant"],
    htmlPath: "/prototypes/resources_methodology_3/code.html",
    screenPath: "/prototypes/resources_methodology_3/screen.png"
  }
];

export const designSystem = {
  title: "Imperial Scholar Design System",
  sourcePath: "/prototypes/imperial_scholar/DESIGN.md",
  summary:
    "The core brand document describing the official-elegance visual system, typography, color tokens, and component rules."
};

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getPrototypeBySlug(slug: string) {
  return prototypes.find((prototype) => prototype.slug === slug);
}

export function getPrototypesByCategory(categorySlug: string) {
  return prototypes.filter((prototype) => prototype.category === categorySlug);
}

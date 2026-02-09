export type FeaturedProject = {
  repoName: string; // must match GitHub repo name used in the route
  title: string;
  summary: string;
  status?: "Live" | "WIP" | "Code sample";
  tech: string[];
  highlights: string[];
  links: {
    live?: string;
    github?: string;
    frontend?: string;
    backend?: string;
  };
};

export const featuredProjects: FeaturedProject[] = [
  {
    repoName: "React-demo",
    title: "Freelance Portfolio & Lead Intake Platform",
    status: "WIP",
    summary:
      "Next.js portfolio site built to support freelance work: theming, services, and a contact form that emails inquiries.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Resend"],
    highlights: [
      "Dark/light theme system with polished UI transitions",
      "Services + portfolio content designed for conversion",
      "Contact form with server-side email delivery",
    ],
    links: {
      github: "https://github.com/enunn1/React-demo",
      // live: "https://yourdomain.com" // add later
    },
  },
  {
    repoName: "rpg-manager",
    title: "RPG Manager",
    status: "WIP",
    summary:
      "Full-stack RPG campaign manager with an Angular frontend and Nest.js backend API (split repos).",
    tech: ["Angular", "Nest.js", "TypeScript", "Prisma"],
    highlights: [
      "Frontend/backend split across repos",
      "API-driven workflows and data modeling",
      "Most ambitious personal project to date",
    ],
    links: {
      frontend: "https://github.com/enunn1/rpg-manager",
      backend: "https://github.com/enunn1/rpg-manager-backend",
    },
  },
  {
    repoName: "Capstone-Project",
    title: "Game Reviews Capstone",
    status: "Code sample",
    summary:
      "Spring Boot capstone application featuring reviews, comments, and search workflows.",
    tech: ["Java", "Spring Boot"],
    highlights: [
      "Built from user stories and iterative delivery",
      "Search and recently-added views",
      "Comment create/edit/delete flows",
    ],
    links: {
      github: "https://github.com/enunn1/Capstone-Project",
    },
  },
];

export const featuredByRepo = Object.fromEntries(
  featuredProjects.map((p) => [p.repoName, p])
) as Record<string, FeaturedProject>;

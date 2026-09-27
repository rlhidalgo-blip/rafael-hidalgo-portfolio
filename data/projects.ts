export type Project = {
  number: string;
  name: string;
  type: string;
  year: string;
  description: string;
  github?: string | null;
  demo?: string | null;
};

// TODO: replace each entry below with a real project once it's ready.
// Keep the shape the same — number/name/type/stack/year/description/github/demo.
export const projects: Project[] = [
  {
    number: "01",
    name: "Yab's Business Management System",
    type: "[Project Type — Placeholder]",
    year: "Currently Building",
    description: "A business management system for Yab's, a local business in the Philippines. This project is currently in development and will be updated with more details as it progresses.",
    github: null,
    demo: null,
  },
  {
    number: "02",
    name: "PROJECT 02",
    type: "[Project Type — Placeholder]",
    year: "20XX",
    description: "Add a short description of this project once it's ready.",
    github: null,
    demo: null,
  },
  {
    number: "03",
    name: "PROJECT 03",
    type: "[Project Type — Placeholder]",
    year: "20XX",
    description: "Add a short description of this project once it's ready.",
    github: null,
    demo: null,
  },
];

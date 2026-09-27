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
    name: "Salon Business Management System",
    type: "Full-Stack Web Application",
    year: "Currently Building",
    description: "An internal web application designed to digitize salon operations by automating sales logging, commission calculation, and business reporting.",
    github: null,
    demo: null,
  },
  {
    number: "02",
    name: "PROJECT IN DEVELOPMENT",
    type: "Full-Stack Web Application",
    year: "Upcoming — 2026",
    description: "New project currently in concept and development stage. Details will be updated soon.",
    github: null,
    demo: null,
  },
  {
    number: "03",
    name: "FUTURE CASE STUDY",
    type: "Full-Stack Web Application",
    year: "Upcoming — 2026",
    description: "Details for this project will be uploaded upon completion.",
    github: null,
    demo: null,
  },
];

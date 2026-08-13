export type Project = {
  name: string;
  description: string;
  website?: string;
  github?: string;
};

// Add a project here and the Projects page will render it automatically.
// Both links are optional, so include only the destinations that exist.
export const projects: Project[] = [
  {
    name: "Infralane Cloud",
    description:
      "A cloud platform as a service that simplifies application deployment.",
    website: "https://www.infralane.cloud",
  },
  {
    name: "Orbiton JS",
    description:
      "A virtual DOM-based JavaScript UI library for building reactive web interfaces. The project includes its core rendering and VDOM package, a Babel transpiler for converting JSX to JavaScript, and an ESLint plugin.",
    website: "https://orbiton.js.org/",
    github: "https://github.com/Orbitonjs/orbiton",
  },
  {
    name: "Conveyor CI",
    description:
      "A cloud-native, distributed, headless workflow orchestration engine.",
    website: "https://conveyor.open.ug/",
    github: "https://github.com/open-ug/conveyor",
  },
  {
    name: "ReactJS Media",
    description:
      "A collection of reusable media components for displaying audio, video, and other media on the web.",
    github: "https://github.com/jim-junior/reactjs-media",
  },
];

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
      "A cloud platform as a service that simplifies application deployment. Was part of Makarere University Innovation and Incubation Hub(MIIC) StartUp Hatch program Corhot 1",
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
      "A cloud-native, distributed, headless workflow orchestration engine. Was part of the CNCF Sandbox Applications reviewed by the Cloud Native Computing Fountaion's Technical Oversight Committee(TOC) in June 2026. Over 6,000 recorded Docker Image installs and 20+ contributors.",
    website: "https://conveyor.open.ug/",
    github: "https://github.com/open-ug/conveyor",
  },
  {
    name: "ReactJS Media",
    description:
      "A collection of reusable media components for displaying audio, video, and other media on the web. Packers has over recorded 60,000 installs overtime and 800+ dependant Github Projects.",
    github: "https://github.com/jim-junior/reactjs-media",
  },
  {
    name: "syscapture",
    description:
      "a Bash-based Linux diagnostic tool that collects process, memory, file-descriptor, network, and kernel state into structured Markdown reports. Automated evidence collection for investigating unresponsive services and resource exhaustion using Linux interfaces including /proc",
    github: "https://github.com/jim-junior/syscapture",
  },
  {
    name: "vm-alloc",
    description:
      "vm-alloc is a Rust based command-line tool for spinning up and managing Virtual Machines (VMs) in cloud-like environments. It is built on top of libvirt, KVM, and QEMU, and uses cloud images (primarily Ubuntu) for quick provisioning.",
    github: "https://github.com/open-ug/vm-alloc",
  },
  {
    name: "Django URL Shortner",
    description:
      "A set of utils to build custom fully-functional Django URL Shortner. This library helps you build a custom URL Shortner service for your project without relying on external services like bitly.",
    github: "https://github.com/jim-junior/django-urlshortner",
    website: "https://pypi.org/project/django-urlshortner/",
  },
];

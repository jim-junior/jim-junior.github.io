import { Container } from "@mui/joy";
import Projects from "./projects";
import Header from "./header";

export const metadata = {
  title: "Projects | Beingana Jim Junior",
  description:
    "Explore my projects, showcasing my skills in software development and innovation. From web applications to open-source contributions, discover the work that drives my passion for technology.",
};

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <Projects />
    </>
  );
};

export default ProjectsPage;

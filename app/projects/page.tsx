import { Container } from "@mui/joy";
import Header from "./header";
import Projects from "./projects";

export const metadata = {
  title: "Projects | Beingana Jim Junior",
  description:
    "Explore my projects, showcasing my skills in software development and innovation. From web applications to open-source contributions, discover the work that drives my passion for technology.",
};

const ProjectsPage = () => {
  return (
    <>
      <Container>
        <Header />
        <Projects />
      </Container>
    </>
  );
};

export default ProjectsPage;

import Navbar from "../components/navbar";
import { Container } from "@mui/joy";
import Header from "../components/projects/header";
import { Helmet } from "react-helmet-async";
import Projects from "../components/projects/projects";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Navbar />
      <Container>
        <Header />
        <Projects />
      </Container>
    </>
  );
};

export default ProjectsPage;

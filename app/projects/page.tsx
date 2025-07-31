"use client";
import { Container } from "@mui/joy";
import Header from "./header";
import Projects from "./projects";

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

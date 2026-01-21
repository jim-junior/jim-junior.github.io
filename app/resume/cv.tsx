import React from "react";
import Contacts from "./contacts";
import Bio from "./bio";
import Education from "./education";
import WorkExperience from "./work";
import Skills, { Articles, ProjectsAndOpenSource } from "./skills";
import Certifications from "./certifications";

const CVContainer = () => {
  return (
    <>
      <Contacts />
      <Education />
      <Skills />
      <WorkExperience />
      <Articles />
      <ProjectsAndOpenSource />
      <Certifications />
    </>
  );
};

export default CVContainer;

import React from "react";
import Contacts from "./contacts";
import Bio from "./bio";
import Education from "./education";
import WorkExperience from "./work";
import Skills from "./skills";
import Certifications from "./certifications";

const CVContainer = () => {
  return (
    <>
      <Contacts />
      <Bio />
      <Education />
      <WorkExperience />
      <Skills />
      <Certifications />
    </>
  );
};

export default CVContainer;

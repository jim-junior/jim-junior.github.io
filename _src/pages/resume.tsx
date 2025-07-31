import { Box, Button, Container, Divider, Typography } from "@mui/joy";
import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/navbar";
import CVContainer from "../components/resume/cv";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { FaPrint } from "react-icons/fa";

const ResumePage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  return (
    <>
      <Helmet>
        <title>Beingana Jim Junior's CV</title>
      </Helmet>
      <Navbar />
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography level="title-lg">Curriculum Vitae</Typography>
          <Button
            sx={{
              ml: "auto",
            }}
            onClick={() => {
              reactToPrintFn();
            }}
            startDecorator={<FaPrint />}
          >
            Print/Save PDF
          </Button>
        </Box>
        <Divider />
        <Container ref={contentRef}>
          <CVContainer />
        </Container>
      </Container>
    </>
  );
};

export default ResumePage;

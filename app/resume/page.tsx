"use client";
import {
  Box,
  Button,
  Container,
  CssVarsProvider,
  Divider,
  extendTheme,
  Typography,
} from "@mui/joy";
import React from "react";
import CVContainer from "./cv";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { FaPrint } from "react-icons/fa";

// Print theme: a theme optimized for printing, font sizes, family, colors, etc.
const printTheme = extendTheme({
  typography: {
    h1: {
      fontFamily: "'Times New Roman', Times, serif",
    },
    h2: {
      fontFamily: "'Times New Roman', Times, serif",
    },
    h3: {
      fontFamily: "'Times New Roman', Times, serif",
    },
    h4: {
      fontFamily: "'Times New Roman', Times, serif",
    },
    "body-lg": {
      fontFamily: "'Times New Roman', Times, serif",
    },
    "body-md": {
      fontFamily: "'Times New Roman', Times, serif",
    },
    "body-sm": {
      fontFamily: "'Times New Roman', Times, serif",
    },
    "body-xs": {
      fontFamily: "'Times New Roman', Times, serif",
    },
    "title-lg": {
      fontFamily: "'Times New Roman', Times, serif",
    },
    "title-md": {
      fontFamily: "'Times New Roman', Times, serif",
    },
    "title-sm": {
      fontFamily: "'Times New Roman', Times, serif",
    },
  },
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: "black",
        },
      },
    },
  },
});

const ResumePage = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  return (
    <>
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
          <CssVarsProvider theme={printTheme}>
            <CVContainer />
          </CssVarsProvider>
        </Container>
      </Container>
    </>
  );
};

export default ResumePage;

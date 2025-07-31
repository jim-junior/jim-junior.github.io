import { Box, Typography, Divider, List, ListItem } from "@mui/joy";
import React from "react";

const WorkExperience = () => {
  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Typography
        sx={{
          mb: 1,
        }}
        level="title-lg"
        textTransform="uppercase"
      >
        Work Experience
      </Typography>
      <Divider />
      <Box
        sx={{
          mt: 1,
          ml: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Credit & Beyond Limited, Wandegeya{" - "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Jan 2024 - Dec 2024
          </Typography>
        </Typography>
        <List component="ul">
          <ListItem>
            - Developed and maintained a Business Information System.
          </ListItem>
          <ListItem>
            - Gather and analyze requirements, translating them into clear and
            actionable technical specifications.
          </ListItem>
          <ListItem>
            - Design and develop user-friendly and responsive frontend
            interfaces in React and Next JS.
          </ListItem>
          <ListItem>
            - Build robust and scalable backend systems and APIs with Django and
            Django Rest Framework to support application functionality.
          </ListItem>
          <ListItem>
            - Oversee deployment processes using Docker to ensure seamless
            integration and delivery.
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default WorkExperience;

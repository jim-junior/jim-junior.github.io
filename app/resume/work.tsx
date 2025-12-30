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
          Crane Cloud{" - "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            May 2025
          </Typography>
        </Typography>
        <List component="ul">
          <ListItem>
            - Developed Crane Cloud Mira, A software platform that
            auto-containerizes applications and deploys them to the cloud.
          </ListItem>
          <ListItem>
            - Contributed to Crane Cloud Platform, a Kubernetes-based PaaS for
            deploying and managing cloud-native applications.
          </ListItem>
        </List>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Credit & Beyond Limited{" - "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Jan 2024
          </Typography>
        </Typography>
        <List component="ul">
          <ListItem>
            - Built and maintained a realtime business information system with
            strong reliability requirements.
          </ListItem>
          <ListItem>
            - Integrated secure APIs, optimized database queries, and improved
            system performance.
          </ListItem>
          <ListItem>
            - Participated in code reviews, enforcing Git best practices and
            CI/CD pipelines.
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default WorkExperience;

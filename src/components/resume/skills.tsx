import { Box, Typography, Divider } from "@mui/joy";
import React from "react";

const Skills = () => {
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
        Skills
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
          S.E Skills{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Web Development (Full stack), Mobile Development, Software
            Deployment and Delivery (DevOps)
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Programming Languages{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            JavaScript, Python, Go, Rust, C#, HTML & CSS, SQL, LaTex, Shell
            Script, Kotlin
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Frameworks{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Django, Express, Go Fiber, React, Next JS, Flask, Pandas,
            TensorFlow, Pytorch, React Native, Jetpack Compose
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Tools{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Docker, Kubernetes, Git, Circle CI, Redis
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Others{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Google Cloud Platform, Amazon Web Services, GitHub, Google Workspace
            & Analytics
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Skills;

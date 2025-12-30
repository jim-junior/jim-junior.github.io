import { Box, Divider, Typography } from "@mui/joy";
import React from "react";

const Bio = () => {
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
        Biography
      </Typography>
      <Divider />
      <Typography
        sx={{
          my: 1,
          ml: 1,
        }}
      >
        Pragmatic Software Engineer passionate about cloud-native
        infrastructure, Kubernetes, and DevOps. Experienced in designing and
        deploying reliable, production-grade distributed systems. Strong
        advocate of open source and developer ergonomics, with hands-on
        expertise in Go, Kubernetes operators/controllers, CI/CD automation, and
        cloud infrastructure.
      </Typography>
      <Typography
        sx={{
          my: 1,
          ml: 1,
        }}
      >
        With a versatile skill set and a commitment to continuous learning, I
        thrive in dynamic environments that challenge me to grow and deliver
        impactful results. My experience spans the entire software development
        lifecycle, including design, implementation, and deployment of scalable
        and reliable applications.
      </Typography>
    </Box>
  );
};

export default Bio;

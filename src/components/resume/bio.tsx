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
        Passionate Software Engineer with expertise in Web and Mobile
        Development, Cloud Computing, DevOps and Data Science. I am dedicated to
        building innovative and efficient solutions, leveraging cutting-edge
        technologies to solve complex problems. A strong advocate for
        collaboration and knowledge sharing, I actively build and contribute to
        open-source software, supporting the global developer community.
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

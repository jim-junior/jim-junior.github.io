import { Box, Typography, Divider } from "@mui/joy";
import React from "react";

const Education = () => {
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
        Education
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
          Bachelors of Science in Software Engineering
        </Typography>
        <Typography>Makerere University, 2022 - Present</Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Advanced Level Certificate
        </Typography>
        <Typography>Riviera High School, 2021</Typography>
      </Box>
    </Box>
  );
};

export default Education;

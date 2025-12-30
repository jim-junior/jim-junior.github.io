import { Box, Typography, Divider } from "@mui/joy";
import React from "react";

const Certifications = () => {
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
        Certifications
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
          Kubernetes Developer Certification{" - "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Udemy, 2024
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Certifications;

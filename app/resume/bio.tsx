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
        Pragmatic Software Engineering Student passionate about Software
        Engineering and with active involvement in Open Source development,
        collaboration and technical writing.
      </Typography>
    </Box>
  );
};

export default Bio;

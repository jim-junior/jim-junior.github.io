import { Box, Sheet, Typography } from "@mui/joy";
import React from "react";
import { Img } from "reactjs-media";

const AdContainer = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 5,
      }}
    >
      <Sheet
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          borderRadius: 2,
          boxShadow: 1,
        }}
      >
        <img src={imageSrc} alt="ad" />
      </Sheet>
      <Typography
        sx={{
          mt: 2,
          fontSize: "0.875rem",
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        Advertisement
      </Typography>
    </Box>
  );
};

export default AdContainer;

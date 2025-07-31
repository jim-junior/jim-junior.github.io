import { Box, Sheet, Typography } from "@mui/joy";
import React from "react";
import { Img } from "reactjs-media";

const AdContainer = ({
  imageSrc,
  link,
  text,
}: {
  imageSrc: string;
  link: string;
  text?: string;
}) => {
  return (
    <Box
      component={"a"}
      href={link}
      sx={{
        display: "flex",
        flexDirection: "column",
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
        <Img src={imageSrc} alt="ad" />
      </Sheet>
      <Typography
        level="body-xs"
        sx={{
          mt: 2,
          //fontSize: "0.875rem",
          //color: "text.secondary",
          textAlign: "center",
        }}
      >
        Advertisement {text ? "| " + text : ""}
      </Typography>
    </Box>
  );
};

export default AdContainer;

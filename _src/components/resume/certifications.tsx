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
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Data Science with Python Certification{" - "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            FreeCodeCamp, 2024
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Google Analytics Certification{" - "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Google SkillShop, 2024
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Responsive Web Design{" - "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            FreeCodeCamp, 2021
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          International Computer Driving Licence (ICDL){" - "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            ICDL, 2020
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Certifications;

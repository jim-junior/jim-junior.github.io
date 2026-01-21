import { Box, Typography } from "@mui/joy";
import React from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <Box
      sx={{
        mt: 2,
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
        }}
        level="h1"
      >
        Beingana Jim Junior
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 1,
        }}
      >
        <Typography
          startDecorator={<FaGithub />}
          component="a"
          href="https://github.com/jim-junior"
          target="_blank"
          sx={{
            textDecoration: "none",
            mx: 1,
          }}
        >
          github.com/jim-junior
        </Typography>
        <Typography
          startDecorator={<FaLinkedin />}
          component="a"
          href="https://www.linkedin.com/in/jim-junior-beingana/"
          target="_blank"
          sx={{
            textDecoration: "none",
            mx: 1,
          }}
        >
          in/jim-junior-beingana
        </Typography>
        <Typography
          startDecorator={<MdEmail />}
          component="a"
          href="mailto:jimjunior854@gmail.com"
          target="_blank"
          sx={{
            textDecoration: "none",
            mx: 1,
          }}
        >
          jim.junior.beingana@gmail.com
        </Typography>
        <Typography
          startDecorator={<FaPhoneAlt />}
          component="a"
          href="tel:+256704203035"
          target="_blank"
          sx={{
            textDecoration: "none",
            mx: 1,
          }}
        >
          +256 768639966
        </Typography>
      </Box>
    </Box>
  );
};

export default Contacts;

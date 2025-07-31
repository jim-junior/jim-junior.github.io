"use client";
import { Divider, Typography } from "@mui/joy";

const Header = () => {
  return (
    <div>
      <Typography level="h1">Projects</Typography>
      <Typography level="body-md">
        Here are some of the projects I have worked on. Click on a project
        documentation to learn more about it.
      </Typography>
      <Divider />
    </div>
  );
};

export default Header;

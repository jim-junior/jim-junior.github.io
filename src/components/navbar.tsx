import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/joy";

const Navbar = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        maxWidth: 1200,
        margin: "auto",
      }}
      component="nav"
    >
      <Typography component={Link} to="/" level="h4">
        /me
      </Typography>
      <Typography component={Link} to="/projects" level="h4">
        /projects
      </Typography>

      <Typography component={Link} to="/projects" level="h4">
        /research
      </Typography>
      <Typography component={Link} to="/blog" level="h4">
        /blog
      </Typography>
    </Box>
  );
};

export default Navbar;

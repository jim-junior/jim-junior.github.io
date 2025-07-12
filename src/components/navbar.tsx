import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/joy";

const Navbar = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        fontFamily: "monospace",
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
      <Typography
        sx={{
          fontFamily: "monospace",
        }}
        component={Link}
        to="/"
        color="primary"
        level="h4"
      >
        /me
      </Typography>
      <Typography
        sx={{
          fontFamily: "monospace",
        }}
        component={Link}
        to="/projects"
        color="primary"
        level="h4"
      >
        /code👨🏾‍💻
      </Typography>
      {/* <Typography
        sx={{
          fontFamily: "monospace",
        }}
        component={Link}
        to="/cv"
        color="primary"
        level="h4"
      >
        /cv
      </Typography> */}
      <Typography
        sx={{
          fontFamily: "monospace",
        }}
        component={Link}
        color="primary"
        to="/blog"
        level="h4"
      >
        /blog
      </Typography>
      <Typography
        sx={{
          fontFamily: "monospace",
        }}
        component={Link}
        color="primary"
        to="/tv"
        level="h4"
      >
        /tv🍿
      </Typography>
    </Box>
  );
};

export default Navbar;

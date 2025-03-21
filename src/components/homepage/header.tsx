import { Box, IconButton, Link, Typography } from "@mui/joy";
import { typographyClasses } from "@mui/joy/Typography";
import { FaDev, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import photo from "../../assets/passport_photo.jpg";

const Header = () => {
  return (
    <Box
      sx={[
        (theme) => ({
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 1,
          gap: 2,
          [theme.breakpoints.up(834)]: {
            flexDirection: "row",
            gap: 2,
          },
          [theme.breakpoints.up(1199)]: {
            gap: 2,
          },
        }),
        { flexDirection: "column" },
      ]}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "50ch",
          textAlign: "center",
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: "flex-start",
            textAlign: "initial",
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: "balance",
          },
        })}
      >
        <Typography level="h1">Beingana Jim Junior</Typography>
        <Typography level="h3">
          Software Engineering student at Makerere University
        </Typography>
        <Typography level="body-lg">
          I specialize in AI/Deep Learning, Web Development, DevOps and Cloud
          Computing, combining my skills to craft innovative solutions. Beyond
          my studies, I’m an avid technical writer, sharing insights through
          articles, and an active contributor to the open-source community,
          building tools that make a difference.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link component={"a"} href="https://github.com/jim-junior">
            <IconButton
              sx={{
                fontSize: "2rem",
              }}
            >
              <FaGithub />
            </IconButton>
          </Link>
          <Link
            component={"a"}
            href="https://www.linkedin.com/in/jim-junior-beingana/"
          >
            <IconButton
              sx={{
                fontSize: "2rem",
              }}
            >
              <FaLinkedin />
            </IconButton>
          </Link>
          <Link component={"a"} href="https://dev.to/jimjunior">
            <IconButton
              sx={{
                fontSize: "2rem",
              }}
            >
              <FaDev />
            </IconButton>
          </Link>
          <Link component={"a"} href="https://jimjunior.medium.com/">
            <IconButton
              sx={{
                fontSize: "2rem",
              }}
            >
              <FaMedium />
            </IconButton>
          </Link>
        </Box>
      </Box>

      <Box
        className="imgcover"
        sx={{ width: 400, height: 400, borderRadius: 10, ml: "auto" }}
      >
        {/*<img
          src={photo}
          alt="Beingana Jim Junior Profile photo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />*/}
        <input type="checkbox" id="invert" />
        <label htmlFor="invert"></label>
        <input type="checkbox" id="sepia" />
        <label htmlFor="sepia"></label>
        <div className="content">
          <div className="film">
            <div className="effect">
              <div className="grain"></div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Header;

import { Box, IconButton, Link, Typography } from "@mui/joy";
import { typographyClasses } from "@mui/joy/Typography";
import { FaDev, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import React from "react";
import photo from "../../assets/passport_photo.jpg";

const Header = () => {
  const data = [
    "am a Software Engineering Student at Makerere University",
    "am a DevOps Engineer",
    "am a Web Developer",
    "am a Technical Writer",
    "am an Open Source Contributor",
  ];
  const [text, randomText] = useTextDecryption(data);
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
        <Typography
          sx={{
            fontFamily: "monospace",
          }}
          level="h1"
        >
          Beingana Jim Junior
        </Typography>
        <Typography
          level="h3"
          sx={{
            fontFamily: "monospace",
            mb: "2rem",
            background: "black",
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          I {text}
          <Typography
            sx={{
              background:
                "radial-gradient(45% 100% at 50% 50%, var(--joy-palette-text-primary) 64%, rgba(var(--joy-palette-neutral-mainChannel) / .45) 100%)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
              opacity: 0.25,
            }}
          >
            {randomText}
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
          }}
          level="body-lg"
        >
          I specialize in Web Development, DevOps and Cloud Computing, combining
          my skills to craft innovative solutions. Beyond my studies, I’m an
          avid technical writer, sharing insights through articles, and an
          active contributor to the open-source community, building tools that
          make a difference.
        </Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
          }}
          level="body-lg"
        >
          I am currently building PQ-TLS a TLS implementation to Protect the
          Internet of the future against Quantum Computer Attacks.
        </Typography>
        <Typography
          sx={{
            fontFamily: "monospace",
          }}
          level="body-lg"
        >
          I am also building{" "}
          <Link href="https://www.open.ug" target="_blank">
            Open UG Labs
          </Link>{" "}
          a Non-Profit Organization that aims to build Foundational Open Source
          Software to support the Tech Ecosystem in Uganda and Africa.
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
        <img
          src={photo}
          alt="Beingana Jim Junior Profile photo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Header;

function randomString(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}

function useCharReplace(text: string) {
  const [index, setIndex] = React.useState(1);
  const [randomText, setRandomText] = React.useState(
    randomString(text.length - 1)
  );
  const indexRef = React.useRef(index);

  React.useEffect(() => {
    setIndex(1);
    setRandomText(randomString(text.length - 1));
    indexRef.current = 1;
    const interval = window.setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current === text.length + 1) {
        clearInterval(interval);
      } else {
        setIndex(indexRef.current);
        setRandomText(randomString(text.length - indexRef.current));
      }
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return [text.slice(0, index), randomText];
}

function useTextDecryption(texts: Array<string>, interval: number = 8000) {
  const [dataIndex, setDataIndex] = React.useState(0);
  const [text, randomText] = useCharReplace(texts[dataIndex]);
  React.useEffect(() => {
    setTimeout(() => {
      setDataIndex((dataIndex) => (dataIndex + 1) % texts.length);
    }, interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataIndex, interval]);
  return [text, randomText];
}

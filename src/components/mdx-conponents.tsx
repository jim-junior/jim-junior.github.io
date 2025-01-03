/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Link, Sheet, Box } from "@mui/joy";

export const COMPONENTS = {
  h1: (props: any) => (
    <Typography
      sx={{
        my: 5,
        textAlign: "center",
        fontSize: "2.5rem",
      }}
      level="h1"
      component="h1"
      {...props}
    />
  ),
  h2: (props: any) => (
    <Typography
      level="h2"
      sx={{
        my: 3,
      }}
      component="h2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      level="h3"
      sx={{
        my: 2,
      }}
      component="h3"
      {...props}
    />
  ),
  h4: (props: any) => (
    <Typography
      level="h4"
      sx={{
        my: 1,
        fontSize: "1.5rem",
      }}
      component="h4"
      {...props}
    />
  ),
  h5: (props: any) => (
    <Typography
      level="h5"
      sx={{
        my: 1,
      }}
      component="h5"
      {...props}
    />
  ),
  h6: (props: any) => (
    <Typography
      level="h6"
      sx={{
        my: 1,
      }}
      component="h6"
      {...props}
    />
  ),
  p: (props: any) => (
    <Typography
      sx={{
        my: 1,
        width: "100%",
      }}
      level="body-lg"
      {...props}
    />
  ),
  a: (props: any) => <Link {...props} />,
  blockquote: (props: any) => (
    <Sheet
      sx={{
        my: 2,
        p: 2,
        pl: 4,
        fontStyle: "italic",
        borderLeft: "4px solid",
        borderColor: "primary.main",
      }}
      {...props}
    />
  ),
  pre: (props: any) => {
    return (
      <Box
        component={"pre"}
        sx={{
          my: 2,
          p: 2,
          borderRadius: 5,
          fontSize: "0.9rem",
          backgroundColor: "#0d1117",
          overflow: "auto",
        }}
        {...props}
      />
    );
  },
  img: (props: any) => (
    <img
      style={{
        maxWidth: "100%",
        display: "block",
        margin: "auto",
        borderRadius: 5,
      }}
      {...props}
    />
  ),
  code: (props: any) => (
    <Typography
      component={"code"}
      sx={{
        fontFamily: "monospace",
        color: "green",
      }}
      {...props}
    />
  ),
};

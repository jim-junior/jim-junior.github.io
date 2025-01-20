/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Link, Sheet, Box, Table } from "@mui/joy";

export const COMPONENTS = {
  h1: (props: any) => (
    <Typography
      sx={{
        my: 5,
        textAlign: "center",
        fontSize: "2.5rem",
        fontFamily: "charter, sans-serif",
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
        fontFamily: "charter, sans-serif",
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
        fontFamily: "charter, sans-serif",
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
        fontFamily: "charter, sans-serif",
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
        fontFamily: "charter, sans-serif",
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
        fontFamily: "charter, sans-serif",
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
        fontFamily: "charter, sans-serif",
      }}
      level="body-lg"
      {...props}
    />
  ),
  a: (props: any) => <Link target="_blank" {...props} />,
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
  table: (props: any) => (
    <Table
      aria-labelledby="tableTitle"
      stickyHeader
      hoverRow
      sx={{
        "--TableCell-headBackground": "var(--joy-palette-background-level1)",
        "--Table-headerUnderlineThickness": "1px",
        "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
        "--TableCell-paddingY": "4px",
        "--TableCell-paddingX": "8px",
        "--TableCell-footerBackground": "var(--joy-palette-background-level1)",
      }}
      {...props}
    />
  ),
};

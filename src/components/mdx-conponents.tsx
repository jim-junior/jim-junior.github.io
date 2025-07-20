/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Typography,
  Link,
  Box,
  Table,
  List,
  ListItem,
  ListItemDecorator,
  Divider,
  Chip,
  Card,
  CardContent,
  AspectRatio,
  AccordionGroup,
  Accordion,
  AccordionSummary,
  ListItemContent,
} from "@mui/joy";
import { MdFiberManualRecord } from "react-icons/md";

export const COMPONENTS = {
  // Headings - Enhanced with better typography scale
  h1: (props: any) => (
    <Typography
      sx={{
        my: 4,
        textAlign: "center",
        fontSize: "clamp(2rem, 5vw, 3rem)",
        fontFamily: "charter, serif",
        fontWeight: "bold",
        color: "var(--joy-palette-primary-700)",
        //backgroundClip: "text",
        //WebkitBackgroundClip: "text",
        //WebkitTextFillColor: "transparent",
        letterSpacing: "-0.02em",
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
        fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
        fontFamily: "charter, serif",
        fontWeight: "600",
        borderBottom: "2px solid var(--joy-palette-divider)",
        pb: 1,
        letterSpacing: "-0.01em",
      }}
      component="h2"
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      level="h3"
      sx={{
        my: 2.5,
        fontSize: "clamp(1.25rem, 3vw, 1.875rem)",
        fontFamily: "charter, serif",
        fontWeight: "600",
        color: "var(--joy-palette-primary-600)",
      }}
      component="h3"
      {...props}
    />
  ),
  h4: (props: any) => (
    <Typography
      level="h4"
      sx={{
        my: 2,
        fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
        fontFamily: "charter, serif",
        fontWeight: "500",
      }}
      component="h4"
      {...props}
    />
  ),
  h5: (props: any) => (
    <Typography
      level="h5"
      sx={{
        my: 1.5,
        fontSize: "clamp(1rem, 2vw, 1.25rem)",
        fontFamily: "charter, serif",
        fontWeight: "500",
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
        fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)",
        fontFamily: "charter, serif",
        fontWeight: "500",
        color: "var(--joy-palette-text-secondary)",
      }}
      component="h6"
      {...props}
    />
  ),

  // Text elements - Enhanced
  p: (props: any) => (
    <Typography
      sx={{
        my: 1.5,
        width: "100%",
        fontFamily: "charter, serif",
        lineHeight: 1.7,
        fontSize: "1.125rem",
        textAlign: "justify",
        hyphens: "auto",
      }}
      level="body-lg"
      {...props}
    />
  ),

  // Links - Enhanced with better hover effects
  a: (props: any) => (
    <Link target="_blank" rel="noopener noreferrer" {...props} />
  ),

  // Emphasis and strong
  em: (props: any) => (
    <em
      style={{
        fontStyle: "italic",
        fontFamily: "charter, serif",
      }}
      {...props}
    />
  ),
  strong: (props: any) => (
    <Typography
      component="strong"
      sx={{
        fontWeight: "bold",
        display: "inline-block",
        fontFamily: "charter, serif",
        color: "var(--joy-palette-primary-600)",
      }}
      {...props}
    />
  ),

  // Strike through and underline
  s: (props: any) => (
    <Typography
      component="s"
      sx={{
        textDecoration: "line-through",
        color: "var(--joy-palette-text-secondary)",
      }}
      {...props}
    />
  ),
  u: (props: any) => (
    <Typography
      component="u"
      sx={{
        textDecoration: "underline",
        textUnderlineOffset: "3px",
      }}
      {...props}
    />
  ),

  // Mark/highlight
  mark: (props: any) => (
    <Typography
      component="mark"
      sx={{
        backgroundColor: "var(--joy-palette-warning-100)",
        color: "var(--joy-palette-warning-800)",
        padding: "0.1em 0.2em",
        borderRadius: "2px",
      }}
      {...props}
    />
  ),

  // Small text
  small: (props: any) => (
    <Typography
      component="small"
      sx={{
        fontSize: "0.85em",
        color: "var(--joy-palette-text-secondary)",
      }}
      {...props}
    />
  ),

  // Subscript and superscript
  sub: (props: any) => (
    <Typography
      component="sub"
      sx={{
        fontSize: "0.75em",
        verticalAlign: "sub",
      }}
      {...props}
    />
  ),
  sup: (props: any) => (
    <Typography
      component="sup"
      sx={{
        fontSize: "0.75em",
        verticalAlign: "super",
      }}
      {...props}
    />
  ),

  // Abbreviation
  abbr: (props: any) => (
    <Typography
      component="abbr"
      sx={{
        textDecoration: "underline dotted",
        cursor: "help",
        borderBottom: "1px dotted var(--joy-palette-text-secondary)",
      }}
      {...props}
    />
  ),

  // Lists - Enhanced with better styling
  ul: (props: any) => (
    <List
      sx={{
        my: 2,
        pl: 0,
        "--List-gap": "0.5rem",
      }}
      {...props}
    />
  ),
  ol: (props: any) => (
    <List
      sx={{
        my: 2,
        pl: 0,
        "--List-gap": "0.5rem",
        counterReset: "ordered-list",
      }}
      component="ol"
      {...props}
    />
  ),
  li: (props: any) => {
    const isOrdered =
      props.node?.tagName === "li" && props.node?.parent?.tagName === "ol";
    return (
      <ListItem
        sx={{
          fontFamily: "charter, serif",
          fontSize: "1.125rem",
          lineHeight: 1.6,
          pl: 1,
          ...(isOrdered && {
            counterIncrement: "ordered-list",
            "&::before": {
              content: "counter(ordered-list) '.'",
              fontWeight: "bold",
              color: "var(--joy-palette-primary-500)",
              minWidth: "1.5em",
              mr: 1,
            },
          }),
        }}
        {...props}
      >
        {!isOrdered && (
          <ListItemDecorator sx={{ minInlineSize: "1.5em" }}>
            <MdFiberManualRecord
              style={{
                fontSize: "0.5em",
                color: "var(--joy-palette-primary-500)",
              }}
            />
          </ListItemDecorator>
        )}
        <ListItemContent>{props.children}</ListItemContent>
      </ListItem>
    );
  },

  // Definition lists
  dl: (props: any) => (
    <Box
      component="dl"
      sx={{
        my: 2,
        fontFamily: "charter, serif",
      }}
      {...props}
    />
  ),
  dt: (props: any) => (
    <Typography
      component="dt"
      sx={{
        fontWeight: "bold",
        mt: 1,
        mb: 0.5,
        color: "var(--joy-palette-primary-600)",
      }}
      {...props}
    />
  ),
  dd: (props: any) => (
    <Typography
      component="dd"
      sx={{
        ml: 2,
        mb: 1,
        fontStyle: "italic",
        color: "var(--joy-palette-text-secondary)",
      }}
      {...props}
    />
  ),

  // Blockquote - Enhanced
  blockquote: (props: any) => (
    <Card
      variant="soft"
      sx={{
        my: 3,
        mx: 2,
        borderLeft: "4px solid var(--joy-palette-primary-500)",
        borderRadius: "0 8px 8px 0",
        background: "var(--joy-palette-background-level1)",
      }}
      {...props}
    >
      <CardContent sx={{ py: 2 }}>
        <Typography
          sx={{
            fontStyle: "italic",
            fontFamily: "charter, serif",
            fontSize: "1.125rem",
            lineHeight: 1.6,
            color: "var(--joy-palette-text-secondary)",
            "&::before": {
              content: '"❝"',
              fontSize: "1.5em",
              color: "var(--joy-palette-primary-400)",
              marginRight: "0.5rem",
            },
          }}
          level="body-lg"
        >
          {props.children}
        </Typography>
      </CardContent>
    </Card>
  ),

  // Code blocks - Enhanced

  pre: (props: any) => {
    return (
      <Box
        component={"pre"}
        sx={{
          my: 2,
          p: 2,
          borderRadius: 5,
          fontSize: "0.875rem",
          backgroundColor: "#0d1117",
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          overflow: "auto",
          "& code": {
            fontSize: "inherit",
            fontFamily: "inherit",
            //color: "inherit",
            //background: "none",
            padding: 0,
          },
        }}
        {...props}
      />
    );
  },

  // Inline code - Enhanced
  code: (props: any) => (
    <code
      //component="code"
      //variant="soft"
      //size="sm"
      style={{
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: "0.875em",
        //backgroundColor: "var(--joy-palette-background-level2)",
        color: "var(--joy-palette-success-600)",
        //px: 1,
        //py: 0.25,
        //mx: 0.25,
        borderRadius: "4px",
        //verticalAlign: "baseline",
      }}
      {...props}
    />
  ),

  // Keyboard input
  kbd: (props: any) => (
    <Chip
      variant="outlined"
      size="sm"
      sx={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.8em",
        backgroundColor: "var(--joy-palette-background-surface)",
        border: "1px solid var(--joy-palette-divider)",
        borderBottomWidth: "2px",
        borderBottomColor: "var(--joy-palette-neutral-400)",
        borderRadius: "4px",
        px: 1,
        py: 0.25,
        mx: 0.25,
        verticalAlign: "baseline",
      }}
      {...props}
    />
  ),

  // Sample output
  samp: (props: any) => (
    <Typography
      component="samp"
      sx={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.875em",
        backgroundColor: "var(--joy-palette-background-level2)",
        color: "var(--joy-palette-success-600)",
        px: 1,
        py: 0.25,
        borderRadius: "4px",
        display: "inline-block",
      }}
      {...props}
    />
  ),

  // Variable
  var: (props: any) => (
    <Typography
      component="var"
      sx={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.875em",
        fontStyle: "italic",
        color: "var(--joy-palette-warning-600)",
        backgroundColor: "var(--joy-palette-warning-50)",
        px: 0.5,
        py: 0.25,
        borderRadius: "2px",
      }}
      {...props}
    />
  ),

  // Images - Enhanced with aspect ratio support
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

  // Tables - Enhanced
  table: (props: any) => (
    <Box sx={{ my: 3, overflow: "auto" }}>
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        variant="outlined"
        sx={{
          "--TableCell-headBackground": "var(--joy-palette-background-level1)",
          "--Table-headerUnderlineThickness": "2px",
          "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
          "--TableCell-paddingY": "12px",
          "--TableCell-paddingX": "16px",
          "--TableCell-footerBackground":
            "var(--joy-palette-background-level1)",
          fontFamily: "charter, serif",
          minWidth: "100%",
        }}
        {...props}
      />
    </Box>
  ),

  thead: (props: any) => (
    <thead
      style={{
        backgroundColor: "var(--joy-palette-background-level2)",
      }}
      {...props}
    />
  ),

  tbody: (props: any) => <tbody {...props} />,

  tfoot: (props: any) => (
    <tfoot
      style={{
        backgroundColor: "var(--joy-palette-background-level1)",
        fontWeight: "bold",
      }}
      {...props}
    />
  ),

  tr: (props: any) => <tr {...props} />,

  th: (props: any) => (
    <th
      style={{
        fontWeight: "bold",
        textAlign: "left",
        color: "var(--joy-palette-primary-600)",
        borderBottom: "2px solid var(--joy-palette-divider)",
      }}
      {...props}
    />
  ),

  td: (props: any) => (
    <td
      style={{
        borderBottom: "1px solid var(--joy-palette-divider)",
        verticalAlign: "top",
      }}
      {...props}
    />
  ),

  // Horizontal rule
  hr: (props: any) => (
    <Divider
      sx={{
        my: 4,
        "--Divider-thickness": "2px",
        "--Divider-color": "var(--joy-palette-divider)",
      }}
      {...props}
    />
  ),

  // Line break
  br: (props: any) => <br {...props} />,

  // Details and Summary (collapsible sections)
  details: (props: any) => (
    <AccordionGroup sx={{ my: 2 }}>
      <Accordion {...props} />
    </AccordionGroup>
  ),

  summary: (props: any) => (
    <AccordionSummary
      sx={{
        fontWeight: "bold",
        color: "var(--joy-palette-primary-600)",
        fontFamily: "charter, serif",
      }}
      {...props}
    />
  ),

  // Figure and figcaption
  figure: (props: any) => (
    <Box
      component="figure"
      sx={{
        my: 3,
        mx: 0,
        //textAlign: "center",
      }}
      {...props}
    />
  ),

  figcaption: (props: any) => (
    <Typography
      component="figcaption"
      sx={{
        mt: 1,
        fontSize: "0.875rem",
        color: "var(--joy-palette-text-secondary)",
        fontStyle: "italic",
        textAlign: "center",
      }}
      {...props}
    />
  ),

  // Address
  address: (props: any) => (
    <Typography
      component="address"
      sx={{
        fontStyle: "italic",
        color: "var(--joy-palette-text-secondary)",
        my: 2,
      }}
      {...props}
    />
  ),

  // Time
  time: (props: any) => (
    <Typography
      component="time"
      sx={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.9em",
        color: "var(--joy-palette-text-secondary)",
      }}
      {...props}
    />
  ),

  // Cite
  cite: (props: any) => (
    <Typography
      component="cite"
      sx={{
        fontStyle: "italic",
        color: "var(--joy-palette-text-secondary)",
      }}
      {...props}
    />
  ),

  // Quote (inline)
  q: (props: any) => (
    <Typography
      component="q"
      sx={{
        fontStyle: "italic",
        "&::before": { content: '"❝"' },
        "&::after": { content: '"❞"' },
      }}
      {...props}
    />
  ),

  // Deleted and inserted text
  del: (props: any) => (
    <Typography
      component="del"
      sx={{
        textDecoration: "line-through",
        color: "var(--joy-palette-danger-500)",
        backgroundColor: "var(--joy-palette-danger-50)",
        px: 0.5,
        borderRadius: "2px",
      }}
      {...props}
    />
  ),

  ins: (props: any) => (
    <Typography
      component="ins"
      sx={{
        textDecoration: "underline",
        color: "var(--joy-palette-success-600)",
        backgroundColor: "var(--joy-palette-success-50)",
        px: 0.5,
        borderRadius: "2px",
      }}
      {...props}
    />
  ),

  // Ruby annotations (for East Asian typography)
  ruby: (props: any) => (
    <Typography
      component="ruby"
      sx={{
        display: "inline-block",
      }}
      {...props}
    />
  ),

  rt: (props: any) => (
    <Typography
      component="rt"
      sx={{
        fontSize: "0.5em",
        lineHeight: 1,
        textAlign: "center",
        display: "block",
      }}
      {...props}
    />
  ),

  rp: (props: any) => (
    <Typography
      component="rp"
      sx={{
        fontSize: "0.8em",
        color: "var(--joy-palette-text-secondary)",
      }}
      {...props}
    />
  ),

  // Bidirectional text
  bdi: (props: any) => (
    <Typography
      component="bdi"
      sx={{
        unicodeBidi: "isolate",
      }}
      {...props}
    />
  ),

  bdo: (props: any) => (
    <Typography
      component="bdo"
      sx={{
        unicodeBidi: "bidi-override",
      }}
      {...props}
    />
  ),

  // Word break opportunity
  wbr: (props: any) => <wbr {...props} />,

  // Data and meter elements
  data: (props: any) => (
    <Typography
      component="data"
      sx={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.9em",
        color: "var(--joy-palette-primary-600)",
      }}
      {...props}
    />
  ),

  // Progress and meter
  progress: (props: any) => (
    <Box
      component="progress"
      sx={{
        width: "100%",
        height: "8px",
        my: 1,
        appearance: "none",
        "&::-webkit-progress-bar": {
          backgroundColor: "var(--joy-palette-background-level2)",
          borderRadius: "4px",
        },
        "&::-webkit-progress-value": {
          backgroundColor: "var(--joy-palette-primary-500)",
          borderRadius: "4px",
        },
      }}
      {...props}
    />
  ),

  meter: (props: any) => (
    <Box
      component="meter"
      sx={{
        width: "100%",
        height: "8px",
        my: 1,
        appearance: "none",
        "&::-webkit-meter-bar": {
          backgroundColor: "var(--joy-palette-background-level2)",
          borderRadius: "4px",
        },
        "&::-webkit-meter-optimum-value": {
          backgroundColor: "var(--joy-palette-success-500)",
          borderRadius: "4px",
        },
      }}
      {...props}
    />
  ),

  // Generic containers
  //div: (props: any) => <Box {...props} />,
  //span: (props: any) => <Typography component="span" {...props} />,

  // Section elements
  section: (props: any) => (
    <Box
      component="section"
      sx={{
        my: 3,
        px: 2,
        py: 1,
        borderRadius: "8px",
        backgroundColor: "var(--joy-palette-background-level1)",
      }}
      {...props}
    />
  ),

  article: (props: any) => (
    <Box
      component="article"
      sx={{
        my: 3,
        p: 3,
        borderRadius: "12px",
        backgroundColor: "var(--joy-palette-background-surface)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
      {...props}
    />
  ),

  aside: (props: any) => (
    <Card
      variant="soft"
      sx={{
        my: 2,
        p: 2,
        borderLeft: "4px solid var(--joy-palette-warning-400)",
        backgroundColor: "var(--joy-palette-warning-50)",
      }}
      {...props}
    />
  ),

  nav: (props: any) => (
    <Box
      component="nav"
      sx={{
        my: 2,
        p: 2,
        borderRadius: "8px",
        backgroundColor: "var(--joy-palette-background-level1)",
      }}
      {...props}
    />
  ),

  header: (props: any) => (
    <Box
      component="header"
      sx={{
        my: 2,
        p: 2,
        borderBottom: "2px solid var(--joy-palette-divider)",
      }}
      {...props}
    />
  ),

  footer: (props: any) => (
    <Box
      component="footer"
      sx={{
        my: 2,
        p: 2,
        borderTop: "2px solid var(--joy-palette-divider)",
        color: "var(--joy-palette-text-secondary)",
        fontSize: "0.9em",
      }}
      {...props}
    />
  ),

  main: (props: any) => <Box component="main" {...props} />,
};

// @ts-nocheck
"use client";

import React from "react";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import axios from "axios";
import { Skeleton, Box, Link, IconButton } from "@mui/joy";

const BASE_URL = "https://api.github.com/repos/";

function ProjectCard({ repo, documentation }) {
  const [repoData, setRepoData] = React.useState(null);

  React.useEffect(() => {
    axios.get(BASE_URL + repo).then((response) => {
      setRepoData(response.data);
    });
  }, [repo]);

  function getLanguageColor(language) {
    switch (language) {
      case "JavaScript":
        return "yellow";
      case "TypeScript":
        return "blue";
      case "HTML":
        return "orange";
      case "CSS":
        return "blue";
      case "Python":
        return "yellow";
      case "Java":
        return "red";
      case "Go":
        return "blue";
      default:
        return "gray";
    }
  }

  return repoData === null ? (
    <ProjectSkeleton />
  ) : (
    <Card size="lg" sx={{ borderRadius: "xl", boxShadow: "lg" }}>
      <CardContent orientation="horizontal" sx={{ alignItems: "flex-start" }}>
        <div>
          <Typography level="title-lg">
            {repoData ? repoData.name : <Skeleton />}
          </Typography>
          <Typography>
            {repoData ? repoData.description : <Skeleton />}
          </Typography>
        </div>
        <ButtonGroup size="sm" variant="soft">
          <IconButton component="a" href={repoData ? repoData.html_url : "#"}>
            <SiGithub />
          </IconButton>
        </ButtonGroup>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 2 }}>
        <Typography
          level="body-sm"
          startDecorator={
            <Sheet
              variant="solid"
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: repoData
                  ? getLanguageColor(repoData.language)
                  : "gray",
              }}
            />
          }
        >
          {repoData ? repoData.language : <Skeleton />}
        </Typography>
        <Typography level="body-sm" startDecorator={<FaStar />}>
          {repoData ? repoData.stargazers_count : <Skeleton />}
        </Typography>
        <Typography level="body-sm">
          {repoData ? (
            <Link href={documentation}>Documentation</Link>
          ) : (
            <Skeleton />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}

import { BoxProps } from "@mui/joy/Box";
import { SiGithub } from "react-icons/si";
import { FaStar } from "react-icons/fa";

const sizeMap = { sm: "256px", md: "300px", lg: "360px" };

function LayoutGridAutofill({
  sx,
  size = "md",
  ...props
}: BoxProps & { size?: "sm" | "md" | "lg" }) {
  return (
    <Box
      {...props}
      sx={[
        {
          "--grid-size": sizeMap[size],
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(var(--grid-size), 100%), 1fr))",
          gap: { xs: 2, md: 3 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
}
export default function Projects() {
  return (
    <Box sx={{ p: 4 }}>
      <LayoutGridAutofill>
        <ProjectCard
          repo="crane-cloud/mira-new"
          documentation="https://github.com/crane-cloud/mira-new"
        />
        <ProjectCard
          repo="open-ug/conveyor"
          documentation="https://github.com/open-ug/conveyor"
        />
        <ProjectCard
          repo="Orbitonjs/orbiton"
          documentation="https://orbiton.js.org/"
        />
        <ProjectCard
          repo="jim-junior/reactjs-media"
          documentation="https://orbiton.js.org/open-ug/reactjs-media/intro"
        />
        <ProjectCard
          repo="jim-junior/django-urlshortner"
          documentation="https://github.com/jim-junior/django-urlshortner"
        />
        <ProjectCard
          repo="open-ug/ugmobilemoney"
          documentation="https://orbiton.js.org/open-ug/ugmobilemoney/intro"
        />
        <ProjectCard
          repo="jim-junior/crane-operator"
          documentation="https://orbiton.js.org/open-ug/blog/building-a-kubernetes-operator"
        />
        <ProjectCard
          repo="jim-junior/eda"
          documentation="https://orbiton.js.org/open-ug/blog/a-practical-guide-to-the-event-driven-architecture"
        />
      </LayoutGridAutofill>
    </Box>
  );
}

function ProjectSkeleton() {
  return (
    <Card size="lg" sx={{ borderRadius: "xl", boxShadow: "lg" }}>
      <CardContent orientation="horizontal" sx={{ alignItems: "flex-start" }}>
        <div>
          <Typography>
            <Skeleton>Lorem ipsum</Skeleton>
          </Typography>
          <Typography>
            <Skeleton>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries.
            </Skeleton>
          </Typography>
        </div>
        <ButtonGroup size="sm" variant="soft">
          <Button disabled startDecorator={<SiGithub />}>
            GitHub
          </Button>
        </ButtonGroup>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 2 }}>
        <Typography
          level="body-sm"
          startDecorator={
            <Sheet
              variant="solid"
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "gray",
              }}
            />
          }
        >
          <Skeleton />
        </Typography>
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width="50%" />
      </CardContent>
    </Card>
  );
}

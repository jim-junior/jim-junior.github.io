"use client";
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  Link,
  Stepper,
  Step,
} from "@mui/joy";
import { stepClasses } from "@mui/joy/Step";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

const ProjectTimeline = ({
  projects,
}: {
  projects: Array<{
    name: string;
    description: string;
    icon?: string;
    github?: string | Array<{ name: string; url: string }>;
    website?: string;
    stage?: string;
    startDate: string;
  }>;
}) => {
  const renderGithubButtons = (github: any) => {
    if (!github) return null;

    // Handle multiple repositories
    if (Array.isArray(github)) {
      return github.map((repo, index) => (
        <Button
          key={index}
          component={Link}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          size="sm"
          startDecorator={<FaGithub />}
          sx={{
            textDecoration: "none",
            "&:hover": { textDecoration: "none" },
          }}
        >
          {repo.name || `Code ${index + 1}`}
        </Button>
      ));
    }

    // Handle single repository
    return (
      <Button
        component={Link}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        variant="outlined"
        size="sm"
        startDecorator={<FaGithub />}
        sx={{
          textDecoration: "none",
          "&:hover": { textDecoration: "none" },
        }}
      >
        Code
      </Button>
    );
  };

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 2 }}>
      <Typography level="h2" sx={{ mb: 4, textAlign: "center" }}>
        Project Timeline
      </Typography>

      <Stepper
        orientation="vertical"
        sx={(theme) => ({
          "--Stepper-verticalGap": "3rem",
          "--StepIndicator-size": "3rem",
          "--Step-gap": "1.5rem",
          "--Step-connectorInset": "0.5rem",
          "--Step-connectorRadius": "1rem",
          "--Step-connectorThickness": "3px",
          [`& .${stepClasses.root}`]: {
            "&::after": {
              bgcolor: "primary.200",
            },
          },
          [`& .${stepIndicatorClasses.root}`]: {
            border: "3px solid",
            borderColor: "background.surface",
            boxShadow: `0 0 0 2px ${theme.vars.palette.primary[500]}`,
            bgcolor: "background.surface",
          },
        })}
      >
        {projects.map((project, index) => (
          <Step
            key={index}
            completed
            indicator={
              <StepIndicator
                variant="solid"
                color="primary"
                sx={{
                  bgcolor: project.icon ? "background.surface" : "primary.500",
                }}
              >
                {project.icon ? (
                  <Box
                    component="img"
                    src={project.icon}
                    alt={`${project.name} icon`}
                    sx={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "16px",
                      height: "16px",
                      //bgcolor: "background.surface",
                    }}
                  />
                )}
              </StepIndicator>
            }
          >
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Card
                variant="outlined"
                sx={{
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    boxShadow: "md",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    mb={2}
                  >
                    <Box>
                      <Typography
                        level="body-sm"
                        sx={{
                          color: "primary.500",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          fontSize: "11px",
                          mb: 0.5,
                        }}
                      >
                        {project.startDate}
                      </Typography>
                      <Chip variant="soft" color="neutral" size="sm">
                        {project.stage}
                      </Chip>
                    </Box>
                  </Stack>

                  <Typography
                    level="title-lg"
                    sx={{ mb: 2, fontWeight: "bold" }}
                  >
                    {project.name}
                  </Typography>

                  <Typography
                    level="body-md"
                    sx={{ mb: 3, lineHeight: 1.6, color: "text.secondary" }}
                  >
                    {project.description}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {renderGithubButtons(project.github)}

                    {project.website && (
                      <Button
                        component={Link}
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="solid"
                        size="sm"
                        startDecorator={<MdLaunch />}
                        sx={{
                          textDecoration: "none",
                          "&:hover": { textDecoration: "none" },
                        }}
                      >
                        Website
                      </Button>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

// Example usage with sample data
const sampleProjects = [
  {
    startDate: "December 2025",
    stage: "Project - Closed Source/Proprietary",
    name: "Hope Haven Student Grade Analysis Tool",
    description:
      "A data analysis tool used by administrators to analyse trends and insights in student grades. Used by Hope Haven Christian School, Rwanda.",
    github: [],
    website: "https://hope-haven-report-analysis.cranom.tech",
    icon: "https://hope-haven-report-analysis.cranom.tech/icon.webp",
  },
  {
    startDate: "March 2025",
    stage: "Internship",
    name: "Crane Cloud Mira",
    description:
      "Crane Cloud Mira is a software platform that automatically turns source code into container images.",
    github: [
      {
        name: "Repository",
        url: "https://github.com/crane-cloud/mira-new",
      },
    ],
    website: "https://cranecloud.io/",
    icon: "https://cranecloud.io/_next/static/media/logo.b4c3ef7e.svg",
  },
  {
    startDate: "Sep 2024",
    stage: "Third Year, Undergraduate - Open Source",
    name: "Conveyor CI",
    description:
      "Developed Conveyor CI a lightweight, distributed CI/CD engine built for platform developers who demand simplicity without compromise",
    github: "https://github.com/open-ug/conveyor",
    website: "https://conveyor.open.ug/",
    icon: "https://conveyor.open.ug/logos/icon.svg",
  },
  {
    startDate: "April 2022",
    stage: "First Year - Undergraduate - Personal Project",
    name: "Cranom Cloud",
    description:
      "A Cloud PaaS for deploying general purpose applications powered by Kubernetes with inbuilt SSL management, Database as a Service (DBaaS), Auto Containerization, Ingress, Domain Management etc. and can be deployed anywhere.",
    github: [
      {
        name: "Frontend",
        url: "https://github.com/jim-junior/cranom",
      },
      {
        name: "Backend",
        url: "https://github.com/jim-junior/cranom-backend",
      },
    ],
    website: null,
    icon: null,
  },
  {
    startDate: "Aug 2022",
    stage: "First Year - Undergraduate, Open Source",
    name: "django-urlshortner",
    description: "A python library for building URL shorteners in Django.",
    github: "https://github.com/jim-junior/django-urlshortner",
    website: null,
    icon: null,
  },
  {
    startDate: "Dec 1, 2021",
    stage: "High School gap year - Open Source Learning Project",
    name: "Orbiton JS",
    description:
      "A JavaScript library for building interactive user interfaces.(React JS Clone)",
    github: [
      {
        name: "Core Library",
        url: "https://github.com/Orbitonjs/orbiton",
      },
      {
        name: "Babel Plugin",
        url: "https://github.com/Orbitonjs/orbiton/tree/dev/packages/babel-plugin-orbiton-jsx",
      },
      {
        name: "ESLint Plugin",
        url: "https://github.com/Orbitonjs/utils/tree/main/packages/eslint-plugin-orbiton",
      },
    ],
    website: "https://orbiton.js.org/",
    icon: "https://orbiton.js.org/b0fc9b8a348d80d150fe.svg",
  },
  {
    startDate: "Jan 2021",
    stage: "High School Final Year - Open Source Personal Project",
    name: "reactjs-media",
    description: "A React.js library for building media players.",
    github: "https://github.com/jim-junior/reactjs-media",
    website: null,
    icon: null,
  },
  {
    startDate: "Dec 2020",
    stage: "COVID-19 Pandemic - Personal Project",
    name: "Blurify",
    description: "A Social Media site for sharing images.(Instagram Clone)",
    github: [
      {
        name: "Frontend",
        url: "https://github.com/jim-junior/blurify",
      },
      {
        name: "Backend",
        url: "https://github.com/jim-junior/blurify-backend",
      },
    ],
    website: null,
    icon: null,
  },
];

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.body", py: 4 }}>
      <ProjectTimeline
        // @ts-ignore
        projects={sampleProjects}
      />
    </Box>
  );
}

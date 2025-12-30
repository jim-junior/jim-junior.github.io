import { Box, Typography, Divider, Link as JOYLink } from "@mui/joy";
import React from "react";

const Skills = () => {
  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Typography
        sx={{
          mb: 1,
        }}
        level="title-lg"
        textTransform="uppercase"
      >
        Skills
      </Typography>
      <Divider />
      <Box
        sx={{
          mt: 1,
          ml: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          S.E Skills{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Web Development (Full stack), Mobile Development, Software
            Deployment and Delivery (DevOps)
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Programming Languages{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Go (concurrency, interfaces, tooling), Rust, Python, JavaScript,
            Shell
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Kubernetes and the Cloud{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            API Machinery, CRDs, RBAC, Services/Networking, Docker, Helm, GitOps
            (Flux/ArgoCD), GCP, AWS, controller-runtime, Prometheus/Grafana
            observability
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Tools{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Docker, Kubernetes, Git, Circle CI, Redis
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Others{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            Redis, React, Next.js, Django, Fiber, Express
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Skills;

export const Articles = () => {
  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Typography
        sx={{
          mb: 1,
        }}
        level="title-lg"
        textTransform="uppercase"
      >
        TECHNICAL WRITING
      </Typography>
      <Divider />
      <Box
        sx={{
          mt: 1,
          ml: 1,
        }}
      >
        <Typography>
          -{" "}
          <JOYLink
            href="https://blog.devops.dev/building-a-kubernetes-operator-a-practical-guide-2622882e2030"
            target="_blank"
            rel="noopener noreferrer"
          >
            Building a Kubernetes Operator | A Practical Guide
          </JOYLink>
        </Typography>
        <Typography>
          -{" "}
          <JOYLink
            href="https://blog.devops.dev/a-complete-guide-to-etcd-the-distributed-key-value-store-powering-cloud-infrastructure-7a8d3255e86b"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Complete Guide to etcd: The Distributed Key-Value Store Powering
            Cloud Infrastructure
          </JOYLink>
        </Typography>
        <Typography>
          -{" "}
          <JOYLink
            href="https://blog.devops.dev/designing-the-conveyor-ci-pipeline-engine-ad79fbfe860a"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designing The Conveyor CI Pipeline Engine
          </JOYLink>
        </Typography>
        <Typography>
          -{" "}
          <JOYLink
            href="https://blog.devops.dev/a-practical-introduction-to-the-event-driven-architecture-c1fb6c6a7a47"
            target="_blank"
            rel="noopener noreferrer"
          >
            A Practical Introduction to the Event Driven Architecture
          </JOYLink>
        </Typography>
      </Box>
    </Box>
  );
};

export const ProjectsAndOpenSource = () => {
  return (
    <Box
      sx={{
        my: 2,
      }}
    >
      <Typography
        sx={{
          mb: 1,
        }}
        level="title-lg"
        textTransform="uppercase"
      >
        Projects & Open Source
      </Typography>
      <Divider />
      <Box
        sx={{
          mt: 1,
          ml: 1,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
        >
          Conveyor CI{": "}
          <Typography
            sx={{
              fontWeight: "normal",
            }}
          >
            The lightweight engine for building distributed CI/CD systems with
            ease.
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

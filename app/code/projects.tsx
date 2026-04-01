import React from "react";
import {
  ArrowRight,
  ExternalLink,
  Cloud,
  Shield,
  Gauge,
  Blocks,
} from "lucide-react";

export const sampleProjects = [
  {
    startDate: "December 2025",
    stage: "Project - Closed Source/Proprietary",
    name: "Hope Haven Grade Analysis Platform",
    description:
      "A Data Analysis Software used by administrators to analyse trends, insights and predictions in student grades and performance. Used by Hope Haven Christian School, Rwanda.",
    github: [],
    website: "https://www.hopehavenrwanda.org/",
    icon: "https://analysis.hopehaven.cranom.tech/icon.webp",
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

const TimelineEntry = ({ project, index }: { project: any; index: number }) => {
  const isReversed = index % 2 !== 0;

  // Format GitHub Links into a predictable array of objects
  const githubLinks = Array.isArray(project.github)
    ? project.github
    : project.github
      ? [{ name: "Repository", url: project.github }]
      : [];

  const TextContent = () => (
    <div
      className={`flex flex-col justify-center ${!isReversed ? "md:text-right md:items-end" : "md:text-left md:items-start"}`}
    >
      <div className="text-[0.625rem] font-mono text-[#5d5e60] mb-1">
        DATE: {project.startDate}
      </div>
      <div className="text-[0.6875rem] uppercase tracking-[0.2em] font-bold text-[#0b6bcb] mb-4">
        {project.stage}
      </div>
      <h3 className="text-3xl font-bold tracking-tight mb-4">{project.name}</h3>
      {project.description && (
        <p className="text-[#5d5e60] text-sm leading-relaxed max-w-md">
          {project.description}
        </p>
      )}
    </div>
  );

  const VisualContent = () => (
    <div
      className={`flex flex-col justify-center ${!isReversed ? "md:items-start" : "md:items-end"}`}
    >
      <div className="p-8 bg-[#ffffff] border border-[#c1c6d4]/20 flex flex-col items-center justify-center min-h-[200px] w-full max-w-sm shadow-sm transition-colors hover:border-[#c1c6d4]/60">
        {/* Visual Icon / Fallback */}
        {project.icon ? (
          <img
            src={project.icon}
            alt={project.name}
            className="max-h-20 w-auto object-contain mb-6"
            // Hide broken images gracefully
          />
        ) : (
          <Blocks className="text-[#c1c6d4] mb-6" size={48} strokeWidth={1} />
        )}

        {/* Links Array */}
        <div className="flex flex-col gap-3 w-full items-center">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="text-[#0b6bcb] font-bold text-xs flex items-center justify-center gap-2 hover:underline"
            >
              VISIT WEBSITE <ExternalLink size={14} />
            </a>
          )}

          {githubLinks.map((repo: { name: string; url: string }, i: number) => (
            <a
              key={i}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#5d5e60] font-bold text-xs flex items-center justify-center gap-2 hover:text-[#0b6bcb] transition-colors"
            >
              {repo.name.toUpperCase()} <ArrowRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 group">
      {/* Left Column */}
      <div className={`${isReversed ? "order-2 md:order-1" : ""}`}>
        {!isReversed ? <TextContent /> : <VisualContent />}
      </div>

      {/* Center Node (Timeline Dot) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1a1c1d] rounded-full hidden md:block z-10 border-4 border-[#f9f9fa] ring-1 ring-[#c1c6d4]"></div>

      {/* Right Column */}
      <div className={`${isReversed ? "order-1 md:order-2" : ""}`}>
        {isReversed ? <TextContent /> : <VisualContent />}
      </div>
    </div>
  );
};

const ProficiencyCard = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) => (
  <div className="p-8 bg-[#f4f3f4] border border-[#c1c6d4]/10">
    <Icon
      className="text-2xl mb-4 text-[#1a1c1d]"
      size={28}
      strokeWidth={1.5}
    />
    <h5 className="font-bold text-sm mb-2 uppercase tracking-tight">{title}</h5>
    <p className="text-xs text-[#5d5e60] leading-relaxed">{desc}</p>
  </div>
);

/**
 * Main Code Page Component
 */
export default function CodePage() {
  return (
    <div className="w-full text-[#1a1c1d] selection:bg-[#0053a1]/10 selection:text-[#0053a1]">
      {/* Background Blueprint Art */}
      <div className="fixed inset-0 z-[-1] pointer-events-none opacity-10">
        <div className="absolute inset-0 blueprint-lines"></div>
      </div>

      {/* Dynamic Project Timeline Section */}
      <section className="relative mb-32">
        <div className="timeline-line hidden md:block"></div>

        {sampleProjects.map((project, index) => (
          <TimelineEntry key={index} project={project} index={index} />
        ))}
      </section>

      {/* Final Summary: Technical Proficiency */}
      <div className="relative pt-24 mt-24 border-t border-[#c1c6d4]/30">
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 bg-[#0b6bcb] rounded-full hidden md:block z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h3 className="text-4xl font-bold tracking-tight mb-8">
              Technical Proficiency
            </h3>
            <p className="text-[#414752] max-w-md leading-relaxed mb-12">
              Evolution condensed into core competencies. My expertise lies in
              distributed computing, systems programming, and cloud-native
              infrastructure.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Core Languages",
                  time: "8 YEARS",
                  stack: "Go, Rust, TypeScript, C++, Python",
                },
                {
                  title: "Infrastructure",
                  time: "5 YEARS",
                  stack: "Kubernetes, Docker, Terraform, AWS, GCP",
                },
                {
                  title: "Databases",
                  time: "6 YEARS",
                  stack: "PostgreSQL, Redis, ScyllaDB, etcd",
                },
              ].map((skill) => (
                <div
                  key={skill.title}
                  className="group border-b border-[#c1c6d4]/30 pb-4"
                >
                  <div className="flex justify-between text-[0.6875rem] font-bold tracking-widest uppercase mb-2">
                    <span className="text-[#1a1c1d]">{skill.title}</span>
                    <span className="text-[#5d5e60]">{skill.time}</span>
                  </div>
                  <div className="text-sm font-mono text-[#5d5e60]">
                    {skill.stack}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProficiencyCard
              icon={Cloud}
              title="Cloud-Native"
              desc="Building elastic systems that scale horizontally without human intervention."
            />
            <ProficiencyCard
              icon={Shield}
              title="Secure Design"
              desc="Zero-trust architecture and automated compliance at the protocol level."
            />
            <ProficiencyCard
              icon={Gauge}
              title="Performance"
              desc="Profiling and optimizing at the kernel and network driver layer."
            />
            <ProficiencyCard
              icon={Blocks}
              title="Clean Code"
              desc="Technical documentation and maintainable API surface area design."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

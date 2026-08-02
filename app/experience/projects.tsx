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
    startDate: "June 2026 - August 2026",
    stage: "Internship",
    name: "LFX Mentee - urunc Project",
    description: `My work focuses on benchmarking the performance and scalability of sandboxed execution models across runc, gVisor, Kata Containers, and urunc. I am designing a reproducible benchmarking suite in Go and Python to measure runtime overhead across container lifecycle latency, CPU performance, memory usage, storage I/O, and network performance.

Key areas include measuring the “virtualization tax” of microVM-backed runtimes such as Firecracker and QEMU, comparing guest unikernel execution against traditional containers, collecting Linux system metrics using perf, cgroups, procfs, smem, and containerd events, and running repeated benchmark trials to produce reliable results.`,
    github: [
      {
        name: "Repository",
        url: "https://github.com/urunc-dev/evaluation_suite",
      },
    ],
    website: "https://urunc.io/",
    icon: "https://urunc.io/assets/images/urunc-logo-light.svg",
  },
  {
    startDate: "June 2026 - July 2026",
    stage: "Internship",
    name: "SWE Intern - Sunbird AI",
    description:
      "Focused on Sahara Benchmark evaluation for Sunbird’s Sunflower models. I studied the benchmark paper and codebase; curated supported tasks and language coverage; ran Sahara Benchmark experiments on Sunflower-14B, Sunflower-Qwen3.5-9B; benchmarked Qwen 3.5-9B for comparison; and generated a report analyzing model performance across selected African language tasks.",
    github: [],
    website: "https://sunbird.ai/",
    icon: "/img/sunbird.jpg",
  },
  {
    startDate: "December 2025 - Feb 2025",
    stage: "Internship",
    name: "Hope Haven Christian School",
    description:
      "Developed Hope Haven Grade Analysis Platform, a Data Analysis Software used by administrators to analyse trends, insights and predictions in student grades and performance. Worked with Network administrators to setup and internal network connected to the school server ensuring the application is only accessible internally.",
    github: [],
    website: "https://www.hopehavenrwanda.org/",
    icon: "https://hopehaven.infralane.cloud/icon.webp",
  },
  {
    startDate: "March 2025 - August 2025",
    stage: "Internship",
    name: "Crane Cloud",
    description:
      "Developed Crane Cloud Mira, a software platform that automatically turns source code into container images.",
    github: [
      {
        name: "Repository",
        url: "https://github.com/crane-cloud/mira-new",
      },
    ],
    website: "https://cranecloud.io/",
    icon: "/icons/cranecloud.svg",
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
              Over the years, I have cultivated a diverse skill set in software
              engineering, spanning multiple programming languages, cloud
              platforms, and database systems. My expertise lies in building
              scalable, secure, and high-performance applications that meet the
              demands of modern software development.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Core Languages",
                  time: "7 YEARS",
                  stack: "Go, Rust, TypeScript, C, Python",
                },
                {
                  title: "Infrastructure",
                  time: "4 YEARS",
                  stack: "Linux, Kubernetes, GCP, GitHub",
                },
                {
                  title: "Databases",
                  time: "3 YEARS",
                  stack: "PostgreSQL, Redis, etcd",
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

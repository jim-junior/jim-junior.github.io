import type { Metadata } from "next";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects | Beingana Jim Junior",
  description:
    "Explore software projects by Beingana Jim Junior, including cloud platforms, developer tools, workflow orchestration, and web UI libraries.",
};

function ProjectLink({
  href,
  type,
}: {
  href: string;
  type: "website" | "github";
}) {
  const isWebsite = type === "website";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b6bcb] transition-colors hover:text-[#0053a1] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0053a1]"
    >
      {isWebsite ? (
        <Globe2 size={15} strokeWidth={1.75} />
      ) : (
        <FaGithub size={15} />
      )}
      {isWebsite ? "Visit website" : "View on GitHub"}
      <ArrowUpRight
        size={14}
        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
      />
    </a>
  );
}

export default function ProjectsPage() {
  const openSourceCount = projects.filter((project) => project.github).length;

  return (
    <div className="w-full text-[#1a1c1d]">
      <header className="mb-24 grid gap-12 border-b border-[#c1c6d4]/30 pb-16 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-[#5d5e60]">
            Selected work
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-none tracking-tighter md:text-7xl">
            <span className="text-[#5d5e60]/20">Projects</span>
            and systems I&apos;ve built.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#414752]">
            A collection of cloud platforms, developer tools, and open-source
            software focused on making complex technology easier to use.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-8 lg:col-span-4 lg:border-l lg:border-[#c1c6d4]/30 lg:pl-10">
          <div>
            <dd className="text-3xl font-bold tracking-tight">
              {projects.length}
            </dd>
            <dt className="mt-2 text-[0.6875rem] uppercase tracking-widest text-[#5d5e60]">
              Projects
            </dt>
          </div>
          <div>
            <dd className="text-3xl font-bold tracking-tight">
              {openSourceCount}
            </dd>
            <dt className="mt-2 text-[0.6875rem] uppercase tracking-widest text-[#5d5e60]">
              Open source
            </dt>
          </div>
        </dl>
      </header>

      <section
        aria-labelledby="project-list"
        className="grid gap-10 lg:grid-cols-12"
      >
        <div className="lg:col-span-3">
          <p className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#5d5e60] lg:sticky lg:top-24">
            Project index
          </p>
        </div>

        <div className="lg:col-span-9">
          <h2 id="project-list" className="sr-only">
            Project list
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group flex min-h-80 flex-col border border-[#c1c6d4]/30 bg-white p-7 shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#c1c6d4]/70 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#5d5e60]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0053a1]/10 text-sm font-bold text-[#0b6bcb]"
                    aria-hidden="true"
                  >
                    {project.name.charAt(0)}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-bold tracking-tight transition-colors group-hover:text-[#0b6bcb]">
                  {project.name}
                </h3>
                <p className="mt-4 leading-7 text-[#5d5e60]">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-x-6 gap-y-4 border-t border-[#c1c6d4]/30 pt-6">
                  {project.website && (
                    <ProjectLink href={project.website} type="website" />
                  )}
                  {project.github && (
                    <ProjectLink href={project.github} type="github" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

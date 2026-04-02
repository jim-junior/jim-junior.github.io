import React from "react";
import { sampleProjects } from "./projects";

const Header = () => {
  return (
    <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#c1c6d4]/30 pb-16">
      <div className="max-w-2xl">
        <div className="text-[0.6875rem] uppercase tracking-widest text-[#5d5e60] font-bold mb-4">
          ENGINEERING LOGBOOK v2.0
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-[#1a1c1d] mb-6">
          /code — <br />
          Technical Evolution
        </h1>
        <p className="text-lg text-[#414752] max-w-xl leading-relaxed">
          A chronological trace of software engineering projects, experiments,
          and insights that have shaped my journey as a developer. This logbook
          serves as a window into my technical evolution
        </p>
      </div>
      <div className="hidden lg:block text-right">
        <div className="text-[0.6875rem] font-mono text-[#5d5e60] space-y-1">
          <div>LAST_ENTRY: {sampleProjects[0].startDate}</div>
          <div>LOG_STATUS: ACTIVE</div>
          <div>PRECISION: HIGH</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

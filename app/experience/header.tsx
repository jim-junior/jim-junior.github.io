import React from "react";

const Header = () => {
  return (
    <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-[#c1c6d4]/30 pb-16">
      <div className="max-w-2xl">
        <div className="text-[0.6875rem] uppercase tracking-widest text-[#5d5e60] font-bold mb-4">
          ENGINEERING EXPERIENCE LOGBOOK
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-[#1a1c1d] mb-6">
          <span className="text-[#5d5e60]/20">Professional </span>
          Experience
        </h1>
        <p className="text-lg text-[#414752] max-w-xl leading-relaxed">
          A curated collection of my professional journey, showcasing the
          projects, roles, and experiences that have shaped my career in
          software engineering. Each entry reflects my commitment to innovation,
          collaboration, and continuous learning in the ever-evolving tech
          landscape.
        </p>
      </div>
    </header>
  );
};

export default Header;

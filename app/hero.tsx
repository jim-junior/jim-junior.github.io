const Hero = () => {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
      <div className="lg:col-span-8">
        <p className="text-[#0053a1] font-medium tracking-[0.2em] uppercase mb-4 text-[0.6875rem]">
          Engineer / Architect / Strategist
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-8">
          /me — <span className="text-[#5d5e60]/20">Beingana</span> Jim Junior.
        </h1>
        <p className="text-xl md:text-2xl font-light text-[#414752] leading-relaxed max-w-2xl">
          An engineering student at Makerere University specializing in the
          intersection of{" "}
          <span className="text-[#1a1c1d] font-medium underline decoration-[#0053a1]/30 underline-offset-4">
            Distributed Systems
          </span>{" "}
          and{" "}
          <span className="text-[#1a1c1d] font-medium underline decoration-[#0053a1]/30 underline-offset-4">
            Financial Technology
          </span>
          .
        </p>
      </div>
      <div className="lg:col-span-4 flex justify-end items-start pt-12">
        <div className="relative w-full aspect-[3/4] bg-[#f4f3f4] overflow-hidden group">
          <img
            src="/photo.jpg"
            alt="Modern minimalist portrait"
            className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-white/80 backdrop-blur-sm">
            <p className="text-[0.6rem] tracking-widest text-[#5d5e60]">
              01. ME
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

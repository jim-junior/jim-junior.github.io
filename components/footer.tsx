export const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-zinc-200/20 bg-zinc-50 dark:bg-zinc-900">
      <div className="text-[0.6875rem] uppercase tracking-widest text-zinc-500">
        © 2024 JIM JUNIOR. ENGINEERED WITH PRECISION.
      </div>
      <div className="flex gap-6">
        {["GITHUB", "LINKEDIN", "DEV.TO", "MEDIUM", "MASTODON"].map(
          (platform) => (
            <a
              key={platform}
              href="#"
              className="text-[0.6875rem] uppercase tracking-widest text-zinc-400 hover:text-blue-600 hover:underline transition-all duration-300"
            >
              {platform}
            </a>
          ),
        )}
      </div>
    </footer>
  );
};

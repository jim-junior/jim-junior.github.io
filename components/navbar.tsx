import { FaTerminal } from "react-icons/fa";

/**
 * Navigation Component
 */
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 lg:px-12 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-[0px_10px_30px_rgba(26,28,29,0.04)]">
      <div className="font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 text-xl">
        JIM JUNIOR
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-6">
          <a
            href="/"
            className="uppercase tracking-[0.1em] text-[0.6875rem] text-blue-600 dark:text-blue-500 font-bold border-b border-blue-600 transition-colors duration-200"
          >
            /me
          </a>
          <a
            href="/code"
            className="uppercase tracking-[0.1em] text-[0.6875rem] text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors duration-200"
          >
            /code
          </a>
          <a
            href="/blog"
            className="uppercase tracking-[0.1em] text-[0.6875rem] text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors duration-200"
          >
            /blog
          </a>
        </div>
        <button className="text-zinc-900 dark:text-zinc-50 scale-95 active:opacity-80 transition-transform">
          <FaTerminal size={24} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

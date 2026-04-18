import { useState } from "react";
import { FaTerminal, FaBars, FaTimes } from "react-icons/fa";

/**
 * Navigation Component
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-[0px_10px_30px_rgba(26,28,29,0.04)]">
      {/* Main Nav Container */}
      <div className="flex justify-between items-center px-6 py-4 lg:px-12">
        <div className="font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 text-xl">
          JIM JUNIOR
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          {/* Desktop Links */}
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

          {/* Terminal Button (Always visible) */}
          <button className="text-zinc-900 dark:text-zinc-50 scale-95 active:opacity-80 transition-transform">
            <FaTerminal size={24} strokeWidth={1.5} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-zinc-900 dark:text-zinc-50 p-1 active:opacity-80 transition-transform"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 shadow-xl py-4 px-6 flex flex-col gap-4 origin-top animate-in slide-in-from-top-2 fade-in duration-200">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="uppercase tracking-[0.1em] text-[0.75rem] text-blue-600 dark:text-blue-500 font-bold transition-colors duration-200 py-2"
          >
            /me
          </a>
          <a
            href="/code"
            onClick={() => setIsOpen(false)}
            className="uppercase tracking-[0.1em] text-[0.75rem] text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors duration-200 py-2"
          >
            /code
          </a>
          <a
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="uppercase tracking-[0.1em] text-[0.75rem] text-zinc-500 dark:text-zinc-400 hover:text-blue-600 transition-colors duration-200 py-2"
          >
            /blog
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaTerminal, FaBars, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Notes", href: "/notes" },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white/80 shadow-[0px_10px_30px_rgba(26,28,29,0.04)] backdrop-blur-md dark:bg-zinc-950/80">
      <div className="flex items-center justify-between px-6 py-4 lg:px-12">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
        >
          JIM JUNIOR
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <div className="hidden gap-6 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`border-b text-[0.6875rem] font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${
                    active
                      ? "border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500"
                      : "border-transparent text-zinc-500 hover:text-blue-600 dark:text-zinc-400"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="scale-95 text-zinc-900 transition-transform active:opacity-80 dark:text-zinc-50"
            aria-label="Open terminal"
          >
            <FaTerminal size={24} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            className="p-1 text-zinc-900 transition-transform active:opacity-80 dark:text-zinc-50 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 top-full flex w-full origin-top animate-in flex-col gap-2 border-t border-zinc-100 bg-white px-6 py-4 shadow-xl duration-200 fade-in slide-in-from-top-2 dark:border-zinc-900 dark:bg-zinc-950 md:hidden">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-[0.75rem] font-bold uppercase tracking-[0.1em] transition-colors duration-200 ${
                  active
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-zinc-500 hover:text-blue-600 dark:text-zinc-400"
                }`}
              >
                /{item.label.toLowerCase()}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

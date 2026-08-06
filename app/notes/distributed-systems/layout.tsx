import type { ReactNode } from "react";
import Link from "next/link";

export default function DistributedSystemsNotesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <article className="mx-auto w-full max-w-[52rem] pb-10 text-slate-700 [font-family:charter,Georgia,'Times_New_Roman',serif]">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex border-2 border-slate-950 bg-zinc-100 text-xs font-bold uppercase tracking-[0.09em] [font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]"
      >
        <Link
          href="/notes"
          className="border-r-2 border-slate-950 bg-white px-4 py-3 text-[#0053a1] transition-colors hover:bg-black hover:text-white focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0053a1]"
        >
          Notes
        </Link>
        <span className="flex items-center px-4 py-3 text-slate-600">
          Distributed Systems
        </span>
      </nav>
      {children}
    </article>
  );
}

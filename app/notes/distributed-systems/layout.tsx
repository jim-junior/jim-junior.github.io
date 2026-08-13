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
        className="mb-10 flex items-center gap-3 border-b border-[#c1c6d4]/30 pb-4 text-xs font-bold uppercase tracking-wider [font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]"
      >
        <Link
          href="/notes"
          className="text-[#0b6bcb] transition-colors hover:text-[#0053a1] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0053a1]"
        >
          Notes
        </Link>
        <span className="text-[#c1c6d4]" aria-hidden="true">/</span>
        <span className="text-[#5d5e60]">
          Distributed Systems
        </span>
      </nav>
      {children}
    </article>
  );
}

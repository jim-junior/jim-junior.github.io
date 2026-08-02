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
        className="mb-8 flex items-center gap-2 border-b border-slate-200 pb-5 text-sm [font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]"
      >
        <Link
          href="/notes"
          className="font-semibold text-blue-700 transition-colors hover:text-blue-900"
        >
          Notes
        </Link>
        <span className="text-slate-300" aria-hidden="true">
          /
        </span>
        <span className="text-slate-500">Distributed Systems</span>
      </nav>
      {children}
    </article>
  );
}

import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto w-full max-w-[52rem] pb-10 text-slate-700 [font-family:charter,Georgia,'Times_New_Roman',serif]">
      {children}
    </article>
  );
}

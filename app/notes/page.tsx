import type { Metadata } from "next";
import Link from "next/link";
import { noteCollections } from "./note-data";

export const metadata: Metadata = {
  title: "Notes | Beingana Jim Junior",
  description:
    "Personal study notes and short observations on software engineering, distributed systems, and the ideas I am currently exploring.",
};

const ACCENTS = [
  "bg-white text-slate-950",
  "bg-zinc-300 text-slate-950",
  "bg-black text-white",
] as const;

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d={diagonal ? "M5 15 15 5m0 0H8m7 0v7" : "M3 10h13m0 0-5-5m5 5-5 5"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function NotesPage() {
  const noteCount = noteCollections.reduce(
    (total, collection) => total + collection.notes.length,
    0,
  );

  return (
    <div className="relative left-1/2 w-[calc(100vw-3rem)] max-w-6xl -translate-x-1/2 [font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <header className="border-2 border-slate-950 bg-zinc-100 text-slate-950">
        <div className="flex min-h-12 items-stretch border-b-2 border-slate-950 text-[0.6875rem] font-bold uppercase tracking-[0.16em]">
          <span className="w-12 shrink-0 border-r-2 border-slate-950 bg-black sm:w-16" aria-hidden="true" />
          <span className="flex items-center px-4 sm:px-6">Working notebook</span>
          <span className="ml-auto hidden items-center border-l-2 border-slate-950 bg-zinc-300 px-5 text-slate-950 sm:flex">
            In progress · Always
          </span>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_19rem]">
          <div className="relative overflow-hidden border-b-2 border-slate-950 p-6 sm:p-10 lg:border-b-0 lg:border-r-2">
            <div className="absolute right-0 top-0 h-6 w-24 bg-zinc-400 sm:h-8 sm:w-36" aria-hidden="true" />
            <div className="absolute bottom-0 right-12 h-12 w-12 bg-black sm:h-16 sm:w-16" aria-hidden="true" />
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
              Observe · Record · Revisit
            </p>
            <h1 className="max-w-4xl text-balance text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-[3.75rem]">
              Notes, fragments, and things I&apos;m learning.
            </h1>
            <p className="mt-7 max-w-2xl border-l-[6px] border-black pl-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Personal working notes, not polished articles. Concepts in
              progress, useful details, and questions I want to revisit.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1">
            <div className="flex min-h-36 flex-col justify-between border-r-2 border-slate-950 bg-black p-5 text-white lg:border-b-2 lg:border-r-0 lg:p-6">
              <span className="font-mono text-4xl font-black tabular-nums">
                {noteCount.toString().padStart(2, "0")}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em]">
                Working notes
              </span>
            </div>
            <div className="flex min-h-36 flex-col justify-between bg-zinc-300 p-5 text-slate-950 lg:p-6">
              <span className="font-mono text-4xl font-black tabular-nums">
                {noteCollections.length.toString().padStart(2, "0")}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em]">
                Subjects
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-14 space-y-16">
        {noteCollections.map((collection, collectionIndex) => (
          <section
            key={collection.slug}
            aria-labelledby={`${collection.slug}-heading`}
          >
            <div className="grid border-2 border-slate-950 bg-zinc-100 md:grid-cols-[5rem_minmax(0,1fr)_auto]">
              <div className="flex min-h-20 items-center justify-center border-b-2 border-slate-950 bg-black font-mono text-2xl font-black text-white md:border-b-0 md:border-r-2">
                {String(collectionIndex + 1).padStart(2, "0")}
              </div>
              <div className="border-b-2 border-slate-950 p-5 sm:p-6 md:border-b-0 md:border-r-2">
                <p className="text-[0.6875rem] font-black uppercase tracking-[0.16em] text-slate-600">
                  Subject
                </p>
                <h2
                  id={`${collection.slug}-heading`}
                  className="mt-1 text-2xl font-black uppercase tracking-[-0.035em] text-slate-950 sm:text-3xl"
                >
                  {collection.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                  {collection.description}
                </p>
              </div>
              <a
                href={collection.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-20 items-center justify-between gap-5 bg-white px-5 py-4 text-sm font-black uppercase tracking-[0.06em] text-[#0053a1] transition-colors hover:bg-black hover:text-white focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0053a1] md:w-44 md:flex-col md:items-start md:justify-between md:p-5"
              >
                Study source
                <span className="grid h-9 w-10 place-items-center border-2 border-slate-950 bg-white text-[#0053a1] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-950">
                  <ArrowIcon diagonal />
                </span>
                <span className="sr-only">: {collection.sourceLabel}</span>
              </a>
            </div>

            <ol className="mt-7 grid gap-5">
              {collection.notes.map((note, index) => {
                const accentClass = ACCENTS[index % ACCENTS.length];

                return (
                  <li key={note.slug}>
                    <Link
                      href={`/notes/${collection.slug}/${note.slug}`}
                      className="group grid border-2 border-slate-950 bg-white shadow-[5px_5px_0_#000] transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#000] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#0053a1] sm:grid-cols-[4.5rem_minmax(0,1fr)_auto]"
                    >
                      <span className={`flex min-h-16 items-center justify-center border-b-2 border-slate-950 font-mono text-lg font-black tabular-nums sm:min-h-full sm:border-b-0 sm:border-r-2 ${accentClass}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="p-5 sm:p-6">
                        <span className="inline-block border-2 border-slate-950 bg-zinc-100 px-2 py-1 text-[0.625rem] font-black uppercase tracking-[0.14em] text-slate-950">
                          {note.subject}
                        </span>
                        <span className="mt-3 block text-xl font-black uppercase leading-tight tracking-[-0.025em] text-slate-950 decoration-[3px] underline-offset-4 group-hover:text-[#0053a1] group-hover:underline sm:text-2xl">
                          {note.title}
                        </span>
                        <span className="mt-3 block max-w-2xl text-sm leading-6 text-slate-700">
                          {note.description}
                        </span>
                      </span>
                      <span className="flex items-center justify-between gap-6 border-t-2 border-slate-950 bg-zinc-100 px-5 py-4 sm:min-w-44 sm:flex-col sm:items-end sm:justify-between sm:border-l-2 sm:border-t-0 sm:p-5">
                        <time
                          dateTime={note.date}
                          className="whitespace-nowrap font-mono text-[0.6875rem] font-bold uppercase tracking-[0.06em] text-slate-600"
                        >
                          {formatDate(note.date)}
                        </time>
                        <span className={`grid h-9 w-11 place-items-center border-2 border-slate-950 transition-transform group-hover:translate-x-1 ${accentClass}`}>
                          <ArrowIcon />
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { noteCollections } from "./note-data";

export const metadata: Metadata = {
  title: "Notes | Beingana Jim Junior",
  description:
    "Personal study notes and short observations on software engineering, distributed systems, and the ideas I am currently exploring.",
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

export default function NotesPage() {
  const noteCount = noteCollections.reduce(
    (total, collection) => total + collection.notes.length,
    0,
  );

  return (
    <div className="mx-auto w-full max-w-5xl">
      <header className="max-w-3xl border-b border-slate-200 pb-10">
        <h1 className="text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
          Notes, fragments, and things I&apos;m learning.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          These are personal working notes, not polished articles. They capture
          concepts in progress, useful details, and questions I want to revisit.
        </p>
        <p className="mt-5 text-sm font-medium text-slate-500">
          {noteCount} notes across {noteCollections.length} subject
          {noteCollections.length === 1 ? "" : "s"}
        </p>
      </header>

      <div className="mt-12 space-y-16">
        {noteCollections.map((collection) => (
          <section
            key={collection.slug}
            aria-labelledby={`${collection.slug}-heading`}
          >
            <div className="grid gap-6 border-b border-slate-200 pb-7 md:grid-cols-[1fr_auto] md:items-end">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                  Subject{" "}
                  {String(noteCollections.indexOf(collection) + 1).padStart(
                    2,
                    "0",
                  )}
                </p>
                <h2
                  id={`${collection.slug}-heading`}
                  className="text-2xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-3xl"
                >
                  {collection.title}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {collection.description}
                </p>
              </div>
              <a
                href={collection.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                Study source
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    d="M6 14 14 6m0 0H8m6 0v6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr-only">: {collection.sourceLabel}</span>
              </a>
            </div>

            <ol className="divide-y divide-slate-200">
              {collection.notes.map((note, index) => (
                <li key={note.slug}>
                  <Link
                    href={`/notes/${collection.slug}/${note.slug}`}
                    className="group grid gap-4 py-7 transition-colors focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:grid-cols-[3.25rem_1fr_auto] sm:items-start sm:gap-5"
                  >
                    <span className="font-mono text-xs font-semibold tabular-nums text-slate-400 transition-colors group-hover:text-blue-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="mb-2 block text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-blue-700">
                        {note.subject}
                      </span>
                      <span className="block text-xl font-semibold tracking-[-0.02em] text-slate-900 transition-colors group-hover:text-blue-700">
                        {note.title}
                      </span>
                      <span className="mt-2 block max-w-2xl text-[0.9375rem] leading-6 text-slate-600">
                        {note.description}
                      </span>
                    </span>
                    <span className="flex items-center gap-4 text-sm text-slate-500 sm:pt-6">
                      <time dateTime={note.date}>{formatDate(note.date)}</time>
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-blue-700"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10h12m0 0-4-4m4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}

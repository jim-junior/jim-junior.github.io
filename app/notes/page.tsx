import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
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
    <div className="w-full text-[#1a1c1d]">
      <header className="mb-24 grid gap-12 border-b border-[#c1c6d4]/30 pb-16 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-[#5d5e60]">
            Working notebook
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-none tracking-tighter md:text-7xl">
            <span className="text-[#5d5e60]/20">Notes, fragments </span>
            and things I&apos;m learning.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[#414752]">
            Personal working notes, not polished articles. Concepts in
            progress, useful details, and questions I want to revisit.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-8 lg:col-span-4 lg:border-l lg:border-[#c1c6d4]/30 lg:pl-10">
          <div>
            <dd className="text-3xl font-bold tracking-tight">{noteCount}</dd>
            <dt className="mt-2 text-[0.6875rem] uppercase tracking-widest text-[#5d5e60]">
              Working notes
            </dt>
          </div>
          <div>
            <dd className="text-3xl font-bold tracking-tight">
              {noteCollections.length}
            </dd>
            <dt className="mt-2 text-[0.6875rem] uppercase tracking-widest text-[#5d5e60]">
              Subjects
            </dt>
          </div>
        </dl>
      </header>

      <div className="space-y-24">
        {noteCollections.map((collection, collectionIndex) => (
          <section
            key={collection.slug}
            aria-labelledby={`${collection.slug}-heading`}
            className="grid gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-3">
              <p className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#5d5e60] lg:sticky lg:top-24">
                {String(collectionIndex + 1).padStart(2, "0")} / Subject
              </p>
            </div>

            <div className="lg:col-span-9">
              <div className="mb-10 flex flex-col gap-6 border-b border-[#c1c6d4]/30 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2
                    id={`${collection.slug}-heading`}
                    className="text-3xl font-bold tracking-tight md:text-4xl"
                  >
                    {collection.title}
                  </h2>
                  <p className="mt-4 max-w-2xl leading-relaxed text-[#414752]">
                    {collection.description}
                  </p>
                </div>
                <a
                  href={collection.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b6bcb] transition-colors hover:text-[#0053a1] hover:underline"
                >
                  Study source
                  <ExternalLink size={14} />
                  <span className="sr-only">: {collection.sourceLabel}</span>
                </a>
              </div>

              <ol className="divide-y divide-[#c1c6d4]/30 border-y border-[#c1c6d4]/30">
                {collection.notes.map((note, index) => (
                  <li key={note.slug}>
                    <Link
                      href={`/notes/${collection.slug}/${note.slug}`}
                      className="group grid gap-4 py-7 transition-colors hover:bg-white sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:px-5"
                    >
                      <span className="font-mono text-xs text-[#5d5e60]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="mb-2 block text-[0.625rem] font-bold uppercase tracking-[0.16em] text-[#0b6bcb]">
                          {note.subject}
                        </span>
                        <span className="block text-xl font-bold tracking-tight transition-colors group-hover:text-[#0b6bcb] sm:text-2xl">
                          {note.title}
                        </span>
                        <span className="mt-2 block max-w-2xl text-sm leading-6 text-[#5d5e60]">
                          {note.description}
                        </span>
                      </span>
                      <span className="flex items-center gap-5 text-[#5d5e60]">
                        <time
                          dateTime={note.date}
                          className="whitespace-nowrap font-mono text-[0.6875rem]"
                        >
                          {formatDate(note.date)}
                        </time>
                        <ArrowRight
                          size={18}
                          className="text-[#0b6bcb] transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

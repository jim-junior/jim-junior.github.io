import Link from "next/link";
import type { Post, Publication } from "./post-data";

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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M3 10h13m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function BlogPostCard({
  post,
  featured = false,
  accent = 0,
}: {
  post: Post;
  featured?: boolean;
  accent?: number;
}) {
  const accentClass = ACCENTS[accent % ACCENTS.length];

  return (
    <article
      className={`group relative flex h-full flex-col border-2 border-slate-950 bg-white shadow-[6px_6px_0_#000] transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_#000] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className={`h-3 w-full border-b-2 border-slate-950 ${accentClass}`} aria-hidden="true" />
      <Link
        href={`/blog/${post.slug}`}
        className="relative block overflow-hidden border-b-2 border-slate-950 bg-slate-200 focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0053a1]"
        aria-label={`Read ${post.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          className={`w-full object-cover saturate-[0.8] contrast-[1.08] transition duration-300 group-hover:saturate-100 ${
            featured ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/10]"
          }`}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
        <span className={`absolute left-0 top-0 border-b-2 border-r-2 border-slate-950 px-3 py-2 text-[0.625rem] font-black uppercase tracking-[0.13em] ${accentClass}`}>
          {post.cartegory}
        </span>
      </Link>

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
        <div className="flex items-center gap-3">
          <span className={`h-3 w-3 border border-slate-950 ${accentClass}`} aria-hidden="true" />
          <time
            dateTime={post.date}
            className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-slate-600"
          >
            {formatDate(post.date)}
          </time>
        </div>
        <h2
          className={`mt-4 font-black uppercase leading-[1.05] tracking-[-0.035em] text-slate-950 ${
            featured ? "text-2xl sm:text-[2rem]" : "text-xl"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="decoration-[3px] underline-offset-4 hover:text-[#0053a1] hover:underline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#0053a1]"
          >
            {post.title}
          </Link>
        </h2>
        <p
          className={`mt-4 text-slate-700 ${
            featured ? "max-w-3xl text-base leading-7" : "text-sm leading-6"
          }`}
        >
          {post.description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t-2 border-slate-950 pt-5 text-sm font-black uppercase tracking-[0.06em] text-slate-950">
          <span>Read article</span>
          <span className={`grid h-8 w-10 place-items-center border-2 border-slate-950 transition-transform duration-200 group-hover:translate-x-1 ${accentClass}`}>
            <ArrowIcon />
          </span>
        </div>
      </div>
    </article>
  );
}

export function PublicationCard({ publication }: { publication: Publication }) {
  const displayPosts = publication.posts.slice(0, 3);

  return (
    <article className="group relative flex h-full flex-col border-2 border-slate-950 bg-black p-6 text-white shadow-[6px_6px_0_#000] transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[9px_9px_0_#000]">
      <div className="absolute right-0 top-0 h-16 w-16 border-b-2 border-l-2 border-white bg-zinc-400" aria-hidden="true" />
      <div className="absolute right-16 top-16 h-8 w-8 bg-white" aria-hidden="true" />

      <div className="relative flex items-center justify-between gap-16">
        <span className="border-2 border-white bg-slate-950 px-3 py-1.5 text-[0.625rem] font-black uppercase tracking-[0.14em] text-white">
          Learning series
        </span>
        <span className="whitespace-nowrap font-mono text-xs font-bold text-zinc-300">
          {publication.posts.length.toString().padStart(2, "0")} parts
        </span>
      </div>

      <h2 className="relative mt-8 max-w-[85%] text-2xl font-black uppercase leading-[1.05] tracking-[-0.035em]">
        {publication.title}
      </h2>
      <p className="relative mt-4 text-sm leading-6 text-zinc-300">
        {publication.description}
      </p>

      <ol className="relative my-6 border-y-2 border-white">
        {displayPosts.map((post, index) => (
          <li key={post.slug} className="flex gap-3 border-b border-white/40 py-3 text-sm text-white last:border-b-0">
            <span className="font-mono text-[0.6875rem] font-bold text-zinc-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="line-clamp-1">{post.title}</span>
          </li>
        ))}
      </ol>

      <div className="relative mt-auto flex items-center justify-between text-sm font-black uppercase tracking-[0.06em] text-white">
        <span>Explore series</span>
        <span className="grid h-8 w-10 place-items-center border-2 border-white bg-white text-slate-950 transition-transform duration-200 group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </div>
      <Link
        href={`/blog/publication/${publication.id}`}
        className="absolute inset-0 focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#0053a1]"
        aria-label={`Explore ${publication.title}`}
      />
    </article>
  );
}

import Link from "next/link";
import type { Post, Publication } from "./post-data";

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
        d="M4 10h12m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BlogPostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_-25px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_50px_-28px_rgba(30,64,175,0.35)] ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="relative block overflow-hidden bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600"
        aria-label={`Read ${post.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          className={`w-full object-cover transition duration-500 group-hover:scale-[1.025] ${
            featured ? "aspect-[16/9] sm:aspect-[2/1]" : "aspect-[16/10]"
          }`}
        />
        <span className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md">
          {post.cartegory}
        </span>
      </Link>

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-7" : "p-5 sm:p-6"}`}>
        <time
          dateTime={post.date}
          className="text-xs font-semibold uppercase tracking-[0.09em] text-slate-500"
        >
          {formatDate(post.date)}
        </time>
        <h2
          className={`mt-3 font-semibold leading-tight tracking-[-0.025em] text-slate-950 transition-colors group-hover:text-blue-700 ${
            featured ? "text-2xl sm:text-[1.75rem]" : "text-xl"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            {post.title}
          </Link>
        </h2>
        <p
          className={`mt-3 text-slate-600 ${
            featured ? "max-w-3xl text-base leading-7" : "text-sm leading-6"
          }`}
        >
          {post.description}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-blue-700">
          <span>Read article</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 p-6 text-white shadow-[0_18px_45px_-28px_rgba(30,64,175,0.8)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_-28px_rgba(30,64,175,0.9)]">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-blue-400/20" />
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-blue-300/20" />

      <div className="relative flex items-center justify-between">
        <span className="rounded-full border border-blue-300/25 bg-blue-400/10 px-3 py-1 text-[0.625rem] font-bold uppercase tracking-[0.14em] text-blue-100">
          Learning series
        </span>
        <span className="font-mono text-xs text-blue-200">
          {publication.posts.length.toString().padStart(2, "0")} parts
        </span>
      </div>

      <h2 className="relative mt-7 text-2xl font-semibold leading-tight tracking-[-0.03em]">
        {publication.title}
      </h2>
      <p className="relative mt-3 text-sm leading-6 text-blue-100/80">
        {publication.description}
      </p>

      <ol className="relative my-6 divide-y divide-white/10 border-y border-white/10">
        {displayPosts.map((post, index) => (
          <li key={post.slug} className="flex gap-3 py-3 text-sm text-blue-50">
            <span className="font-mono text-[0.6875rem] text-blue-300">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="line-clamp-1">{post.title}</span>
          </li>
        ))}
      </ol>

      <div className="relative mt-auto flex items-center justify-between text-sm font-semibold text-blue-100">
        <span>Explore series</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          <ArrowIcon />
        </span>
      </div>
      <Link
        href={`/blog/publication/${publication.id}`}
        className="absolute inset-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        aria-label={`Explore ${publication.title}`}
      />
    </article>
  );
}

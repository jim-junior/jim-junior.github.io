import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post, Publication } from "./post-data";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

export default function BlogPostCard({
  post,
  featured = false,
}: {
  post: Post;
  featured?: boolean;
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden border border-[#c1c6d4]/30 bg-white shadow-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#c1c6d4]/70 hover:shadow-lg ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`block overflow-hidden bg-[#f4f3f4] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0b6bcb] ${
          featured ? "md:h-full" : ""
        }`}
        aria-label={`Read ${post.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          loading={featured ? "eager" : "lazy"}
          decoding="async"
          className={`w-full object-cover grayscale-[0.2] transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0 ${
            featured ? "aspect-[16/10] h-full" : "aspect-[16/10]"
          }`}
        />
      </Link>

      <div className={`flex flex-1 flex-col ${featured ? "p-7 md:p-8" : "p-6"}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-[#0b6bcb]">
            {post.cartegory}
          </span>
          <span className="h-1 w-1 rounded-full bg-[#c1c6d4]" aria-hidden="true" />
          <time
            dateTime={post.date}
            className="font-mono text-[0.6875rem] text-[#5d5e60]"
          >
            {formatDate(post.date)}
          </time>
        </div>

        <h2
          className={`mt-4 font-bold leading-tight tracking-tight ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-[#0b6bcb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b6bcb]"
          >
            {post.title}
          </Link>
        </h2>
        <p
          className={`mt-4 text-[#5d5e60] ${
            featured ? "text-base leading-7" : "text-sm leading-6"
          }`}
        >
          {post.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-7 text-xs font-bold uppercase tracking-wider text-[#0b6bcb]">
          <span>Read article</span>
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </article>
  );
}

export function PublicationCard({ publication }: { publication: Publication }) {
  const displayPosts = publication.posts.slice(0, 3);

  return (
    <article className="group relative flex h-full flex-col border border-[#c1c6d4]/30 bg-[#f4f3f4] p-6 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#c1c6d4]/70 hover:shadow-lg">
      <div className="flex items-center justify-between gap-5">
        <span className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-[#0b6bcb]">
          Learning series
        </span>
        <span className="whitespace-nowrap font-mono text-[0.6875rem] text-[#5d5e60]">
          {publication.posts.length} parts
        </span>
      </div>

      <h2 className="mt-7 text-2xl font-bold leading-tight tracking-tight">
        {publication.title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-[#5d5e60]">
        {publication.description}
      </p>

      <ol className="my-6 divide-y divide-[#c1c6d4]/40 border-y border-[#c1c6d4]/40">
        {displayPosts.map((post, index) => (
          <li key={post.slug} className="flex gap-3 py-3 text-sm text-[#414752]">
            <span className="font-mono text-[0.6875rem] text-[#5d5e60]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="line-clamp-1">{post.title}</span>
          </li>
        ))}
      </ol>

      <div className="mt-auto flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0b6bcb]">
        <span>Explore series</span>
        <ArrowRight
          size={17}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
      <Link
        href={`/blog/publication/${publication.id}`}
        className="absolute inset-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0b6bcb]"
        aria-label={`Explore ${publication.title}`}
      />
    </article>
  );
}

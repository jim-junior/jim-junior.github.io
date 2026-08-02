import Link from "next/link";
import type { Publication } from "@/app/blog/post-data";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));

export function PublicationDetailPage({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <div className="relative left-1/2 w-[calc(100vw-3rem)] max-w-5xl -translate-x-1/2 [font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]">
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm">
        <Link href="/" className="font-medium text-slate-500 transition-colors hover:text-blue-700">
          Home
        </Link>
        <span className="text-slate-300" aria-hidden="true">/</span>
        <Link href="/blog" className="font-medium text-slate-500 transition-colors hover:text-blue-700">
          Blog
        </Link>
        <span className="text-slate-300" aria-hidden="true">/</span>
        <span className="font-semibold text-slate-800">{publication.title}</span>
      </nav>

      <header className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950 px-6 py-10 text-white shadow-[0_25px_65px_-35px_rgba(30,64,175,0.8)] sm:px-10 sm:py-14">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-blue-300/15" />
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-blue-300/15" />
        <div className="relative max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-blue-200">
            Learning series · {publication.posts.length} parts
          </p>
          <h1 className="mt-5 text-balance text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">
            {publication.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-blue-100/85 sm:text-lg">
            {publication.description}
          </p>
          {publication.longdescription && (
            <div className="mt-5 max-w-2xl text-sm leading-6 text-blue-100/70 [&_a]:font-semibold [&_a]:text-white [&_a]:underline [&_a]:decoration-blue-300/60 [&_a]:underline-offset-4">
              {publication.longdescription}
            </div>
          )}
        </div>
      </header>

      <section aria-labelledby="series-posts" className="mt-12">
        <div className="mb-6 border-b border-slate-200 pb-4">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700">Reading list</p>
          <h2 id="series-posts" className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-slate-950">
            Posts in this series
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {publication.posts.map((post, index) => (
            <article
              key={post.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_35px_-25px_rgba(15,23,42,0.45)] transition duration-300 hover:-translate-y-1 hover:border-blue-200"
            >
              {post.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/8] w-full bg-slate-100 object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              )}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                  <span>Part {String(index + 1).padStart(2, "0")}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.02em] text-slate-950 transition-colors group-hover:text-blue-700">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.description}</p>
                <Link
                  href={`/blog/publication/${publication.id}/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  Read part <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PublicationDetailPage;

import LayoutGridPosts from "./grid-layout";
import BlogPostCard, { PublicationCard } from "./post-card";
import { posts, type Post } from "./post-data";

export default function BlogPosts() {
  const visiblePosts = posts.filter((post) => !post.hidden);
  const featuredPost = visiblePosts.find(
    (post): post is Post => post.itemType === "post",
  );

  return (
    <section aria-labelledby="latest-writing" className="mt-14">
      <div className="mb-8 flex items-stretch border-y-2 border-slate-950 bg-zinc-100">
        <span className="w-4 shrink-0 bg-black sm:w-6" aria-hidden="true" />
        <div className="flex flex-1 items-end justify-between gap-6 px-5 py-4 sm:px-6">
          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-slate-600">
              From the archive
            </p>
            <h2
              id="latest-writing"
              className="mt-1 text-2xl font-black uppercase tracking-[-0.035em] text-slate-950"
            >
              Latest writing
            </h2>
          </div>
          <p className="hidden border-2 border-slate-950 bg-zinc-300 px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-slate-950 sm:block">
            {visiblePosts.length} entries
          </p>
        </div>
      </div>

      <LayoutGridPosts>
        {visiblePosts.map((post, index) =>
          post.itemType === "post" ? (
            <BlogPostCard
              key={post.slug}
              post={post}
              featured={post.slug === featuredPost?.slug}
              accent={index % 3}
            />
          ) : (
            <PublicationCard key={post.id} publication={post} />
          ),
        )}
      </LayoutGridPosts>
    </section>
  );
}

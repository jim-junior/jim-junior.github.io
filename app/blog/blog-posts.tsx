import LayoutGridPosts from "./grid-layout";
import BlogPostCard, { PublicationCard } from "./post-card";
import { posts, type Post } from "./post-data";

export default function BlogPosts() {
  const visiblePosts = posts.filter((post) => !post.hidden);
  const featuredPost = visiblePosts.find(
    (post): post is Post => post.itemType === "post",
  );

  return (
    <section aria-labelledby="latest-writing" className="mt-12">
      <div className="mb-6 flex items-end justify-between gap-6 border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            From the archive
          </p>
          <h2
            id="latest-writing"
            className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-slate-950"
          >
            Latest writing
          </h2>
        </div>
        <p className="hidden text-sm text-slate-500 sm:block">
          {visiblePosts.length} entries
        </p>
      </div>

      <LayoutGridPosts>
        {visiblePosts.map((post) =>
          post.itemType === "post" ? (
            <BlogPostCard
              key={post.slug}
              post={post}
              featured={post.slug === featuredPost?.slug}
            />
          ) : (
            <PublicationCard key={post.id} publication={post} />
          ),
        )}
      </LayoutGridPosts>
    </section>
  );
}

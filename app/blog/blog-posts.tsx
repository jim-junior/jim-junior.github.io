import LayoutGridPosts from "./grid-layout";
import BlogPostCard, { PublicationCard } from "./post-card";
import { posts, type Post } from "./post-data";

export default function BlogPosts() {
  const visiblePosts = posts.filter((post) => !post.hidden);
  const featuredPost = visiblePosts.find(
    (post): post is Post => post.itemType === "post",
  );

  return (
    <section aria-labelledby="latest-writing" className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <div className="lg:sticky lg:top-24">
          <p className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#5d5e60]">
            From the archive
          </p>
          <p className="mt-3 font-mono text-xs text-[#5d5e60]">
            {visiblePosts.length} entries
          </p>
        </div>
      </div>
      <div className="lg:col-span-9">
        <div className="mb-8 flex items-end justify-between border-b border-[#c1c6d4]/30 pb-5">
          <h2 id="latest-writing" className="text-3xl font-bold tracking-tight">
            Latest writing
          </h2>
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
      </div>
    </section>
  );
}

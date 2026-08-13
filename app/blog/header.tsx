import { posts, type Post } from "./post-data";

export default function Header() {
  const articles = posts.filter(
    (post): post is Post => !post.hidden && post.itemType === "post",
  );
  const topics = new Set(articles.map((post) => post.cartegory)).size;

  return (
    <header className="mb-24 grid gap-12 border-b border-[#c1c6d4]/30 pb-16 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-8">
        <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-widest text-[#5d5e60]">
          Engineering journal
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-none tracking-tighter md:text-7xl">
          <span className="text-[#5d5e60]/20">Ideas, systems </span>
          and lessons from building software.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-[#414752]">
          Long-form writing on cloud-native engineering, distributed systems,
          software architecture, and the projects teaching me along the way.
        </p>
      </div>

      <dl className="grid grid-cols-2 gap-8 lg:col-span-4 lg:border-l lg:border-[#c1c6d4]/30 lg:pl-10">
        <div>
          <dd className="text-3xl font-bold tracking-tight">
            {articles.length}
          </dd>
          <dt className="mt-2 text-[0.6875rem] uppercase tracking-widest text-[#5d5e60]">
            Articles
          </dt>
        </div>
        <div>
          <dd className="text-3xl font-bold tracking-tight">{topics}</dd>
          <dt className="mt-2 text-[0.6875rem] uppercase tracking-widest text-[#5d5e60]">
            Topics
          </dt>
        </div>
      </dl>
    </header>
  );
}

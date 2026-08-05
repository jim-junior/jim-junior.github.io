import { posts, type Post } from "./post-data";

export default function Header() {
  const articles = posts.filter(
    (post): post is Post => !post.hidden && post.itemType === "post",
  );
  const topics = new Set(articles.map((post) => post.cartegory)).size;

  return (
    <header className="grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
      <div className="max-w-3xl">
        <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[3.5rem]">
          Ideas, systems, and lessons from building software.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Long-form writing on cloud-native engineering, distributed systems,
          software architecture, and the projects teaching me along the way.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="block font-mono text-2xl font-semibold text-slate-950">
            {articles.length.toString().padStart(2, "0")}
          </span>
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
            Published articles
          </span>
        </div>
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-4">
          <span className="block font-mono text-2xl font-semibold text-blue-800">
            {topics.toString().padStart(2, "0")}
          </span>
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.1em] text-blue-700">
            Topics explored
          </span>
        </div>
      </div>
    </header>
  );
}

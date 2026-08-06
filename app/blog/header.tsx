import { posts, type Post } from "./post-data";

export default function Header() {
  const articles = posts.filter(
    (post): post is Post => !post.hidden && post.itemType === "post",
  );
  const topics = new Set(articles.map((post) => post.cartegory)).size;

  return (
    <header className="border-2 border-slate-950 bg-zinc-100 text-slate-950">
      <div className="flex min-h-12 items-stretch border-b-2 border-slate-950 text-[0.6875rem] font-bold uppercase tracking-[0.16em]">
        <span className="w-12 shrink-0 border-r-2 border-slate-950 bg-black sm:w-16" aria-hidden="true" />
        <span className="flex items-center px-4 sm:px-6">Engineering journal</span>
        <span className="ml-auto hidden items-center border-l-2 border-slate-950 bg-zinc-300 px-5 sm:flex">
          Kampala · UG
        </span>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="relative overflow-hidden border-b-2 border-slate-950 p-6 sm:p-10 lg:border-b-0 lg:border-r-2">
          <div className="absolute right-0 top-0 h-6 w-24 bg-zinc-400 sm:h-8 sm:w-36" aria-hidden="true" />
          <div className="absolute bottom-0 right-12 h-12 w-12 bg-black sm:h-16 sm:w-16" aria-hidden="true" />
          <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.14em] text-slate-600">
            Form follows function / 01
          </p>
          <h1 className="max-w-4xl text-balance text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-[3.75rem]">
            Ideas, systems, and lessons from building software.
          </h1>
          <p className="mt-7 max-w-2xl border-l-[6px] border-black pl-5 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Long-form writing on cloud-native engineering, distributed systems,
            software architecture, and the projects teaching me along the way.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1">
          <div className="flex min-h-36 flex-col justify-between border-r-2 border-slate-950 bg-zinc-300 p-5 lg:border-b-2 lg:border-r-0 lg:p-6">
            <span className="font-mono text-4xl font-black tabular-nums">
              {articles.length.toString().padStart(2, "0")}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.12em]">
              Published articles
            </span>
          </div>
          <div className="flex min-h-36 flex-col justify-between bg-black p-5 text-white lg:p-6">
            <span className="font-mono text-4xl font-black tabular-nums">
              {topics.toString().padStart(2, "0")}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.12em]">
              Topics explored
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

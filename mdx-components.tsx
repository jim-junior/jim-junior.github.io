import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";

type CodeProps = ComponentPropsWithoutRef<"code"> & {
  "data-language"?: string;
};

const cn = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

const COMPONENTS: MDXComponents = {
  h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className={cn(
        "mb-8 mt-2 text-balance text-3xl font-bold leading-[1.12] tracking-[-0.035em] text-slate-950 sm:text-4xl",
        "[font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className={cn(
        "mb-4 mt-12 scroll-mt-28 border-b border-slate-200 pb-3 text-2xl font-semibold leading-tight tracking-[-0.025em] text-slate-900 sm:text-[1.75rem]",
        "[font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className={cn(
        "mb-3 mt-9 scroll-mt-28 text-xl font-semibold leading-snug tracking-[-0.018em] text-slate-900 sm:text-[1.375rem]",
        "[font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
    <h4
      className={cn(
        "mb-2 mt-7 scroll-mt-28 text-lg font-semibold leading-snug text-slate-900",
        "[font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentPropsWithoutRef<"h5">) => (
    <h5
      className={cn(
        "mb-2 mt-6 text-base font-semibold uppercase tracking-[0.04em] text-slate-800",
        "[font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentPropsWithoutRef<"h6">) => (
    <h6
      className={cn(
        "mb-2 mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-slate-600",
        "[font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]",
        className,
      )}
      {...props}
    />
  ),

  p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
    <p
      className={cn(
        "my-5 text-[1.0625rem] leading-[1.8] text-slate-700 sm:text-lg",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, href, ...props }: ComponentPropsWithoutRef<"a">) => {
    const isExternal = href?.startsWith("http://") || href?.startsWith("https://");

    return (
      <a
        href={href}
        className={cn(
          "font-medium text-blue-700 underline decoration-blue-300 decoration-1 underline-offset-[3px] transition-colors hover:text-blue-900 hover:decoration-blue-600 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
          className,
        )}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...props}
      />
    );
  },
  em: ({ className, ...props }: ComponentPropsWithoutRef<"em">) => (
    <em className={cn("italic text-slate-800", className)} {...props} />
  ),
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className={cn("font-bold text-slate-900", className)} {...props} />
  ),
  s: ({ className, ...props }: ComponentPropsWithoutRef<"s">) => (
    <s className={cn("text-slate-500", className)} {...props} />
  ),
  u: ({ className, ...props }: ComponentPropsWithoutRef<"u">) => (
    <u className={cn("decoration-slate-400 underline-offset-4", className)} {...props} />
  ),
  mark: ({ className, ...props }: ComponentPropsWithoutRef<"mark">) => (
    <mark
      className={cn(
        "rounded-sm bg-amber-100 px-1 py-0.5 text-amber-950",
        className,
      )}
      {...props}
    />
  ),
  small: ({ className, ...props }: ComponentPropsWithoutRef<"small">) => (
    <small className={cn("text-sm leading-relaxed text-slate-500", className)} {...props} />
  ),
  sub: ({ className, ...props }: ComponentPropsWithoutRef<"sub">) => (
    <sub className={cn("text-[0.75em]", className)} {...props} />
  ),
  sup: ({ className, ...props }: ComponentPropsWithoutRef<"sup">) => (
    <sup className={cn("text-[0.75em]", className)} {...props} />
  ),
  abbr: ({ className, ...props }: ComponentPropsWithoutRef<"abbr">) => (
    <abbr
      className={cn(
        "cursor-help decoration-dotted underline-offset-4",
        className,
      )}
      {...props}
    />
  ),

  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className={cn(
        "my-5 list-disc space-y-2 pl-6 text-[1.0625rem] leading-[1.75] text-slate-700 marker:text-blue-600 sm:pl-7 sm:text-lg [&_ol]:my-2 [&_ul]:my-2",
        className,
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className={cn(
        "my-5 list-decimal space-y-2 pl-6 text-[1.0625rem] leading-[1.75] text-slate-700 marker:font-semibold marker:text-blue-700 sm:pl-7 sm:text-lg [&_ol]:my-2 [&_ul]:my-2",
        className,
      )}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li
      className={cn(
        "pl-1.5 [&>p]:my-2 [&>p]:text-[inherit] [&>p]:leading-[inherit]",
        className,
      )}
      {...props}
    />
  ),
  dl: ({ className, ...props }: ComponentPropsWithoutRef<"dl">) => (
    <dl className={cn("my-6 space-y-1", className)} {...props} />
  ),
  dt: ({ className, ...props }: ComponentPropsWithoutRef<"dt">) => (
    <dt className={cn("mt-5 font-bold text-slate-900", className)} {...props} />
  ),
  dd: ({ className, ...props }: ComponentPropsWithoutRef<"dd">) => (
    <dd className={cn("ml-5 leading-relaxed text-slate-600", className)} {...props} />
  ),

  blockquote: ({ className, ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn(
        "my-8 rounded-r-xl border-l-4 border-blue-600 bg-blue-50/70 px-5 py-1 text-slate-700 shadow-sm ring-1 ring-inset ring-blue-100",
        "[&>p]:my-4 [&>p]:text-[1.0625rem] [&>p]:italic [&>p]:leading-[1.75] [&_code]:bg-white",
        className,
      )}
      {...props}
    />
  ),

  pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className={cn(
        "my-8 overflow-x-auto rounded-xl border border-slate-800 bg-[#0b1020] py-5 text-[0.8125rem] leading-6 text-slate-100 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.75)] sm:text-sm",
        "[font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono',monospace]",
        "[tab-size:2] [&>code]:grid [&>code]:min-w-full [&>code]:w-max [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit [&_[data-highlighted-line]]:border-l-2 [&_[data-highlighted-line]]:border-blue-400 [&_[data-highlighted-line]]:bg-blue-400/10 [&_[data-line]]:px-5",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, "data-language": language, ...props }: CodeProps) => (
    <code
      data-language={language}
      className={cn(
        "rounded-md bg-slate-100 px-1.5 py-0.5 text-[0.84em] font-medium text-slate-800 ring-1 ring-inset ring-slate-200",
        "[font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Liberation_Mono',monospace]",
        language ? "bg-transparent p-0 text-[inherit] font-normal ring-0" : undefined,
        className,
      )}
      {...props}
    />
  ),
  kbd: ({ className, ...props }: ComponentPropsWithoutRef<"kbd">) => (
    <kbd
      className={cn(
        "mx-0.5 inline-flex min-w-6 items-center justify-center rounded border border-slate-300 border-b-slate-400 bg-white px-1.5 py-0.5 text-[0.75em] font-semibold text-slate-700 shadow-[0_1px_0_#94a3b8]",
        "[font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace]",
        className,
      )}
      {...props}
    />
  ),
  samp: ({ className, ...props }: ComponentPropsWithoutRef<"samp">) => (
    <samp
      className={cn(
        "rounded bg-slate-100 px-1.5 py-0.5 text-[0.85em] text-emerald-800",
        "[font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace]",
        className,
      )}
      {...props}
    />
  ),
  var: ({ className, ...props }: ComponentPropsWithoutRef<"var">) => (
    <var
      className={cn(
        "rounded bg-amber-50 px-1 py-0.5 text-[0.85em] text-amber-900",
        "[font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace]",
        className,
      )}
      {...props}
    />
  ),

  img: ({ className, alt = "", loading, ...props }: ComponentPropsWithoutRef<"img">) => (
    // Markdown images are content, so a useful alt should still be supplied in the post.
    // The empty fallback prevents a missing alt attribute from hurting accessibility.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={alt}
      loading={loading ?? "lazy"}
      decoding="async"
      className={cn(
        "my-8 h-auto w-full rounded-xl border border-slate-200 bg-white object-contain shadow-[0_18px_50px_-30px_rgba(15,23,42,0.45)]",
        className,
      )}
      {...props}
    />
  ),
  figure: ({ className, ...props }: ComponentPropsWithoutRef<"figure">) => (
    <figure className={cn("my-9", className)} {...props} />
  ),
  figcaption: ({ className, ...props }: ComponentPropsWithoutRef<"figcaption">) => (
    <figcaption
      className={cn(
        "-mt-5 text-center text-sm leading-relaxed text-slate-500",
        className,
      )}
      {...props}
    />
  ),

  table: ({ className, ...props }: ComponentPropsWithoutRef<"table">) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table
        className={cn(
          "w-full min-w-[36rem] border-collapse text-left text-[0.9375rem] leading-6 text-slate-700",
          className,
        )}
        {...props}
      />
    </div>
  ),
  thead: ({ className, ...props }: ComponentPropsWithoutRef<"thead">) => (
    <thead className={cn("bg-slate-100 text-slate-900", className)} {...props} />
  ),
  tbody: ({ className, ...props }: ComponentPropsWithoutRef<"tbody">) => (
    <tbody className={cn("divide-y divide-slate-200", className)} {...props} />
  ),
  tfoot: ({ className, ...props }: ComponentPropsWithoutRef<"tfoot">) => (
    <tfoot className={cn("border-t-2 border-slate-300 bg-slate-50 font-semibold", className)} {...props} />
  ),
  tr: ({ className, ...props }: ComponentPropsWithoutRef<"tr">) => (
    <tr className={cn("transition-colors hover:bg-blue-50/40", className)} {...props} />
  ),
  th: ({ className, ...props }: ComponentPropsWithoutRef<"th">) => (
    <th
      className={cn(
        "border-b border-slate-200 px-4 py-3 text-xs font-bold uppercase tracking-[0.06em]",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentPropsWithoutRef<"td">) => (
    <td className={cn("px-4 py-3 align-top", className)} {...props} />
  ),

  hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className={cn("my-12 border-0 border-t border-slate-200", className)} {...props} />
  ),
  br: (props: ComponentPropsWithoutRef<"br">) => <br {...props} />,
  details: ({ className, ...props }: ComponentPropsWithoutRef<"details">) => (
    <details
      className={cn(
        "group my-7 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm open:ring-1 open:ring-blue-100",
        className,
      )}
      {...props}
    />
  ),
  summary: ({ className, ...props }: ComponentPropsWithoutRef<"summary">) => (
    <summary
      className={cn(
        "cursor-pointer font-semibold text-slate-900 marker:text-blue-600 transition-colors hover:text-blue-700",
        "[font-family:'Space_Grotesk',ui-sans-serif,system-ui,sans-serif]",
        className,
      )}
      {...props}
    />
  ),
  address: ({ className, ...props }: ComponentPropsWithoutRef<"address">) => (
    <address className={cn("my-5 not-italic leading-relaxed text-slate-600", className)} {...props} />
  ),
  time: ({ className, ...props }: ComponentPropsWithoutRef<"time">) => (
    <time
      className={cn(
        "text-[0.9em] tabular-nums text-slate-500",
        "[font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace]",
        className,
      )}
      {...props}
    />
  ),
  cite: ({ className, ...props }: ComponentPropsWithoutRef<"cite">) => (
    <cite className={cn("italic text-slate-600", className)} {...props} />
  ),
  q: ({ className, ...props }: ComponentPropsWithoutRef<"q">) => (
    <q className={cn("italic text-slate-800", className)} {...props} />
  ),
  del: ({ className, ...props }: ComponentPropsWithoutRef<"del">) => (
    <del className={cn("rounded bg-rose-50 px-1 text-rose-800", className)} {...props} />
  ),
  ins: ({ className, ...props }: ComponentPropsWithoutRef<"ins">) => (
    <ins className={cn("rounded bg-emerald-50 px-1 text-emerald-800", className)} {...props} />
  ),
  ruby: ({ className, ...props }: ComponentPropsWithoutRef<"ruby">) => (
    <ruby className={cn("inline-block", className)} {...props} />
  ),
  rt: ({ className, ...props }: ComponentPropsWithoutRef<"rt">) => (
    <rt className={cn("text-[0.5em] leading-none", className)} {...props} />
  ),
  rp: ({ className, ...props }: ComponentPropsWithoutRef<"rp">) => (
    <rp className={cn("text-[0.8em] text-slate-500", className)} {...props} />
  ),
  bdi: (props: ComponentPropsWithoutRef<"bdi">) => <bdi {...props} />,
  bdo: (props: ComponentPropsWithoutRef<"bdo">) => <bdo {...props} />,
  wbr: (props: ComponentPropsWithoutRef<"wbr">) => <wbr {...props} />,
  data: ({ className, ...props }: ComponentPropsWithoutRef<"data">) => (
    <data
      className={cn(
        "text-[0.9em] text-blue-700",
        "[font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace]",
        className,
      )}
      {...props}
    />
  ),
  progress: ({ className, ...props }: ComponentPropsWithoutRef<"progress">) => (
    <progress
      className={cn("my-2 h-2 w-full overflow-hidden rounded-full accent-blue-600", className)}
      {...props}
    />
  ),
  meter: ({ className, ...props }: ComponentPropsWithoutRef<"meter">) => (
    <meter
      className={cn("my-2 h-2 w-full overflow-hidden rounded-full accent-emerald-600", className)}
      {...props}
    />
  ),

  section: ({ className, ...props }: ComponentPropsWithoutRef<"section">) => (
    <section className={cn("my-10", className)} {...props} />
  ),
  article: ({ className, ...props }: ComponentPropsWithoutRef<"article">) => (
    <article
      className={cn(
        "my-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7",
        className,
      )}
      {...props}
    />
  ),
  aside: ({ className, ...props }: ComponentPropsWithoutRef<"aside">) => (
    <aside
      className={cn(
        "my-8 rounded-r-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-3 text-slate-700 ring-1 ring-inset ring-amber-100",
        className,
      )}
      {...props}
    />
  ),
  nav: ({ className, ...props }: ComponentPropsWithoutRef<"nav">) => (
    <nav
      className={cn(
        "my-8 rounded-xl border border-slate-200 bg-slate-50 p-5",
        className,
      )}
      {...props}
    />
  ),
  header: ({ className, ...props }: ComponentPropsWithoutRef<"header">) => (
    <header className={cn("mb-8 border-b border-slate-200 pb-6", className)} {...props} />
  ),
  footer: ({ className, ...props }: ComponentPropsWithoutRef<"footer">) => (
    <footer
      className={cn(
        "mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500",
        className,
      )}
      {...props}
    />
  ),
  main: ({ className, ...props }: ComponentPropsWithoutRef<"main">) => (
    <main className={cn("w-full", className)} {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return COMPONENTS;
}
